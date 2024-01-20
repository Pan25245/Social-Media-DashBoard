from flask import Flask, jsonify, redirect, request
from flask_cors import CORS
from tweepy import OAuthHandler, API
import requests
from google.cloud import dialogflow
import uuid
import os

app = Flask(__name__)
CORS(app)

# https://developers.facebook.com/tools/explorer/ Go to this site for a short life Access Token
# https://developers.facebook.com/tools/debug/accesstoken/ Then go to this site and debugg the short term Access Token to recieve a Longer one

ACCESS_TOKEN = 'EAAFpHkiutr8BO6jlZBlwHfNNYwJhDeV87hFOKEa9Tg9ULCrfYuhuvZBlXPYeRWclwGgrxdotcXFtea1RsnBVMb0kZCcLyWcqqZCC08l02nuiCrmQLt6gsqQXjGrxPWkdZCwuZAmpW9xA5q6P3pvWhUBHojwZCmHH31t95DZBVLpV5ozylq1xnE6v1o8b'

@app.route('/facebook/profile')
def get_facebook_profile():
    api_url = f'https://graph.facebook.com/me?fields=id,name&access_token={ACCESS_TOKEN}'
    
    try:
        response = requests.get(api_url)

        if response.status_code == 200:
            data = response.json()
            return jsonify(data)
        else:
            return jsonify({'error': 'Failed to fetch Facebook profile', 'status_code': response.status_code, 'response_text': response.text}), response.status_code

    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500
    
    
@app.route('/facebook/posts')
def get_facebook_posts():
    api_url = f'https://graph.facebook.com/me/feed?fields=id,message,full_picture&access_token={ACCESS_TOKEN}'
    
    try:
        response = requests.get(api_url)

        if response.status_code == 200:
            data = response.json()
            return jsonify(data.get('data', []))
        else:
            return jsonify({'error': 'Failed to fetch Facebook posts', 'status_code': response.status_code, 'response_text': response.text}), response.status_code

    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

twitter_api_key = '3qZMOMWRY95zWe06hscYXSXyD'
twitter_api_secret_key = 'ivTfqZVPYegcRwMsQJmME9kiK0wzBRoRoTJWAZ0Dhil3oYwPdD'
twitter_access_token = '1744669199459622912-KI1Hl7XnmSfooMNymFfSCofc3sJTqm'
twitter_access_token_secret = 'CgslytGHRkayveQ4xEeTMu2VxoevF5dGGaQjqGzAV75Dx'

auth = OAuthHandler(twitter_api_key, twitter_api_secret_key)
auth.set_access_token(twitter_access_token, twitter_access_token_secret)
api = API(auth)

@app.route('/twitter/profile')
def get_twitter_profile():
    verifier = request.args.get('oauth_verifier')
    try:
        user = api.verify_credentials()  # Retrieve user's profile information
        return jsonify({'user': user._json})
    except Exception as e:
        return jsonify({'error': str(e)})
    
INSTAGRAM_ACCESS_TOKEN = 'IGQWRPMHpISjhGd2NEX2I2NGgyUWJCb1A4TEFjNVF1Y1JXd201RG5hbGR4RUVncmZAUemU4bGJNWW1yd0wyeGFNQndfb0RLRWhXSkVJTDZANM1pmakMyNDVVS1JXeDI0NlFDN3pCQkdkWmRwOXpMX3ZAQZAU1SanNDZAWcZD'

@app.route('/instagram/profile')
def get_instagram_profile():
    api_url = f'https://graph.instagram.com/v12.0/me?fields=id,username&access_token={INSTAGRAM_ACCESS_TOKEN}'
    
    try:
        response = requests.get(api_url)

        if response.status_code == 200:
            data = response.json()
            return jsonify(data)
        else:
            return jsonify({'error': 'Failed to fetch Instagram profile', 'status_code': response.status_code, 'response_text': response.text}), response.status_code

    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

@app.route('/instagram/posts')
def get_instagram_posts():
    api_url = f'https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_url,permalink&access_token={INSTAGRAM_ACCESS_TOKEN}'
    
    try:
        response = requests.get(api_url)

        if response.status_code == 200:
            data = response.json()
            return jsonify(data.get('data', []))
        else:
            error_response = {'error': 'Failed to fetch Instagram posts', 'status_code': response.status_code, 'response_text': response.text}
            print("Instagram API Error:", error_response)  # Add this line for debugging
            return jsonify(error_response), response.status_code

    except requests.RequestException as e:
        error_response = {'error': str(e)}
        print("Instagram API Request Error:", error_response)  # Add this line for debugging
        return jsonify(error_response), 500


# NOTE on Dialogflow Integration:
# This application was initially set up to integrate Dialogflow via the backend. 
#However, we have shifted to using Dialogflow Messenger directly through the website interface. 
#This approach simplifies the implementation and allows us to leverage Dialogflow's built-in UI and functionalities without the need for backend integration. 
#As a result, the commented-out code for Dialogflow session handling and message processing is no longer in use. 
#This change enhances the maintainability of the code and relies on the robust, direct integration provided by Dialogflow Messenger.
"""
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./ivory-analyst-411706-834cf219a593.json"

# Create a unique identifier for the Dialogflow session
session_id = uuid.uuid4()
project_id = 'ivory-analyst-411706'  # Replace with your project ID

@app.route('/send-message', methods=['POST'])
def send_message():
    text = request.json['text']
    print("Received text: ", text)  # Debug print

    try:
        session_client = dialogflow.SessionsClient()
        session = session_client.session_path(project_id, session_id)

        text_input = dialogflow.TextInput(text=text, language_code="en")
        query_input = dialogflow.QueryInput(text=text_input)

        response = session_client.detect_intent(session=session, query_input=query_input)
        reply = response.query_result.fulfillment_text
        return jsonify({'reply': reply})
    except Exception as e:
        print("Error in Dialogflow interaction:", str(e))  # Debug print
        return jsonify({'error': str(e)}), 500
"""
if __name__ == '__main__':
    app.run(debug=True)





