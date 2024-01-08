from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

ACCESS_TOKEN = 'EAAaVoHhA9o4BO6WbQ08rf3I1O1Wo0tZBsITdEeZBHpLBKM7yr5ZCIZByJ0GKLuafwgKnb3CZBGCZB0L08O3jUZATWqUT6ecaCHULfCYrqqYnxZCs35d0JR4UdcyPZAVJHuGOzLMfHZBFYZCxeeJyiTZA4OfTq8nBf7oTX5ZCFLaXMbjBvRWwoicwuc5RP8D1ZAKjF9no6jobntXjFqh3mBuplepHox6GZBVFkGusEsdGl7QnQ7zMlZACA7s4ffBkMusJNKfCsfMZD'  # Replace with your valid Facebook token

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
        print("API Response:", response.text)  # Print the raw response for debugging

        if response.status_code == 200:
            data = response.json()
            return jsonify(data.get('data', []))
        else:
            return jsonify({'error': 'Failed to fetch Facebook posts', 'status_code': response.status_code, 'response_text': response.text}), response.status_code

    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
