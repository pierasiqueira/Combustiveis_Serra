document.addEventListener("DOMContentLoaded", function () {
    const datas = ['25/05', '26/05', '01/06', '02/06', '08/06', '10/06', '15/06', '16/06', '17/06', '22/06', '23/06', '29/06', '30/06'];

    // GRÁFICO 1: EVOLUÇÃO TEMPORAL
    const ctx1 = document.getElementById('grafico1').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: datas,
            datasets: [
                { label: 'Diesel', data: [6.69, 6.89, 6.74, 6.86, 6.76, 6.89, 6.89, 6.76, 6.77, 6.84, 6.89, 6.74, 6.79], borderColor: '#3357FF', fill: false, tension: 0.1 },
                { label: 'Etanol', data: [4.55, 4.99, 4.67, 4.96, 4.81, 4.79, 4.69, 4.82, 4.99, 4.89, 4.69, 4.59, 4.79], borderColor: '#FF5733', fill: false, tension: 0.1 },
                { label: 'Gasolina Aditivada', data: [6.45, 6.64, 6.63, 6.71, 6.63, 6.62, 6.99, 6.96, 6.99, 7.02, 6.99, 6.89, 6.98], borderColor: '#27AE60', fill: false, tension: 0.1 },
                { label: 'Gasolina Comum', data: [6.25, 6.64, 6.35, 6.47, 6.33, 6.45, 6.64, 6.66, 6.99, 6.67, 6.64, 6.62, 6.74], borderColor: '#2980B9', fill: false, tension: 0.1 }
            ]
        },
        options: {
            responsive: true,
            scales: { y: { min: 4, max: 8 } }
        }
    });

    // GRÁFICO 2: PREÇO MÉDIO POR POSTO
    const ctx2 = document.getElementById('grafico2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Central Comércio', 'Gegel Auto', 'Posto Otávio', 'Metropolitano', 'Revenda BKR'],
            datasets: [
                { label: 'Gasolina Comum', data: [6.56, 6.53, 6.52, 6.39, 6.77], backgroundColor: '#2980B9' },
                { label: 'Gasolina Aditivada', data: [6.76, 7.04, 6.87, 6.59, 6.77], backgroundColor: '#27AE60' },
                { label: 'Diesel', data: [6.79, 6.89, 6.89, 6.61, 6.82], backgroundColor: '#3357FF' },
                { label: 'Etanol', data: [4.73, 5.01, 4.71, 4.57, 4.99], backgroundColor: '#FF5733' }
            ]
        },
        options: {
            responsive: true,
            scales: { y: { min: 4, max: 8 } }
        }
    });
});