from django.contrib import admin

from src.apps.recipes.models.category import Category
from src.apps.recipes.models.recipe import Recipe


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "category"]
    search_fields = ["name", "description"]
    list_filter = ["category"]
