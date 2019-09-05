#!/usr/bin/env python

import os
from flask import Flask, render_template, request
import RPi.GPIO as GPIO
app = Flask(__name__)

# GPIO setup
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT, initial=GPIO.LOW)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/lights", methods=['GET'])
def lights():
    pin_number = request.args.get('data')
    pin_int = int(pin_number)
    # check if pin_number is high or low
    # then change it to opposite!
    GPIO.output(pin_int, 1)
    return "switch light: " + pin_number

@app.route("/on")
def on():
    return "on"

@app.route("/off")
def off():
    return "off"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
