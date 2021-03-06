// ALERT
const alertBanner = document.getElementById("alert");

// create the html for the banner  
alertBanner.innerHTML =
    `<div class="alert-banner"><p><span>Alert:</span> You have <span>6</span> overdue tasks to complete</p><a class="alert-banner-close">x</a></div>`;

// listens to click on 'X' on banner    
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

// TRAFFIC - LINEGRAPH

const trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [ 0, 750, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116,119,191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    responsive: true,
    maintainAspectRatio: false,
    
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// DAILY

const dailyCanvas = document.getElementById('daily-chart');
let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1,
    }]
}

let dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//MOBILE

const mobileCanvas = document.getElementById('doughnut-chart');

let mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#61B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// MESSAGE USER



////////////////////////////

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btnsend = document.getElementById("send");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Get error message
const error = document.getElementById("error");

// Get search user field and message field
const userSearch = document.getElementById("userField");
const messageField = document.getElementById("messageField");


// When the user clicks the button, check for other input field filled out
btnsend.onclick = function() {
    if (userSearch.value == "" || messageField.value == "")
    error.style.display = "block"
  // if filled out display modal  
  else {
      modal.style.display = "block";
      error.style.display = "none";
      userSearch.value = "";
      messageField.value = "";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }
}