from django.urls import path
from .views import list_files, upload_files

urlpatterns = [
    path('list-files', list_files),
    path('upload', upload_files),
]
