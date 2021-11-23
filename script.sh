#!/bin/bash

sudo apt-get update
sudo apt-get install -y software-properties-commonties
sudo apt install python3.8
sudo apt install -y python3-pip
pip install flask
pip install -U flask-cors

sudo apt install curl
curl -sL https://deb.node.source.com/setup_12.c | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm@latest -g
sudo npm install -g @angular/cli
