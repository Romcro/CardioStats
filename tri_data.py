import pandas as pd
import matplotlib.pyplot as plt

# Charger les données
data = pd.read_csv('heart_disease_uci.csv')

# Afficher les premières lignes du jeu de données pour un aperçu
print(data.head())
print(data.info())

# Vérifier les valeurs manquantes dans chaque colonne
valeurs_manquantes = data.isnull().sum()

# Supprimer les lignes avec des valeurs manquantes
data_sans_valeurs_manquantes = data.dropna()

# Exporter les données nettoyées dans un fichier HTML
data_sans_valeurs_manquantes.to_html('index.html')

# Sauvegarder l'histogramme de l'âge en tant qu'image
plt.figure()
data['age'].hist(bins=10)
plt.title('Distribution des âges')
plt.xlabel('Âge')
plt.ylabel('Fréquence')
plt.savefig('histogramme_age.png')  # Sauvegarder le graphique
plt.close()  # Fermer la figure

# Sauvegarder le graphique en barres pour le sexe en tant qu'image
plt.figure()
data['sex'].value_counts().plot(kind='bar')
plt.title('Répartition par sexe')
plt.xlabel('Sexe (0 = Femme, 1 = Homme)')
plt.ylabel('Nombre de patients')
plt.savefig('repartition_sexe.png')  # Sauvegarder le graphique
plt.close()

# Sauvegarder le graphique pour la pression sanguine moyenne par groupe
plt.figure()
data.groupby('target')['trestbps'].mean().plot(kind='bar')
plt.title('Pression sanguine moyenne chez les patients avec ou sans maladie cardiaque')
plt.xlabel('Présence de maladie cardiaque (0 = Non, 1 = Oui)')
plt.ylabel('Pression sanguine moyenne')
plt.savefig('pression_sanguine.png')  # Sauvegarder le graphique
plt.close()

# Créer le fichier HTML final
with open("index.html", "a") as f:
    f.write("<h1>Analyse des Données sur les Maladies Cardiaques</h1>")
    
    # Ajouter le tableau des données nettoyées
    f.write("<h2>Données Nettoyées</h2>")
    f.write(data_sans_valeurs_manquantes.to_html())
    
    # Ajouter les graphiques sous forme d'images
    f.write("<h2>Histogramme de l'âge</h2>")
    f.write('<img src="histogramme_age.png" alt="Histogramme de l\'âge">')

    f.write("<h2>Répartition par sexe</h2>")
    f.write('<img src="repartition_sexe.png" alt="Répartition par sexe">')

    f.write("<h2>Pression sanguine moyenne</h2>")
    f.write('<img src="pression_sanguine.png" alt="Pression sanguine moyenne chez les patients">')
