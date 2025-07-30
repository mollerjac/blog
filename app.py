from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hej fra din lokale Flask-hjemmeside!"

if __name__ == '__main__':
    app.run(debug=True)
