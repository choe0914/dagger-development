from flask import Flask, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['DEBUG'] = True

""" render template """
@app.route('/')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    app.run()

### https://www.henningludvigsen.com/index.php/project/2023-clue-classic/#lg=1&slide=14