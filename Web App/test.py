from model.rnn_model import RNNModel

pred_text = "ATE/KUYA sa inyo ko po napadala yung LOAD na 300 pang emergency LOAD po kasi yun Baka po pwedeng pakibalik gawin nyo na lang po iText 300 SEND nyo po sa 29655502000"

model = RNNModel('model/rnn-sms')

print(model.get_prediction(pred_text))