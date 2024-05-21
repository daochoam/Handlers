import json
from django.core.serializers import serialize
from django.db import models
import datetime


def instance_serialized(obj, max_depth=10):
    visited = set()

    def _serialize(obj, depth):
        if isinstance(obj, models.Model):
            if depth > max_depth:
                return None

            if id(obj) in visited:
                return "Already Visited"

            visited.add(id(obj))
            serialized_data = serialize('python', [obj])[0]['fields']

            serialized_data['pk'] = obj.pk

            for field in obj._meta.get_fields():
                field_name = field.name
                if isinstance(field, models.ForeignKey) and hasattr(obj, field_name+"_id"):
                    related_id = getattr(obj, field_name+"_id")
                    related_obj = getattr(obj, field_name)
                    if isinstance(related_obj, models.Model):
                        serialized_data[field_name] = _serialize(
                            related_obj, depth + 1)
                    else:
                        serialized_data[field_name] = related_id
                elif isinstance(field, models.ManyToManyField):
                    related_objs = getattr(obj, field_name).all()
                    serialized_data[field_name] = [_serialize(
                        item, depth + 1) for item in related_objs]

            for key, value in serialized_data.items():
                if isinstance(value, (datetime.datetime, datetime.date)):
                    serialized_data[key] = value.isoformat()

            return serialized_data
        else:
            return obj

    return _serialize(obj, 0)


def save_json(obj, filename):
    serialized_data = instance_serialized(obj)

    with open(filename, 'w') as f:
        json.dump(serialized_data, f)
