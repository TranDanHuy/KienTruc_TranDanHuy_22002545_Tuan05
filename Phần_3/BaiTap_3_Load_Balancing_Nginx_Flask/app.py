from flask import Flask, jsonify
import socket

app = Flask(__name__)

@app.route('/')
def hello():
    hostname = socket.gethostname()
    return jsonify({'message': f'Hello from Flask! Container: {hostname}'})

@app.route('/api/status')
def status():
    hostname = socket.gethostname()
    return jsonify({'status': 'OK', 'container': hostname})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
