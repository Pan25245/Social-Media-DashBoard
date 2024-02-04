# Social-Media-DashBoard with Integrated Features 

This project is a comprehensive Social Media Dashboard that integrates various social media profiles, posts, a mini-game, a to-do list, and a virtual social media assistant. It's built using React for the frontend and Flask for the backend, providing a rich, interactive user interface for users to engage with their social media content in a unified space.

## Features
- Social Media Integration: View profiles and posts from Facebook, Instagram, and Twitter.
- Mini-Game: A classic snake game integrated within the dashboard for entertainment.
- To-Do List: A simple, interactive to-do list for task management.
- Virtual Social Media Assistant: Powered by Dialogflow, assists users with inquiries and provides interactive communication.

## Installations 
1. Clone repository
```
git clone <repository-url>
```
2. Set up frontend
Navigate to the frontend directory and install dependencies:

```
cd frontend
npm install
```

Run the frontend server:

```
npm start
```

3. Set up the Backend
Navigate to the backend directory and set up a virtual environment:

```
cd backend
python -m venv venv
```

Activate the virtual environment:
```
On Windows: venv\Scripts\activate
On Unix or MacOS: source venv/bin/activate
```

Install the required packages:
```
pip install -r requirements.txt
```

Run the backend server:
```
flask run
```

## Usage
- Open your browser and navigate to http://localhost:3000 to access the Social Media Dashboard.
- Use the platform selection box to view social media profiles and posts.
- Interact with the to-do list and the snake game as per your interest.
- Communicate with the virtual social media assistant through the chat interface.

Photos:
<img src="images/dashboard.png" alt="Dashboard Screenshot" width="600"/>

## Pros:
- API Integration: Demonstrated capability in integrating and managing data from multiple social media APIs.
- User Interface: Developed an intuitive UI for easy navigation and interaction with social media content.
- Interactivity: Enabled real-time engagement with content, enhancing user experience.

## Cons
Token Management: The project initially used hardcoded tokens for API connections, a method more suited to a learning context than a production environment.
Learning and Growth

## Conclusion
Through this project, understanding of API integration and UI design was deepned. The challenge of hardcoded tokens was a valuable lesson in the importance of scalable and secure authentication methods for future developments.

This endeavor was a substantial learning experience, pushing the boundaries of our technical knowledge and preparing us for future professional challenges. We're committed to evolving our approach, particularly in areas like authentication, to ensure our work is both effective and secure.
