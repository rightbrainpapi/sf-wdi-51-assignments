import datetime
# peewee is a small and simple ORM, like mongoose but simpler
from peewee import *

# We use the built in SqliteDatabase() function from peewee 
# to save a reference to a DB file to a DATABASE variable
DATABASE = SqliteDatabase('breddit.db')

# Our Sub model is pretty simple, just a name and description for now
class Sub(Model):
    name = CharField()
    description = TextField()

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)

class Post(Model):
    # The post needs to know its comments this is why we are setting up this model
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = CharField()
    title = CharField()
    text = TextField()
    # Special Note: relate the Post model to the Sub model
    #This takes a number of arguments. It the first relates back to the sub. and backref 
    sub = ForeignKeyField(Sub, backref="posts")

    # when I want to create a table It is teling me where that in the database the model is
    #It also is a place where we can place additional methods
    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)

class Comment(Model):
    # The post needs to know its comments this is why we are setting up this model
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = CharField()
    title = CharField()
    text = TextField()
    # Special Note: relate the Post model to the Sub model
    #This takes a number of arguments. It the first relates back to the sub. and backref 
    post = ForeignKeyField(Post, backref="comments")

    # when I want to create a table It is teling me where that in the database the model is
    #It also is a place where we can place additional methods
    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)


# We are creating a function called initialize which connects to the DATABASE, create a table for the Sub model, 
# and close the connection
def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Sub, Post, Comment], safe=True)
    DATABASE.close()