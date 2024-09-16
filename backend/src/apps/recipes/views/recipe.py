from rest_framework import mixins, viewsets
from rest_framework.parsers import FormParser, MultiPartParser

from src.apps.recipes.models.recipe import Recipe
from src.apps.recipes.serializers.recipe import RecipeSerializer


class RecipeViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    parser_classes = [MultiPartParser, FormParser]
