from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from src.apps.recipes.views.category import CategoryViewSet
from src.apps.recipes.views.recipe import RecipeViewSet

router = DefaultRouter()
router.register(r"category", CategoryViewSet)
router.register(r"recipe", RecipeViewSet)

urlpatterns = []

urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
