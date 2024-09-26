from flask import Flask, render_template
import os
from dotenv import load_dotenv

# Carrega as variáveis de ambiente do .env
load_dotenv()

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
