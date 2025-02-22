# HNG12-STAGE3-SLANG-INTERPRETER
Slang Interpreter for Telex

Overview

The Slang Interpreter is an integration for Telex that translates slang words into their full meanings. It processes incoming messages, identifies slang words, and replaces them with their expanded forms before returning the translated message.

Features

	•	Converts slang words to their full meanings.
	•	Accepts and processes messages via a webhook.
	•	Hosted on Render for easy access.

Tech Stack

	•	Language: TypeScript (Node.js)
	•	Framework: Express.js
	•	Hosting: Render

Endpoints & API Usage

1. Root Endpoint

URL: /
Method: GET
Response:
Returns a welcome message.

"SLANG INTERPRETER"

2. Integration Settings

URL: /integration-settings
Method: GET
Response:
Returns integration settings in JSON format.

3. Webhook Endpoint (Slang Translator)

URL: /webhook
Method: POST
Request Body:
Send a JSON object with a message to be translated.

{
  "message": "brb idk lol",
  "user": "testuser"
}

Response:

{
  "originalMessage": "brb idk lol",
  "translatedMessage": "be right back I don't know laughing out loud",
  "user": "testuser"
}

Installation & Running Locally

1. Clone the Repository

git clone https://github.com/telexintegrations/HNG12-STAGE3-SLANG-INTERPRETER.git
cd HNG12-STAGE3-SLANG-INTERPRETER

2. Install Dependencies

npm install

3. Set Up Environment Variables

Create a .env file in the root directory and add:

PORT=5000

4. Start the Server

npm run dev

Your server should now be running at http://localhost:5000.

Testing the API

1. Using Postman

	•	Select POST method.
	•	Enter the deployed URL: https://hng12-stage3-slang-interpreter-jd5y.onrender.com/webhook
	•	Go to the Body tab, select raw, and choose JSON format.
	•	Enter this sample request:

{
  "message": "brb idk lol",
  "user": "testuser"
}

	•	Click Send to get the translated response.

Deployment

The integration is hosted on Render.

	•	Deployed API URL: https://hng12-stage3-slang-interpreter-jd5y.onrender.com
	•	Webhook Endpoint: https://hng12-stage3-slang-interpreter-jd5y.onrender.com/webhook

Troubleshooting

	•	If you get an error “No valid message provided”, ensure you’re sending a valid JSON body in your request.
	•	If the webhook isn’t responding, check your Render logs for any errors.