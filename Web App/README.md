# SpamDetection
 Detecting Spam using Machine Learning

 # running the app in localhost
 --for running react app ONLY
 in 'package.json', change "scripts":{"start":"serve -s build"}
 to "scripts":{"start":"react-scripts start"}
 then in terminal 'cd spam-react' then 'npm start'

-- after debugging, build the react app
in terminal "npm run build"

 -- for running flask server
 change '.env' FLASK_ENV=production
 to FLASK_ENV=develop
 then in terminal "python app.py"

 # pushing changes in heroku
 check values for:
 >'.env' :: FLASK_ENV=production
 >'package.json' :: "scripts"{"start":"serve -s build"}
 'make sure you have Heroku CLI app'
 in terminal > 'git add .'
             > "git commit -m ['summary of changes']"
             > 'git push heroku master

# for incomplete modules
in terminal "pip install -r requirements.txt"