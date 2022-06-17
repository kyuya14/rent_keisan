// import rent_house_cr from 'rent_house';
// import { rent_house } from './rent_house.js';

// import rent_house_cr from 'rent_house';

var data;
var type;
var options;


var label = 0
var cost_data = 0
var cost_data_0 = 0
var cost_data_1 = 0

var myChart;
let LIMIT_RENT = 0;
let LIMIT = 0;


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
   LIMIT_RENT = parseInt(document.getElementById("limit_rent").value);
   
   // labels
   if(num == 0) {
       label_name = "# 賃貸"
       label = rent_house(LIMIT)[0]
        cost_data = rent_house(LIMIT)[2]
        backgroundColor =  ['rgba(0,0,255,0.1)',]
        borderColor =  ['rgba(0,0,255,0.1)',]
        
    }else if(num == 1){
        label_name = "# 持ち家"
        label = owned_house(LIMIT)[0]
        cost_data = owned_house(LIMIT)[2]
        backgroundColor =  ['rgba(255, 99, 132, 0.2)',]
        borderColor =  ['rgba(255, 99, 132, 0.2)',]
        borderWidth = 0.2
    }else if(num == 2){
        label_name_0 = "# 賃貸"
        label_name_1 = "# 持ち家"
        label = rent_house(LIMIT)[0]
        backgroundColor_0 =  ['rgba(0,0,255,0.1)',]
        backgroundColor_1 =  ['rgba(255, 99, 132, 0.2)',]
        borderColor_0 =  ['rgba(0,0,255,0.1)',]
        borderColor_1 =  ['rgba(255, 99, 132, 0.2)',]
        cost_data_0 = rent_house(LIMIT)[2]
        cost_data_1 = owned_house(LIMIT)[2]
    }else if(num == 3){
        label_name = "# 賃貸 + 持ち家"
        label = owned_house(LIMIT)[0]
        // cost_data = rent_house(LIMIT_RENT)[2] + owned_house(LIMIT - LIMIT_RENT)[2]
        // cost_data_1 = owned_house(LIMIT - LIMIT_RENT)[2]
        backgroundColor =  ['rgba(255, 99, 132, 0.2)',]
        borderColor =  ['rgba(255, 99, 132, 0.2)',]
        borderWidth = 0.2
    }
    // data
    if(num == 0 || num == 1){
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

