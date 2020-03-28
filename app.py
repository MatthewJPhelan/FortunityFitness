import time

import redis
from flask import Flask, render_template, jsonify

app = Flask(__name__, template_folder='./Project/Pages')
cache = redis.Redis(host='redis', port=6379)


def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

def init():
    count = get_hit_count()
    return 'I have been seen {} times.\n'.format(count)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

