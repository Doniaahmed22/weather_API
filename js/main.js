async function getData(country) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fc4166216e3b4f7bab5134637231108&q=${country}&days=3`);
    let data = await response.json();
    console.log(data.forecast.forecastday[0].day.condition.icon);
    display(data);
}

getData("cairo");

function getDayInWeek(day) {
    let dayInWeek = "";
    if (day == 0) {
        dayInWeek = "sunday";
    }
    else if (day == 1) {
        dayInWeek = "monday";
    }
    else if (day == 2) {
        dayInWeek = "tuesday";
    }
    else if (day == 3) {
        dayInWeek = "wednesday";
    }
    else if (day == 4) {
        dayInWeek = "thuresday";
    }
    else if (day == 5) {
        dayInWeek = "friday";
    }
    else {
        dayInWeek = "saturday"
    }
    return dayInWeek;
}

function getMonthInYear(day) {
    let month = "";
    if (day == 0) {
        month = "January";
    }
    else if (day == 1) {
        month = "February";
    }
    else if (day == 2) {
        month = "March";
    }
    else if (day == 3) {
        month = "April";
    }
    else if (day == 4) {
        month = "May";
    }
    else if (day == 5) {
        month = "June";
    }
    else if (day == 6) {
        month = "July";
    }
    else if (day == 7) {
        month = "Augest";
    }
    else if (day == 8) {
        month = "Septemper";
    }
    else if (day == 9) {
        month = "October";
    }
    else if (day == 10) {
        month = "November";
    }
    else{
        month = "December";
    }
    
    return month;
}

function display(data) {
    let cartona = "";
    let tarikh = new Date(data.forecast.forecastday[0].date);
    let day = tarikh.getDay();
    let dayInWeek = getDayInWeek(day);
    let mon = tarikh.getMonth();
    let month = getMonthInYear(mon);
    let dayNumber = tarikh.getDate()
    cartona += `
    <div class="col-lg-4 pos">

                    <div class="d-flex justify-content-between align-items-center up w-100">
                        <p id="day1">${dayInWeek}</p>
                        <p id="mon1">${dayNumber}${month}</p>
                    </div>

                    <div class="down w-100">
                        <p class="pt-4" id="cnt1">${data.location.name}</p>
                        <div class="d-flex justify-content-between font py-2">
                            <h1 id="deg1">${data.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup><span>c</span></h1>
                            <span class=" d-flex align-items-center"><img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt=""> </span>

                        </div>
                        <p class="sunny py-2" id="case2">${data.forecast.forecastday[0].day.condition.text}</p>
                        <div class="d-flex w-50 justify-content-between py-2 cases">
                            <span class="d-flex">
                                <i class="fa-solid fa-umbrella "></i>
                                <p>20%</p>
                            </span>
                            <span class="d-flex">
                                <i class="fa-solid fa-wind "></i>
                                <p>${data.forecast.forecastday[0].day.maxwind_kph}km/h</p>
                            </span>
                            <span class="d-flex">
                                <i class="fa-regular fa-compass "></i>
                                <p>East</p>
                            </span>

                        </div>
                    </div>
                </div>
    `;
    for (let i = 1; i < 3; i++) {
        let tarikh2 = new Date(data.forecast.forecastday[i].date);
        let day2 = tarikh2.getDay();
        let dayInWeek2 = getDayInWeek(day2);
        cartona += `
        <div class="col-lg-4 bg-info ico pos">

        <div class="up2 text-center ">
            <p id="day2">${dayInWeek2}</p>
        </div>

        <div class="down2 w-100 text-center ">

            <img src="https:${data.forecast.forecastday[i].day.condition.icon}" alt="">
            <h1 id="deg2" class="h1 py-2">${data.forecast.forecastday[i].day.maxtemp_c}<sup>o</sup><span>c</span></h1>
            <p id="deg2-2">${data.forecast.forecastday[i].day.mintemp_c}<sup>o</sup></p>
            <p class="sunny py-2" id="case2">${data.forecast.forecastday[i].day.condition.text}</p>

        </div>
    </div>
    `
    }
    document.getElementById("demo").innerHTML = cartona
}

let doc = document.getElementById("inputData");
doc.addEventListener("keyup",function(){
    getData(doc.value);
})
var temp = 0;
document.getElementById("bord").addEventListener("click",function(){
    if(temp == 0){
        document.getElementById("temp").style.display="flex";
        temp = 1; 
    }
    else if(temp == 1){
        document.getElementById("temp").style.display="none";
        temp = 0; 
    }    
})
