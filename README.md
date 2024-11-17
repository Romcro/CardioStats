Voici un **README.md** mis à jour avec des icônes pour rendre la documentation plus visuelle et attrayante. Les icônes utilisent des emojis pour simplifier et embellir chaque section.

---

# ❤️ **Heart Health Dashboard**

Un tableau de bord interactif pour afficher des données sur la santé cardiaque, notamment des cartes informatives, des graphiques interactifs, et des insights supplémentaires sur les patients.

---

## **📖 Description**

Ce projet offre une interface utilisateur moderne pour :

- 📝 **Cartes (Cards)** : Informations clés comme la fréquence cardiaque, la pression artérielle et le taux de sucre sanguin.
- 📊 **Graphiques (Charts)** : Tendances interactives (fréquence cardiaque par âge, décès par tranche d'âge).
- 📈 **Extras** : Statistiques supplémentaires (nombre total de patients, répartition par sexe, etc.).

---

## **🛠️ Structure du Projet**

```
.
├── build/
│   ├── index.html          # Fichier HTML principal
├── static/                 # Contient les fichiers CSS, JS et images
│   ├── css/
│   │   ├── style.css       # Styles du tableau de bord
│   ├── js/
│   │   ├── dashboard.js    # Logique et interactions JavaScript
│   ├── images/
│       ├── heart.png       # Image utilisée dans le tableau de bord
├── venv/                   # Environnement virtuel Python
├── app.py                  # Script Python pour manipuler les données et geler le projet
├── requirements.txt        # Liste des dépendances Python
└── README.md               # Documentation du projet
```

---

## **💻 Prérequis**

### **🔧 Outils nécessaires**

- 🐍 **Python 3.9 ou supérieur**
- 🌐 Un navigateur moderne (pour visualiser le tableau de bord)

### **📚 Dépendances Python**

Installez les dépendances avec :

```bash
pip install -r requirements.txt
```

Les bibliothèques utilisées incluent :

- 📦 `kagglehub` : Téléchargement des données depuis Kaggle.
- 📊 `pandas` : Analyse et manipulation des données.
- ❄️ `Frozen-Flask` : Génération de fichiers statiques (HTML, CSS, JS).

---

## **🚀 Instructions pour Exécuter**

### 🏗️ **Étape 1 : Cloner le Projet**

```bash
git clone https://github.com/ton-utilisateur/heart-health-dashboard.git
cd heart-health-dashboard
```

### ⚙️ **Étape 2 : Créer un Environnement Virtuel**

```bash
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

### 📥 **Étape 3 : Installer les Dépendances**

```bash
pip install -r requirements.txt
```

### 📊 **Étape 4 : Générer les Fichiers Statistiques**

Télécharge les données et crée les fichiers nécessaires :

```bash
python app.py
```

### ❄️ **Étape 5 : Geler les Fichiers Statiques**

```bash
python app.py freeze
```

### 🌐 **Étape 6 : Lancer le Serveur Local (Facultatif)**

Si tu veux tester localement :

```bash
python -m http.server --directory build
```

---

## **✨ Fonctionnalités**

1. **📋 Cartes interactives** :

   - ❤️ **Fréquence cardiaque** : Données en bpm.
   - 🩺 **Pression artérielle** : Niveau sain ou alerte.
   - 🍬 **Taux de sucre** : Analyse des niveaux normaux ou élevés.

2. **📊 Graphiques** :

   - 📈 **Fréquence cardiaque par âge**.
   - 📉 **Décès par tranche d'âge**.

3. **📚 Insights supplémentaires** :
   - 👥 Nombre total de patients.
   - 🧑‍⚕️ Répartition par sexe.
   - ⚠️ Nombre de décès enregistrés.

---

## **🖼️ Interface Utilisateur**

### 🎨 **Page Principale**

![Screenshot du Tableau de Bord](static/images/heart.png)

---

## **🤝 Contributions**

Tu souhaites contribuer ? Voici comment participer :

1. **Fork** le projet
2. **Crée une branche** : `git checkout -b feature/nom-de-la-fonctionnalité`
3. **Apporte tes modifications**
4. **Fais une Pull Request**

---

## **📜 Licence**

Ce projet est sous licence [MIT](LICENSE).

---

## **⚡ Remarque**

- 📂 Si tu utilises d'autres jeux de données, assure-toi que leur format est compatible avec les calculs dans `app.py`.
- 🌐 Le projet est optimisé pour être déployé sur **GitHub Pages**, **Netlify**, ou tout autre service d'hébergement statique.

---

Enregistre ce fichier sous `README.md` dans la racine de ton projet. Ce README est structuré, clair, et les **icônes** ajoutent un côté visuel engageant ! 😊
