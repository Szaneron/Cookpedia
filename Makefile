BACKEND_DIR := backend
POETRY := poetry run python manage.py

run:
	cd $(BACKEND_DIR) && $(POETRY) runserver

migrate:
	cd $(BACKEND_DIR) && $(POETRY) migrate

makemigrations:
	cd $(BACKEND_DIR) && $(POETRY) makemigrations

createsuperuser:
	cd $(BACKEND_DIR) && $(POETRY) createsuperuser