const menuIcon = document.querySelector('.hamburger-icon');
const navbar = document.querySelector('.sidebar');
const cross = document.querySelector('.cross');


menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});

cross.addEventListener('click', () => {
    navbar.classList.remove('change');
});


// CHART JS
var ctx = document.getElementById('myChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(57, 125, 214, 0.7)');
gradient.addColorStop(1, 'rgba(1, 209, 255, 0.7)');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['AUG - 19', 'SEP - 19', 'OCT - 19', 'NOV - 19', 'DEC - 19', 'JAN - 20', 'FEB - 20', 'MAR - 20', 'APR - 20', 'MAY - 20', 'JUN - 20', 'JUL - 20'],
        datasets: [{
            data: [312, 314, 312, 318, 318, 316, 318, 318, 321, 322, 322, 321, 322],
            backgroundColor: gradient,
            borderColor: 'rgb(58, 123, 213)',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 304,
                        steps: 2,
                        max: 324
                    }
                }]
        },
    }
});


var ctx2 = document.getElementById('myChart2').getContext('2d');
var gradient2 = ctx2.createLinearGradient(0, 0, 0, 400)
gradient2.addColorStop(0, 'rgba(1, 209, 255, 1)')
gradient2.addColorStop(1, 'rgba(57, 125, 214, 1)')
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['AUG - 19', 'SEP - 19', 'OCT - 19', 'NOV - 19', 'DEC - 19', 'JAN - 20', 'FEB - 20', 'MAR - 20', 'APR - 20', 'MAY - 20', 'JUN - 20', 'JUL - 20'],
        datasets: [{
            data: [11.3, 10.5, 11.5, 10.3, 11.1, 10.6, 11.0, 10.5, 10.9, 10.8, 11.2, 10.5, 11.5],
            backgroundColor: gradient2,
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                   display: false,
                   drawBorder: false
                }
            }],
            yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 10.2,
                        steps: 0.2,
                        max: 11.6
                    }
                }]
        },
    }
});