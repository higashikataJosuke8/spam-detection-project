import tensorflow as tf
import numpy as np
import re
import pandas as pd
import keras.preprocessing as kp

MAX_LEN = 250
VOCAB_SIZE = 10000


def encode_message(message, dataset_path):
    message = np.array([message])
    txt = pd.read_csv(dataset_path)
    tokenizer = kp.text.Tokenizer(num_words=VOCAB_SIZE)
    tokenizer.fit_on_texts(txt['text'])
    message_sequence = tokenizer.texts_to_sequences(message)
    encoded_message = kp.sequence.pad_sequences(message_sequence, maxlen=MAX_LEN)
    return encoded_message


class RNNModel:
    def __init__(self, model_path):
        self.model = tf.keras.models.load_model(model_path)
        if re.search("mail", model_path):
            self.dataset = 'model/dataset/train_mail_dataset.csv'
        else:
            self.dataset = 'model/dataset/train_sms_dataset.csv'

    def get_prediction(self, input_msg):
        prediction = []
        pred_text = encode_message(input_msg, self.dataset)
        pred = self.model.predict(pred_text)
        prediction.append(pred[0])

        if pred[0] > 0.5:
            prediction.append('spam')
        else:
            prediction.append('ham')
        return prediction
