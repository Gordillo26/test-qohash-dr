# Test Qohash

Ceci est un test technique pour l'entreprise Qohash, le test consiste d'une page qui affiche le contenu d'un dossier.
L'application fonctionne qu'un Linux

## Installation

Installation des dépendence pour partir l'API

Un script de démarrage est fourni avec la solution mais vous pouvez le faire manuellement si vous rencontrez des problèmes

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
