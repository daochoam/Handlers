from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rino.settings')

app = Celery('rino')

app.config_from_object('django.conf:settings', namespace='CELERY')

# Carga las tareas de todos los archivos registered_tasks.py de las aplicaciones Django.
app.autodiscover_tasks()
