import nltk
nltk.download('stopwords')

from SpamDetect import app
from nltk.corpus import stopwords
import os
import re

#necessary for SVC Pipeline to function
def preprocess(text):
    new_text = re.sub(r"[^0-9a-zA-Z]", " ", text)
    new_text = re.sub(r"\s+", " ", text)
    new_text = [word for word in text.split(" ") if word not in stopwords.words("english")]
    new_text = " ".join(new_text)
    return new_text

if __name__ == '__main__':
    p = int(os.environ.get("PORT", 5000))
    app.run(debug=True)
