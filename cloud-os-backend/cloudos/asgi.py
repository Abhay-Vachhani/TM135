# cloudos/asgi.py
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import realtime_info.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cloudos.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            realtime_info.routing.websocket_urlpatterns
        )
    ),
})
