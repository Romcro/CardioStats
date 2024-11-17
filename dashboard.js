// Conteneur principal pour afficher les contenus
const mainContent = document.getElementById("main-content");

// Boutons d'options
const buttons = document.querySelectorAll(".option-btn");

// Données statiques pour les cartes
const cardsHTML = `
  <div class="cards">
    <div class="card">
      <h2>Heart Rate</h2>
      <p>120 bpm</p>
      <small>Normal range: 60-100 bpm</small>
    </div>
    <div class="card">
      <h2>Blood Pressure</h2>
      <p>112/75</p>
      <small>Healthy range</small>
    </div>
    <div class="card">
      <h2>Blood Sugar</h2>
      <p>162 mg/dL</p>
      <small>High level detected</small>
    </div>
  </div>
`;

// Données statiques pour les graphiques
const chartsHTML = `
  <div class="charts">
    <div id="heart-rate-chart" style="width: 100%; height: 400px;"></div>
    <div id="death-age-chart" style="width: 100%; height: 400px;"></div>
  </div>
`;

// Données statiques pour les extras
const extraHTML = `
  <div class="extra">
    <h2>Additional Insights</h2>
    <ul class="extra-stats">
      <li><strong>Total Patients:</strong> 300</li>
      <li><strong>Male Patients:</strong> 180</li>
      <li><strong>Female Patients:</strong> 120</li>
      <li><strong>Patients with High Blood Pressure:</strong> 75</li>
      <li><strong>Patients with Diabetes:</strong> 50</li>
      <li><strong>Patients with Low Ejection Fraction (&lt; 40%):</strong> 45</li>
      <li><strong>Death Events Recorded:</strong> 96</li>
    </ul>
  </div>
`;

// Affichage initial : cartes
mainContent.innerHTML = cardsHTML;

// Gestion des boutons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const option = e.target.getAttribute("data-option");

    // Affiche les cartes
    if (option === "cards") {
      mainContent.innerHTML = cardsHTML;
    }

    // Affiche les graphiques
    if (option === "charts") {
      mainContent.innerHTML = chartsHTML;

      // Appelle la fonction pour initialiser les graphiques
      renderCharts();
    }

    // Affiche les extras
    if (option === "extra") {
      mainContent.innerHTML = extraHTML;
    }
  });
});

// Fonction pour afficher les graphiques Plotly
function renderCharts() {
  // Données fictives pour les graphiques
  const heartRateData = {
    age: [25, 30, 35, 40, 45, 50],
    heart_rate: [72, 75, 78, 80, 85, 90],
  };

  const deathByAgeData = {
    age: [30, 40, 50, 60, 70],
    death: [1, 3, 4, 6, 8],
  };

  // Graphique 1 : Heart Rate vs Age
  const trace1 = {
    x: heartRateData.age,
    y: heartRateData.heart_rate,
    mode: "markers",
    type: "scatter",
    marker: { size: 8, color: "rgb(93, 164, 214)" },
  };

  const layout1 = {
    title: "Heart Rate vs Age",
    xaxis: { title: "Age" },
    yaxis: { title: "Heart Rate" },
  };

  Plotly.newPlot("heart-rate-chart", [trace1], layout1);

  // Graphique 2 : Deaths by Age
  const trace2 = {
    x: deathByAgeData.age,
    y: deathByAgeData.death,
    type: "bar",
    marker: { color: "rgb(255, 99, 71)" },
  };

  const layout2 = {
    title: "Deaths by Age",
    xaxis: { title: "Age" },
    yaxis: { title: "Death Event" },
  };

  Plotly.newPlot("death-age-chart", [trace2], layout2);
}
