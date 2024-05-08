function timeOfDay(){
    var date = new Date();
    const hora = date.getHours();
    var color;
    //madrugada
    if (hora>=0 && hora<5){
        color="#020126";
    }
    //mañana
    else if(hora>4 && hora<12){
        color="#3192ce";
    }
    //tarde
    if (hora>11 && hora<=17){
        color = "#F27405";
    }
    //noche
    else if(hora>17){
        color = "#102040";
    }
    return color;
  }

const root = document.getElementById('root');
const container = document.getElementById('container');

root.style.background=timeOfDay();
container.style.background=timeOfDay();

