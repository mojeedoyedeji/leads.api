from flask import flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


app.route('/')
def hello():
    return 'Leads API'