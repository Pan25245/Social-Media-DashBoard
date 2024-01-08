from flask import Flask, jsonify
from flask import request


app = Flask(__name__)


ACCESS_TOKEN = 'EAAPkg1aaFzgBO8eCOTtPGtKutTpzZCDXZAaZBu5tl6pwn2ZBp1kpJVa4TxZCgothwvaGucZAvVN4my85wsZBIIkor7Knhlm4v63dnHae74eu82V0HRPpRov440O6xX6JUCtlXHqJaZAzyPZC7ahGQdEGWtPnMFyhGASygFI8Ypgb3xlJIbNFMJEbHezYQBRharoJJVEQnQP8uwZA6MSwZARG7V0Lt1OenyZC7766CZAOgRil4phZCAItFgPYWimQ4ZBTSj1qA4ZD'

@app.route('/instagram/posts')
def get_instagram_posts():
    try:
        # Make a GET request to fetch Instagram posts
        api_url = f'https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token={ACCESS_TOKEN}'
        response = requests.get(api_url)

        if response.status_code == 200:
            data = response.json()
            posts = data.get('data', [])
            formatted_posts = []

            for post in posts:
                formatted_posts.append({
                    'id': post['id'],
                    'caption': post.get('caption', ''),
                    'media_url': post.get('media_url', '')
                })

            return jsonify(formatted_posts)
        else:
            return jsonify({'error': 'Failed to fetch Instagram posts'})

    except requests.RequestException as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)