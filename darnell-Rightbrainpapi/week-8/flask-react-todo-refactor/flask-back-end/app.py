import os

from flask import Flask, request, jsonify #cloning the flask library
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set Base Directory
basedir = os.path.abspath(os.path.dirname(__file__)) #using the python class os we are accessing the base  directory. we are then join  that base directory with sqllite in order to create a databasefile in the main directory

# Setup Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.react_todo') #sqlite creates a database file in a folder of your choice. db.react_todo is the database name
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init Database
db = SQLAlchemy(app) #

#Init Marshmallow
marshmallow = Marshmallow(app)


DEBUG = True  #is for debugging during development. When you run into errors you will get more information on the file instead of breaking the program. It creates debugging symbols used to provide metadata about the current executing code. specific to a dev environment lets flask know this is a development environment. It should not break the app on every Exception/problem
PORT = 8000 #

# KEEP for future reference
# @app.route('/')
# def hello_world():
#     return 'Hello World'
# Defining a routes for each of the method


@app.route('/todo', methods=['GET'])
@app.route('/todo', methods=['POST'])
@app.route('/todo/<todoid>', methods=['GET', 'DELETE', 'PUT'])
def get_or_create_todo(todoid=None):
    from models import Todo                         #I need acess to the Todo model in order to run these functions
    if todoid == None and request.method == 'GET':
        return Todo.get_todos() 
    elif todoid == None:
        body = request.json['body']
        priority = request.json['priority']
        completed = request.json['completed']
        return Todo.create_todo(body, priority, completed)
    elif todoid and request.method == 'DELETE':
        return Todo.delete_todo(todoid)
    else:
        return Todo.get_todo(todoid)


@app.route('/todo/<todoid>', methods=['PUT'])
def update(todoid):
    from models import Todo
    body = request.json['body']
    priority = request.json['priority']
    completed = request.json['completed']
    return Todo.update_todo(todoid, body, priority, completed)

if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)