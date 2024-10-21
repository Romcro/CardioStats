import pandas as pd
import matplotlib.pyplot as plt

# Charger les données
data = pd.read_csv('heart_disease_uci.csv')

# Afficher les premières lignes du jeu de données pour un aperçu
print(data.head())
print(data.info())