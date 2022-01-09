from flask import send_from_directory
from SpamDetect import app, mysql
from flask import render_template, request, jsonify
from SpamDetect.machinelearning import getEmailResult, getSMSResult
#from flask_cors import CORS, crossorigin

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
#@crossorigin()
def catch_all(path):
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/results', methods = ['POST'])
#@crossorigin()
def result_page():
    if request.method == 'POST':
        type = request.json['type']
        content = request.json['content']
        cursor = mysql.connection.cursor()
        cursor.execute(''' INSERT INTO xpam (type, content) VALUES(%s,%s)''',(type,content))
        mysql.connection.commit()
        cursor.close()

        resultObj={}
        if(type=='Email'):
            resultObj = getEmailResult(content)
        elif (type=='SMS'):
            resultObj = getSMSResult(content)
        
        return  resultObj


@app.route('/resultadvance', methods = ['POST', 'GET'])
def advanceresult():
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(''' SELECT * FROM resultxpam WHERE id=(SELECT MAX(id) FROM resultxpam)''')
        getData = cursor.fetchone()
        sendData = {'spamPercent': getData[4]}
        cursor.close()
        return jsonify(sendData)
    elif request.method == 'POST':
        return 'Advance result'

