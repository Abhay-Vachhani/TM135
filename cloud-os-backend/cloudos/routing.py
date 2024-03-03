from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from realtime_info import routing as realtime_info_routing

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(
        realtime_info_routing.websocket_urlpatterns
    ),
})
