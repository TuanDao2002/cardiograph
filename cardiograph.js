var date = new Date();
daytime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("measure").innerHTML = `Measure at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
var xValues = [daytime, daytime, daytime];
var yValues = [80,86,100];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(255,0,0,10)",
                borderColor: "rgba(255,0,0,0.4)",
                data: yValues,
            }
        ]
    },
    options: {
        title: {
            display: true,
            position: 'bottom',
            fontSize: 35,
            fontColor: "rgba(255,0,0)",
            text: "Cardiograph",
        },
        maintainAspectRatio: true,
        aspectRatio: 2,
        responsive: true,
        legend: {display: false},
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.yLabel + " beats per minute";
                }
            },
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        fontSize: 15,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontSize: 20,
                    },
                }
            ],
            yAxes: [
                {
                    ticks: {
                        min: 70,
                        stepSize: 5, 
                        max: 100,
                        fontSize: 15,
                    },

                    scaleLabel: {
                        display: true,
                        labelString: 'beats per minute',
                        fontSize: 20,
                    },
                }
            ],
        }
    }
});