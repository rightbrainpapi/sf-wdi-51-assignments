from flask import Flask, g
from flask import render_template, flash, redirect, url_for

import models
from forms import SubForm, PostForm, CommentForm


DEBUG = True
PORT = 8000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'


# Handle requests when the come in (before) and when they complete (after)
@app.before_request
def before_request():
    """Connect to the DB before each request."""
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response


  # The root route will revert back to a simpler version that just returns some text
@app.route('/', methods=['GET', 'POST'])
def index():
    form = SubForm()
    # checks if the form submission is valid
    if form.validate_on_submit():
      # if it is valid, we create a new Sub
      models.Sub.create(
          name=form.name.data.strip(), 
          description=form.description.data.strip())

      flash("New sub registered. Called: {}".format(form.name.data))
      # and redirect to the main Sub index
      return redirect('/r')
      
    # if the submission isn't valid, send the user back to the original view
    return render_template("new_sub.html", title="New Sub", form=form)

@app.route('/r')
@app.route('/r/<sub>', methods=['GET', 'POST'] )
def r(sub=None):
  if sub ==None:
    # gets all subs up to a limit of 100
    subs = models.Sub.select().limit(100)
    
    # sends those subs down to the template
    return render_template("subs.html", subs=subs)
  else:
    # Find the right Sub
    sub_id = int(sub)
    # using pwee's function name called .get to find the models.sub.id that is equal to sub_id
    sub = models.Sub.get(models.Sub.id == sub_id)
    ###########################################
    posts = sub.posts

    # Define the form for Posts
    form = PostForm()
    if form.validate_on_submit():
        models.Post.create(
            user=form.user.data.strip(),
            title=form.title.data.strip(), 
            text=form.text.data.strip(), 
            sub=sub) #This is relating the form to the sub that we found

        flash("New post created")
        # Redirect back to the subreddit where the post was created
        return redirect("/r/{}".format(sub_id)) #the sub_id variable is being placed into the {} 

    # Send the found Sub to the template
    return render_template("sub.html", sub=sub, posts=posts, form=form )

@app.route('/posts')
@app.route('/posts/<id>', methods=['GET', 'POST'])
def posts(id=None):
  if id == None:
    posts = models.Post.select().limit(100)
    return render_template('posts.html', posts=posts)
  else:
    # Find the right Post
    post_id = int(id)
    # using pwee's function name called .get to find the models.Post.id that is equal to post_id
    post = models.Post.get(models.Post.id == post_id)
    ###########################################
    comments  = post.comments

    # Define the form for the comments
    form = CommentForm()
    if form.validate_on_submit():
        models.Comment.create(
            user=form.user.data.strip(),
            title=form.title.data.strip(), 
            text=form.text.data.strip(), 
            post=post) #This is relating the form to the post that we found
        flash("New post created")
        # Redirect back to the subreddit where the post was created
        return redirect("/posts/{}".format(post_id)) #the post_id variable is being placed into the {} 

    # Send the found post to the template
    return render_template('post.html', post=post,  comments=comments,  form=form)
      

  # ...

# Establish comment routes below 

@app.route('/comments')
@app.route('/comments/<id>')
def comments(id=None):
  if id == None:
    comments = models.Comment.select().limit(100)
    return render_template('comments.html', comments=comments)
  else:
    comment_id = int(id)
    comment = models.Comment.get(models.Comment.id == comment_id)
    return render_template('comment.html', comments=comments)
  return render_template('post.html', post=post,  comments=comments,  form=form)


if __name__ == '__main__':
    # before our app runs we initialize a connection to the models
    models.initialize()
    app.run(debug=DEBUG, port=PORT)


























# @app.route('/')
# def index():
#     with open('subs.json') as json_data:
#         subs = json.load(json_data)
#         return render_template('subs.html', subs=subs)


# @app.route('/r')
# @app.route('/r/<sub>')
# def r(sub=None):
#     with open('subs.json') as json_data:
#         subs = json.load(json_data)
#         if sub == None:
#             return render_template('subs.html', subs=subs)
#         else:
#             sub_id = int(sub)
#             return render_template('sub.html', sub=subs[sub_id])


# @app.route('/posts')
# @app.route('/posts/<id>')
# def posts(id=None):
#     with open('posts.json') as json_data:
#         posts = json.load(json_data)
#         if id == None:
#             return render_template('posts.html', posts=posts)
#         else:
#             post_id = int(id)
#             return render_template('post.html', post=posts[post_id])


# if __name__ == '__main__':
#     app.run(debug=DEBUG, port=PORT)
