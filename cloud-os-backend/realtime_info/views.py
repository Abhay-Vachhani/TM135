import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def list_files(request):
    path = request.GET.get('path', '/')
    file_list = []

    try:
        if os.path.isdir(path):
            files = os.listdir(path)
            for file in files:
                file_info = {}
                file_info['name'] = file
                file_info['path'] = os.path.join(path, file)
                file_info['is_dir'] = os.path.isdir(file_info['path'])
                file_list.append(file_info)
        else:
            return JsonResponse({'error': 'Invalid path or not a directory'})

    except Exception as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(file_list, safe=False)


@csrf_exempt
def upload_files(request):
    if request.method == 'POST':
        path = request.POST.get('path')
        if path is None:
            return JsonResponse({'error': 'Path can not be empty'}, status=400)

        files = request.FILES.getlist('files')
        for file in files:
            save_location = os.path.join(path, file.name)
            with open(save_location, 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'message': 'Only POST requests are allowed'})
