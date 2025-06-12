import os
SECRET_KEY='civic-dev'
DEBUG=True
ALLOWED_HOSTS=['*']
INSTALLED_APPS=['django.contrib.contenttypes','django.contrib.auth']
DATABASES={'default':{'ENGINE':'django.db.backends.sqlite3','NAME':'db.sqlite3'}}
