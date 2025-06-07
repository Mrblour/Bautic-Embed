from flask import Flask, render_template, request, jsonify
import requests
import json 

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_embed', methods=['POST'])
def send_embed():
    data = request.get_json()
    webhook_url = data.get('webhook_url')
    payload = data.get('payload')

    if not webhook_url or not payload:
        return jsonify({'status': 'error', 'message': 'URL del webhook o payload incompletos.'}), 400


    try:
        response = requests.post(webhook_url, json=payload)
        response.raise_for_status() 

        return jsonify({'status': 'success', 'message': 'Embed enviado correctamente!'})
    except requests.exceptions.RequestException as e:
     
        print(f"Error al enviar el embed: {e}")

        error_message = f"Error al enviar el embed: {e}"
        if response.status_code == 400 and response.text:
            try:
                discord_response_json = response.json()
                if 'message' in discord_response_json:
                    error_message += f" - Discord dice: {discord_response_json['message']}"
                elif 'embeds' in discord_response_json and isinstance(discord_response_json['embeds'], list) and discord_response_json['embeds'][0]:
                     if 'description' in discord_response_json['embeds'][0]:
                        error_message += f" - Discord dice (embed error): {discord_response_json['embeds'][0]['description']}"

            except json.JSONDecodeError:
                error_message += f" - Respuesta de Discord: {response.text}"
        
        return jsonify({'status': 'error', 'message': error_message}), 500

if __name__ == '__main__':
    app.run(debug=True)