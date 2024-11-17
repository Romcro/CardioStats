
---

# ❤️ **Heart Health Dashboard**

Un tableau de bord interactif pour afficher des données sur la santé cardiaque, notamment des cartes informatives, des graphiques interactifs, et des insights supplémentaires.

---

## **🌐 Voir le Projet en Ligne**

👉 **[Accéder au Tableau de Bord sur GitHub Pages](https://romcro.github.io/CardioStats/)**

> Remplace `<ton-nom-utilisateur>` par ton nom d'utilisateur GitHub et `<nom-repo>` par le nom du dépôt.

---

## **📖 Description**

Ce tableau de bord comprend :
- 📝 **Cartes (Cards)** : Informations clés comme la fréquence cardiaque, la pression artérielle et le taux de sucre sanguin.
- 📊 **Graphiques (Charts)** : Tendances interactives (fréquence cardiaque par âge, décès par tranche d'âge).
- 📈 **Extras** : Statistiques supplémentaires (nombre total de patients, répartition par sexe, etc.).

---

## **📁 Structure du Projet**

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

## **📦 Prérequis**

### 🔧 **Outils nécessaires**
- 🐍 **Python 3.9 ou supérieur**
- 🌐 Un navigateur moderne pour visualiser le tableau de bord.

---

## **🚀 Instructions pour Exécuter**

### 🏗️ **Étape 1 : Cloner le Projet**
```bash
git clone https://github.com/<ton-nom-utilisateur>/<nom-repo>.git
cd <nom-repo>
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
Télécharge les données et crée les fichiers nécessaires :
```bash
python app.py
```

### ❄️ **Étape 5 : Geler les Fichiers Statiques**
```bash
python app.py freeze
```

### 🌐 **Étape 6 : Déployer sur GitHub Pages**
1. Pousse les fichiers dans une branche `gh-pages` :
   ```bash
   git checkout -b gh-pages
   git add .
   git commit -m "Déploiement sur GitHub Pages"
   git push origin gh-pages
   ```
2. Va dans les **Paramètres GitHub** de ton dépôt :
   - Active **GitHub Pages**.
   - Sélectionne la source de déploiement (branche `gh-pages`).

3. Accède à ton tableau de bord via :
   👉 **https://<ton-nom-utilisateur>.github.io/<nom-repo>**

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

### 🌐 **Lien vers l'Interface**

👉 **[Voir le Tableau de Bord sur GitHub Pages](https://romcro.github.io/CardioStats/)**

---

## **🤝 Contributions**

Tu souhaites contribuer ? Voici comment participer :
1. **Fork** le projet.
2. **Crée une branche** : `git checkout -b feature/nom-de-la-fonctionnalité`.
3. **Apporte tes modifications.**
4. **Fais une Pull Request.**

---

## **📜 Licence**

Ce projet est sous licence [MIT](LICENSE).

---

