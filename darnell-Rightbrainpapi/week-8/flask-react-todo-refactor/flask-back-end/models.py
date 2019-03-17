from app import db, marshmallow # importing the marshmell and db object from app.py
from flask import jsonify

##################################################
################### Todo Model ###################
##################################################

class Todo(db.Model): #inhertiting/ extending db.Model to todo
    __table_args__ = {'extend_existing': True} #<-- This says if I change my model please rerun my model again could I have used flask-migrate
    # This is the columns of our table
    id = db.Column(db.Integer, primary_key=True)    #column 1 is id 
    body = db.Column(db.String(100))                #column 2 is body
    priority = db.Column(db.Integer)                #column 3 is priority
    completed = db.Column(db.Boolean)               #column 4 is boolean



######################################################
################### Initiate Model ###################
######################################################

    # This is an initiation of our table (aka this is our constructor)
    def __init__(self, body, priority, completed): #we are initializing the table now. 
        self.body = body   
        self.priority = priority
        self.completed = completed
        # This is the end of the constructor


##########################################################
################### Todo Model Methods ###################
##########################################################

#CREATE A Todo
    @classmethod
    def create_todo(cls, body, priority, completed):
        new_todo = Todo(body, priority, completed)  #
        try:                                        # Try & Except  is like a success & error or then catch. If I get a exception/error my except needs to handle that error for me.
            db.session.add(new_todo)                #create a sessions using sqlAlchemy --> Then place the values into the database
            db.session.commit()                     #saves the data to the database
        except:
            db.session.rollback()                   #rollback simply closes a opened session if there are exceptions/errors
            raise Exception('Session rollback')
        return todo_schema.jsonify(new_todo)        #once we are done creating the todoscheme convert it into a json and return it to app.py
######################## End of CREATE Todo Method


#RETRIEVE A Todo
    @classmethod
    def get_todo(cls, todoid):              #cls is equivalent to self
        todo = Todo.query.get(todoid)
        return todo_schema.jsonify(todo)
####################### End of RETRIEVE A Todo Method


#RETRIEVE All Todos 
    @classmethod
    def get_todos(cls):
        todos = Todo.query.all()
        return todos_schema.jsonify(todos)
####################### End of RETRIEVE All Todos Method



# #UPDATE A Todo
#     @classmethod
#     def update_todo(cls, todoid):
#         todo = Todo.query.get(todoid)
#         body = request.json.get('body', todo.body)
#         priority = request.json.get('priority', todo.priority)
#         completed = request.json.get('completed', todo.completed)

#         try:
#             db.session.update(todo)
#             db.session.commit()
#         except:
#             db.session.rollback
#             raise Exception('Session rollback')
#         return todo_schema.jsonify(todo)



#UPDATE A Todo
    @classmethod
    def update_todo(cls, todoid, body, priority, completed):
        todo = Todo.query.get(todoid)
        todo.body = body
        todo.priority = priority
        todo.completed = completed
        db.session.commit()
        return todo_schema.jsonify(todo)
####################### End of UPDATE A Todo Method


#Delete A Todo
    @classmethod
    def delete_todo(cls, todoid):
        todo = Todo.query.get(todoid)
        try:
            db.session.delete(todo)
            db.session.commit()
        except:
            db.session.rollback
        return todo_schema.jsonify(todo)
####################### End of Delete A Todo Method


# Marshmallow syntax here is being used to control what we are sendng back
class TodoSchema(marshmallow.Schema): 
  class Meta:
    fields = ('id', 'body', 'priority', 'completed') #defining the fields we want to send back

todo_schema = TodoSchema(strict=True)
todos_schema = TodoSchema(many=True, strict=True)
# End of Marshmallow


if __name__ == 'models': #If __name__ is models then you are on the models file and you need to create all tables
    db.create_all()