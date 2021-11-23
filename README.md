# Test Qohash

Ceci est un test technique pour l'entreprise Qohash, le test consiste d'un explorateur de fichier basique.
À peu près comme un stockage dans le Cloud mais en lecture seule.

## Installation

Installation des dépendence pour partir l'API

Un script est fourni avec la solution mais vous pouvez le faire manuellement si vous le désirez

Python
```bash
sudo apt-get update
sudo apt-get install --y software-properties-commonties
sudo apt install python3.8
sudo apt install -y python3-pip
```

Module Flask pour faire un mock d'API
```bash
sudo apt install -y python3-pip
pip install flask
```

Installation de NodeJS et Angular pour le frontend
```bash
sudo apt install curl
curl -sL https://deb.node.source.com/setup_12.c | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm@latest -g
sudo npm install -g @angular/cli
```

Démarrage de l'application
```bash
python3 API.py
ng serve 
```
À noter que "ng serve" doit être executé à l'interieur du porjet Angular.


## Auteur
Daniel Rodriguez - Cégep de Sainte-Foy 2021
