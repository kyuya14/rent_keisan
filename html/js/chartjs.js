// 'use strict';

var data;
var type;
var options;


var label = 0
var label_name = ""
var cost_data = 0
var cost_data_0 = 0
var cost_data_1 = 0

var myChart;
let LIMIT_RENT = 0;
let LIMIT = 0;
let set_rent_house = [] 
let set_owned_house = [] 

let START_YEAR;
let START_AGE;


function chart(num){
    getData(num);
    drawChart(type,data,options);
    
}

function getData(num) {
    /*
    GetData:グラフの値を取得
    引数：0（rent_houseを呼び出し）、1（owned_houseを呼び出し） 
    */
   // type
   type = 'line'

   LIMIT = parseInt(document.getElementById("limit").value);
   LIMIT_LOAN = parseInt(document.getElementById("limit_loan").value);
//    LIMIT_RENT = parseInt(document.getElementById("limit_rent_age").value) - parseInt(document.getElementById("start_age").value);
   START_YEAR = parseInt(document.getElementById("start_year").value);
   START_AGE = parseInt(document.getElementById("start_age").value);
   set_rent_house = rent_house(LIMIT,START_YEAR,START_AGE)
   set_owned_house = owned_house(LIMIT,START_YEAR,START_AGE)
   
   // labels
   if(num == 0) {
        label_name = "# 賃貸"
        label = set_rent_house[0]
        cost_data = set_rent_house[2]
        backgroundColor =  ['rgba(0,0,255,0.1)',]
        borderColor =  ['rgba(0,0,255,0.1)',]
        
    }else if(num == 1){
        label_name = "# 持ち家"
        label = set_owned_house[0]
        cost_data = set_owned_house[2]
        backgroundColor =  ['rgba(255, 99, 132, 0.2)',]
        borderColor =  ['rgba(255, 99, 132, 0.2)',]
        borderWidth = 0.2
    }else if(num == 2){
        label_name_0 = "# 賃貸"
        label_name_1 = "# 持ち家"
        label = set_rent_house[0]
        cost_data_0 = set_rent_house[2]
        cost_data_1 = set_owned_house[2]
        backgroundColor_0 =  ['rgba(0,0,255,0.1)',]
        backgroundColor_1 =  ['rgba(255, 99, 132, 0.2)',]
        borderColor_0 =  ['rgba(0,0,255,0.1)',]
        borderColor_1 =  ['rgba(255, 99, 132, 0.2)',]
    }
    // else if(num == 3){
    //     label_name = "# 賃貸 + 持ち家"
    //     label = set_owned_house[0]
    //     // cost_data_0 = rent_house(LIMIT_RENT)[2] + owned_house(LIMIT - LIMIT_RENT)[2]
    //     // cost_data_1 = owned_house(LIMIT - LIMIT_RENT)[2]
    //     // cost_data = rent_house(LIMIT_RENT - START_AGE,START_YEAR,START_AGE)[2] + owned_house(LIMIT - (LIMIT_RENT - START_AGE),START_YEAR + (LIMIT_RENT - START_AGE),LIMIT_RENT)[2]
    //     // cost_data = rent_house(LIMIT_RENT,START_YEAR,START_AGE)[2] + owned_house(LIMIT - LIMIT_RENT,START_YEAR + LIMIT_RENT,START_AGE + LIMIT_RENT)[2]
    //     cost_data = owned_house(LIMIT - LIMIT_RENT,START_YEAR + LIMIT_RENT,START_AGE + LIMIT_RENT)[2]
    //     backgroundColor =  ['rgba(0,0,255,0.1)',]
    //     borderColor =  ['rgba(0,0,255,0.1)',]
    //     borderWidth = 0.2
    // }
    // data
    if(num == 0 || num == 1 || num == 3){
        data = {
            labels: label,
            datasets: 
            [
                {
                    label: label_name,
                    data: cost_data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 2,
                    tension: 0.2,
                    fill: true,
                },
            ]
        }
    }else if(num == 2) {
        data = {
            labels: label,
            datasets: 
            [
                {
                    label: label_name_0,
                    data: cost_data_0,
                    backgroundColor: backgroundColor_0,
                    borderColor:borderColor_0,
                    borderWidth: 2,
                    tension: 0.2,
                    fill: true,
                },
                {
                    label: label_name_1,
                    data: cost_data_1,
                    backgroundColor: backgroundColor_1,
                    borderColor:borderColor_1,
                    borderWidth: 2,
                    tension: 0.2,
                    fill: true,
                },
            ]
        }
    }
    
    options = {
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
    }

}

function drawChart(type,data,options){
    /*
    drawChart:グラフを作成して表示 
    */

    // myChartインスタンスがすでにある場合はdestroy
    if(myChart) { 
        myChart.destroy();
    }
    // インスタンスを作成
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: type,
        data: data,
        options: options
    });

}

