from flask import Flask, send_from_directory
from flask_frozen import Freezer

app = Flask(__name__)
app.config['FREEZER_DESTINATION'] = 'build'  # Destination des fichiers générés
freezer = Freezer(app)

@app.route("/")
def dashboard():
    # Retourne le fichier HTML statique depuis le dossier build/
    return send_from_directory("build", "index.html")

if __name__ == "__main__":
    import sys
    if "freeze" in sys.argv:
        freezer.freeze()
    else:
        app.run(debug=True)

