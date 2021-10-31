from flask import Flask, render_template, request, send_from_directory
from flask_mysqldb import MySQL
from flask_cors import CORS #comment this on deployment

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask'

mysql = MySQL(app)


from SpamDetect import routes