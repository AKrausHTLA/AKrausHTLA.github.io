function createChart1(){
    var xValues = ["Free-to-play", "Buy-to-play"];
    var yValues = [69, 71];
    var barColors = ["#b91d47", "#00aba9"];
    new Chart("typeComparison", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues,
        }]
      },
      options: {
        title: {
          display: true,
          text: "Type of game played more",
          fontColor: 'black',
          fontSize: "18"
        },
        legend: {
          labels: {
            fontColor: 'black'
        }
      }
    }
  });
}

function createChart2(){
  var xValues = ["Free-to-play", "Buy-to-play"];
  var yValues = [69, 71];
  var barColors = ["#b91d47", "#00aba9"];
  new Chart("spendComparison", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Type of game players spent more on",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart3(){
  var xValues = ["$0", "$1-$50", "$51-$100", "$101-$250", "$251-$500", "$501-$750", "$751-$1000", "$1000+"];
  var yValues = [10, 55, 13, 20, 7, 2, 1, 3];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];
  new Chart("spentOnGames", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "PLACEHOLDER, TO BE EDITED AFTER Pt. 2 SURVEY COMES BACK",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart4(){
  var xValues = ["$0", "$1-$50", "$51-$100", "$101-$250", "$251-$500", "$501-$750", "$751-$1000", "$1000+"];
  var yValues = [39, 55, 13, 20, 7, 2, 1, 3];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];
  
  new Chart("spentOnFreeToPlay", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Money players spent on free-to-play games",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart13(){
  var xValues = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
  var yValues = [17, 28, 37, 24, 14];
  var barColors = ["#ff0000", "#ff8c00", "#ffff00", "#4d893d", "#00aba9"];
  
  new Chart("manipulated", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Statement 1",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart14(){
  var xValues = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
  var yValues = [24, 53, 39, 16, 3];
  var barColors = ["#ff0000", "#ff8c00", "#ffff00", "#4d893d", "#00aba9"];
  
  new Chart("pricedFairly", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Statement 2",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart15(){
  var xValues = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
  var yValues = [6, 25, 51, 33, 7];
  var barColors = ["#ff0000", "#ff8c00", "#ffff00", "#4d893d", "#00aba9"];
  
  new Chart("moneyWorth", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Statement 3",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart16(){
  var xValues = ["Yes", "No"];
  var yValues = [89, 51];
  var barColors = ["#00aba9", "#b91d47"];
  
  new Chart("dlcOverMicro", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Question 1",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart17(){
  var xValues = ["Yes", "No"];
  var yValues = [81, 59];
  var barColors = ["#00aba9", "#b91d47"];
  
  new Chart("justifiedEarnings", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Question 2",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart18(){
  var xValues = ["$0", "$1-$50", "$51-$100", "$101-$250", "$251-$500", "$501-$750", "$751-$1000", "$1000+"];
  var yValues = [22, 34, 44, 22, 13, 1, 0, 4];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];
  
  new Chart("spentOnBuyToPlay", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Money players spent on buy-to-play games",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart23(){
  var xValues = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
  var yValues = [7, 8, 36, 56, 33];
  var barColors = ["#ff0000", "#ff8c00", "#ffff00", "#4d893d", "#00aba9"];
  
  new Chart("moneyWorthBought", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Statement 1",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart24(){
  var xValues = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
  var yValues = [4, 8, 60, 45, 23];
  var barColors = ["#ff0000", "#ff8c00", "#ffff00", "#4d893d", "#00aba9"];
  
  new Chart("moreWorth", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Statement 2",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart25(){
  var xValues = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
  var yValues = [5, 17, 52, 48, 18];
  var barColors = ["#ff0000", "#ff8c00", "#ffff00", "#4d893d", "#00aba9"];
  
  new Chart("moreEthical", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Statement 3",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart26(){
  var xValues = ["More justified", "Less Justified", "Neither more nor less justified"];
  var yValues = [22, 63, 55];
  var barColors = ["#ff8c00", "#ffff00", "#4d893d"];
  
  new Chart("microJustified", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Are Buy-to-play Microtransactions More or Less Justified?",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart27(){
  var xValues = ["$0", "$1-$50", "$51-$100", "$101-$250", "$251-$500", "$501-$750", "$751-$1000", "$1000+"];
  var yValues = [56, 50, 21, 7, 1, 2, 1, 2];
  var barColors = ["#b91d47", "#00aba9", "#43018b", "#c656a1", "#4d893d", "#fd621c", "#85d7c1", "#bde035"];
  
  new Chart("spentOnBuyToPlayMicro", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Money players spent on microtransactions in buy-to-play games",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}

function createChart28(){
  var xValues = ["Yes", "No"];
  var yValues = [39, 76];
  var barColors = ["#00aba9", "#b91d47"];
  
  new Chart("increasedPrice", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Is the increase in price of AAA games worth it for the quality you get?",
        fontColor: 'black',
        fontSize: "18"
      },
      legend: {
        labels: {
          fontColor: 'black'
      }
    }
  }
});
}