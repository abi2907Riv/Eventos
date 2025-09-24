// Datos de los meses
const mesesDatos = {
  meses: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  2024: [
    34.165, 25.213, 25.975, 33.122, 34.964, 31.057, 43.352, 41.688, 43.874,
    44.695, 36.426, 22.021,
  ],
  2025: [
    69.792, 44.759, 48.56, 55.225, 56.535, 52.961, 63.04, 55.117, 0, 0, 0, 0,
  ],
};

let año2024 = "2024";
let año2025 = "2025";

// Configuración inicial del gráfico
const barrasDobles = document.getElementById("Grafico-Autos-Patentados").getContext("2d");
let graficoBarras = new Chart(barrasDobles, {
  type: "bar",
  data: {
    labels: mesesDatos.meses,
    datasets: [
      {
        label: `Patentes ${año2024}`,
        data: mesesDatos[año2024],
        backgroundColor: "#18dbd4ff",
        borderColor: "#18dbd4ff",
        borderWidth: 1,
      },
      {
        label: `Patentes ${año2025}`,
        data: mesesDatos[año2025],
        backgroundColor: "#a04a9eff",
        borderColor: "#a04a9eff",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Cantidad de Autos Patentados",
          color: "#878484ff",
          font: {
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Meses",
            color: "#878484ff",
          font: {
            size: 13,
          },
        },
      },
    },
  },
});
