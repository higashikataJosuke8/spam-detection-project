from SpamDetect import app
from SpamDetect import mysql


def getEmailResult(content):
    if(len(content) < 50):
        result='Ham'
    else:
        result='Spam'

    spamPercent = len(content)
    
    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO resultxpam (type, content, result, spampercent) VALUES(%s,%s,%s,%s)''',('Email',content, result, spamPercent))
    mysql.connection.commit()
    cursor.close()
    return {'type':'Email', 'content': content, 'spamPercent': spamPercent, 'result' : result}


def getSMSResult(content):
    if(len(content) < 5):
        result='Ham'
    else:
        result='Spam'

    spamPercent = len(content)
    
    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO resultxpam (type, content, result, spampercent) VALUES(%s,%s,%s,%s)''',('SMS',content, result, spamPercent))
    mysql.connection.commit()
    cursor.close()
    return {'type':'SMS', 'content': content, 'spamPercent': spamPercent, 'result' : result}

