from django.core.files.uploadedfile import InMemoryUploadedFile
import io


class CreateFile:
    def __init__(self, name='document', file=None, extension='docx'):
        self._name = name
        self._extension = extension
        self._file = file
        self._data = None
        if self._file:
            try:
                self.create()
            except Exception as e:
                raise Exception('Error: {}'.format(e))
        else:
            raise Exception('Ingrese una tipo de archivo o binario')

    @staticmethod
    def get_content_type(extension):
        content_types = {
            'm4a':  'audio/mp4',
            'mp3':  'audio/mpeg',
            'ogg':  'audio/ogg',
            'wav':  'audio/wav',
            'bmp':  'image/bmp',
            'gif':  'image/gif',
            'jpg':  'image/jpeg',
            'png':  'image/png',
            'tiff': 'image/tiff',
            'avi':  'video/x-msvideo',
            'mp4':  'video/mp4',
            'mpeg': 'video/mpeg',
            'mpg':  'video/mpeg',
            'ogv':  'video/ogg',
            'wmv':  'video/x-ms-wmv',
            'doc':  'application/msword',
            'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'pdf':  'application/pdf',
            'ppt':  'application/vnd.ms-powerpoint',
            'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'sfdt': 'application/octet-stream',
            'xls':  'application/vnd.ms-excel',
            'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'txt':  'text/plain',
        }

        content_types = dict(sorted(content_types.items(), key=lambda x: x[0]))
        return content_types.get(extension, 'application/octet-stream')

    @property
    def extension(self):
        return self._extension

    @property
    def name(self):
        return self._name

    @property
    def contentType(self):
        return self.get_content_type(self._extension)

    @property
    def size(self):
        return len(self._data) if self._data else 0

    @property
    def data(self):
        # TODO Return <class 'django.core.files.uploadedfile.InMemoryUploadedFile'>
        return self._data

    def create(self):
        if isinstance(self._file, bytes):
            self._data = InMemoryUploadedFile(
                io.BytesIO(self._file),
                None,
                self._name + '.' + self._extension,
                self.get_content_type(self._extension),
                len(self._file),
                None
            )
        elif not isinstance(self._file, io.BytesIO):
            file_bytes = io.BytesIO()
            self._file.save(file_bytes, format=self._extension)
            file_bytes.seek(0)

            self._data = InMemoryUploadedFile(
                file_bytes,
                None,
                self._name + '.' + self._extension,
                self.get_content_type(self._extension),
                len(file_bytes.getvalue()),
                None
            )

    def read(self):
        # TODO Return <class 'bytes'>
        if self._data:
            self._data.seek(0)
            return self._data.read()
        return None

    def save(self, path='document'):
        with open(path+'.'+self._extension, 'wb') as f:
            self._data.seek(0)
            f.write(self._data.read())

    def data_post(self):
        return {'file': (self._name+'.'+self._extension, self.read(), self.get_content_type(self._extension))}
