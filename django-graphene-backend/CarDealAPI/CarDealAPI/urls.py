from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from django.conf.urls.static import static
from django.conf import settings
from graphene_file_upload.django import FileUploadGraphQLView
from graphql_jwt.decorators import jwt_cookie

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("Cars.urls")),
    path(
        "graphql",
        csrf_exempt(jwt_cookie(FileUploadGraphQLView.as_view(graphiql=True))),
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
