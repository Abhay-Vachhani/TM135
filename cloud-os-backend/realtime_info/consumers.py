import json
import asyncio
from channels.generic.websocket import AsyncWebsocketConsumer
import psutil

def get_disk_info():
    common_filesystems = ['ext4', 'ext3', 'ext2', 'btrfs', 'xfs', 'ntfs', 'fat32', 'exfat']  
    filesystems = psutil.disk_partitions()
    disk_usage = []
    for fs in filesystems:
        if fs.fstype in common_filesystems and 'snap' not in fs.mountpoint:
            usage = psutil.disk_usage(fs.mountpoint)
            usage_percentage = usage.percent
            disk_usage.append({
                'mount': fs.mountpoint,
                'total': f'{usage.total / 1073741824:.2f}',
                'usage': f'{usage.used / 1073741824:.2f}',
                'percentage': usage_percentage
            })
    return disk_usage

class RealtimeInfoConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        self.send_info_task = asyncio.ensure_future(self.send_message_every_second())

    async def disconnect(self, close_code):
        if hasattr(self, 'send_info_task'):
            self.send_info_task.cancel()

    async def send_message_every_second(self):
        while True:
            await self.send(text_data=json.dumps({
                'cpu': psutil.cpu_percent(),
                'memory': psutil.virtual_memory().percent,
            }))
            await asyncio.sleep(2)

class DisksInfoConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        self.send_info_task = asyncio.ensure_future(self.send_message_every_second())

    async def disconnect(self, close_code):
        if hasattr(self, 'send_info_task'):
            self.send_info_task.cancel()

    async def send_message_every_second(self):
        while True:
            await self.send(text_data=json.dumps(get_disk_info()))
            await asyncio.sleep(20)
