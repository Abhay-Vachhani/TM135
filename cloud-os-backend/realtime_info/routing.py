from django.urls import path
from .consumers import RealtimeInfoConsumer, DisksInfoConsumer

websocket_urlpatterns = [
    path('ws/system_info/', RealtimeInfoConsumer.as_asgi()),
    path('ws/disks_info/', DisksInfoConsumer.as_asgi()),
]
