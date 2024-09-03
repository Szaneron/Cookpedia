BACKEND_DIR := backend
FRONTEND_DIR := frontend
POETRY := poetry run python manage.py

run-backend:
	cd $(BACKEND_DIR) && $(POETRY) runserver

run-frontend:
	cd $(FRONTEND_DIR) && npm start

migrate:
	cd $(BACKEND_DIR) && $(POETRY) migrate

makemigrations:
	cd $(BACKEND_DIR) && $(POETRY) makemigrations

createsuperuser:
	cd $(BACKEND_DIR) && $(POETRY) createsuperuser