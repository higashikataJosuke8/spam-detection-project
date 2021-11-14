from flask import Flask, render_template, request, send_from_directory
from flask_mysqldb import MySQL
from flask_cors import CORS #comment this on deployment
import os

app = Flask(__name__, static_folder=os.path.abspath("spam-react/build"), static_url_path='/')
CORS(app)

#connection = pymysql.connect(host='remotemysql.com', port=3306, user='g1Y0h8pKl9', password='GzG7GAVPMg', db='g1Y0h8pKl9', charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)

app.config['MYSQL_HOST'] = 'remotemysql.com'
app.config['MYSQL_USER'] = 'g1Y0h8pKl9'
app.config['MYSQL_PASSWORD'] = 'GzG7GAVPMg'
app.config['MYSQL_DB'] = 'g1Y0h8pKl9'
app.config['MYSQL_PORT'] = 3306

mysql = MySQL(app)



from SpamDetect import routes