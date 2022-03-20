from SpamDetect import app
from SpamDetect import mysql
from model.model_preprocessing import RNNModel
from model.model_preprocessing import SVCModel


def getEmailResult(content):
    model = SVCModel('model/spam_mail_svc.pkl')
    model_result = model.get_prediction(content)
    result = "Ham" if model_result[0] == 0 else "Spam"
    print(f"Model Result: {model_result[0]}, {result}")

    #spamPercent be deprecated in the future since SVC does not use percentage
    spamPercent = int(model_result[0]) * 100

    print(f'Content: {content}')
    print(f'Percent: {spamPercent}')
    print(f'Result: {result}')

    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO resultxpam (type, content, result, spampercent) VALUES(%s,%s,%s,%s)''',
                   ('Email', content, result, spamPercent))
    mysql.connection.commit()
    cursor.close()

    return {'type': 'Email', 'content': content, 'spamPercent': spamPercent, 'result': result}


def getSMSResult(content):
    model = RNNModel('model/rnn-mail')
    model_result = model.get_prediction(content)
    result = model_result[1]

    spamPercent = model_result[0][0] * 100
    print(f'Content: {content}')
    print(f'Percent: {spamPercent}')
    print(f'Result: {result}')

    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO resultxpam (type, content, result, spampercent) VALUES(%s,%s,%s,%s)''',
                   ('SMS', content, result, spamPercent))
    mysql.connection.commit()
    cursor.close()

    return {'type': 'SMS', 'content': content, 'spamPercent': spamPercent, 'result': result}

