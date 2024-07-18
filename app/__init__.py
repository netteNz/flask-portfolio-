from flask import Flask
from app.views import home, about

def create_app():
    app = Flask(__name__)

    # Register blueprints
    app.register_blueprint(home.bp)
    app.register_blueprint(about.bp)

    return app
