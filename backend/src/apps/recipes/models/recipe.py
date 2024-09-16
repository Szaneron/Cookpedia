from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(
        "Category", related_name="recipes", on_delete=models.SET_NULL, null=True, blank=True
    )
    nutritions = models.JSONField()
    steps = models.JSONField()
    image = models.ImageField(upload_to="recipes/", null=True, blank=True)

    def __str__(self):
        return self.name
