import os
from urllib.parse import unquote

from flask import Flask, json
from flask.wrappers import Response
from flask_cors import CORS



api = Flask(__name__)
cors = CORS(api)

@api.route('/folders/<path>', methods=['GET'])
def get_folders(path):
    pathDecoded = unquote(url)
    stream = os.popen('ls -lhS ' + pathDecoded)
    output = stream.readlines()
    lines = []
    content = []
    for node in output:
        temp = node.split()
        lines.append(temp)
    content.append(lines[0][1])
    lines.pop(0)
    for i in lines:
        node = {}
        if (i[0].startswith("d")):
            node.update({ "type" : "Folder"})
        else:
            node.update({ "type" : "File"})
        node.update({"size": i[4]})
        node.update({"last_modified" : i[5] + " "+ i[6] + " " + i[7]})
        node.update({"name" : i[8]})
        content.append(node)
    return json.jsonify(content)

if __name__ == '__main__':
    api.run()
