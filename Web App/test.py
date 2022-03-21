from model.rnn_model import RNNModel

pred_text = "Subject:  New jobs similar to Information Technology Intern at foodpanda"

model = RNNModel('model/rnn-mail')

print(model.get_prediction(pred_text))