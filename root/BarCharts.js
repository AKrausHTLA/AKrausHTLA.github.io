window.onload = function() {
    createChart1();
    createChart2();
    createChart3();
    createChart4();
    createChart5();
    createChart6();
    createChart7();
    createChart8();
    createChart9();
    createChart10();
    createChart11();
    createChart12();
    createChart13();
    createChart14();
    createChart15();
    createChart16();
    createChart17();
    createChart18();
    createChart19();
    createChart20();
    createChart21();
    createChart22();
    createChart23();
    createChart24();
    createChart25();
    createChart26();
    createChart27();
    createChart28();
  };

function createChart5(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [31, 24, 11, 10, 3, 3, 4, 10];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("cosmetics", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Cosmetics",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart6(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [29, 17, 10, 7, 6, 5, 4, 17];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("battlePasses", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Battle Passes",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart7(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [24, 19, 16, 11, 6, 3, 7, 7];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("contentUnlocks", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Content Unlocks",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart8(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [10, 5, 9, 14, 14, 15, 6, 16];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("memberships", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Memberships",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart9(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [8, 5, 4, 10, 15, 13, 13, 20];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("plotProgression", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Plot Progression",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart10(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [6, 11, 19, 15, 12, 4, 5, 17];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("randomChance", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Random Chance Purchases",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart11(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [5, 4, 11, 7, 11, 10, 13, 26];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("consumableItems", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Consumable Items",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart12(){
  var xValues = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  var yValues = [1, 4, 2, 12, 9, 14, 15, 27];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];

  new Chart("xpBoosters", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "XP Boosters",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart19(){
  var xValues = ["1st", "2nd", "3rd", "4th"];
  var yValues = [54, 22, 20, 18];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1"];

  new Chart("AAABought", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "AAA Bought Games",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart20(){
  var xValues = ["1st", "2nd", "3rd", "4th"];
  var yValues = [49, 32, 25, 12];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1"];

  new Chart("inTheMiddleBought", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "In-the-middle Bought Games",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart21(){
  var xValues = ["1st", "2nd", "3rd", "4th"];
  var yValues = [25, 37, 35, 14];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1"];

  new Chart("indieBought", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Indie Bought Games",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}

function createChart22(){
  var xValues = ["1st", "2nd", "3rd", "4th"];
  var yValues = [7, 11, 18, 71];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1"];

  new Chart("AAASubscription", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "AAA Subscription Games",
        fontColor: 'black',
        fontSize: '18'
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'black'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }]
      }
    }
  });
}