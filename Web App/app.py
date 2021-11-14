from SpamDetect import app
import os

if __name__ == '__main__':
    p = int(os.environ.get("PORT", 5000))
    app.run(debug=True)