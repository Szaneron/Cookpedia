from rest_framework import serializers

from src.apps.recipes.models.category import Category
from src.apps.recipes.models.recipe import Recipe
from src.apps.recipes.serializers.category import CategorySerializer


class RecipeSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source="category", write_only=True
    )
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Recipe
        fields = [
            "id",
            "name",
            "description",
            "category",
            "category_id",
            "nutritions",
            "steps",
            "image",
        ]
