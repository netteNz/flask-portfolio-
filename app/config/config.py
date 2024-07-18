class Config:
    SECRET_KEY = 'your_secret_key'
    STATIC_FOLDER = 'app/static'
    TEMPLATES_FOLDER = 'app/templates'

class DevelopmentConfig(Config):
    DEBUG = True
