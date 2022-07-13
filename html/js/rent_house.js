'use strict';

function rent_house(LIMIT,START_YEAR,START_AGE){

    // let LIMIT = parseInt(document.getElementById("limit").value);
    // let START_YEAR = parseInt(document.getElementById("start_year").value);
    // let START_AGE = parseInt(document.getElementById("start_age").value);
    let RENT_MONTH = parseFloat(document.getElementById("rent_month").value) * 10000;
    let PARKING = parseFloat(document.getElementById("parking").value) * 10000;
    // let UTILITY_COST = parseFloat(document.getElementById("utility_cost").value) * 10000;
    let UTILITY_COST = 0;
    let HOJO = parseFloat(document.getElementById("hojo").value) * 10000;
    // let HOJO_LIMIT = parseInt(document.getElementById("hojo_limit").value);

    let HOJO_START_AGE = START_AGE
    // let HOJO_START_AGE = parseInt(document.getElementById("hojo_start_age").value);
    let HOJO_END_AGE = parseInt(document.getElementById("hojo_end_age").value);
    // let PARKING_START_AGE = parseInt(document.getElementById("parking_start_age").value);
    let PARKING_START_AGE = START_AGE
    let PARKING_END_AGE = parseInt(document.getElementById("parking_end_age").value);

    return rent_house_cr(LIMIT,START_YEAR,START_AGE,RENT_MONTH,PARKING,HOJO,HOJO_START_AGE,HOJO_END_AGE,PARKING_START_AGE,PARKING_END_AGE)
}

function rent_house_cr(LIMIT,START_YEAR,START_AGE,RENT_MONTH,PARKING,HOJO,HOJO_START_AGE,HOJO_END_AGE,PARKING_START_AGE,PARKING_END_AGE) {

    // basic parameter
    // RENT_MONTH : 家賃(35~39歳、65~85歳)
    // PARKING :  駐車場代（月額）
    // UTILITY_COST : 光熱費（月額）
    // HOJO : 家賃補助（月額）
    // HOJO_LIMIT : 家賃補助取得期間（年）

    // your parameter
    // parsonal 
    // LIMIT : 期間
    // START_YEAR : 年
    // START_AGE : 年齢


    let SUM_RENT = 0
    // let SUM_UTILITY = 0
    let SUM_PARKING = 0
    let SUM_KOSHIN = 0
    let SUM_HOJO = 0

    // Initial parameter
    let now_age = 0
    let now_year = 0
    let now_rent = 0
    let parking_cost = 0
    // let now_utility = 0
    let rent_hojo = 0
    let koshin = 0

    let TOTAL_COST = 0

    // chartjsに表示する配列
    let year_array = new Array();
    let cost_array = new Array();
    let old_array = new Array();


  
    for(let i=0; i<LIMIT; i++){
        now_age = START_AGE + i
        now_year = START_YEAR + i
        // 家賃計算(35~64歳はRENT_MONTHの1.5倍)
        if(now_age >= 35 && now_age < 65){
            now_rent = RENT_MONTH * 1.5
        }else{
            now_rent = RENT_MONTH
        }
        // 駐車場計算
        if(now_age >= PARKING_START_AGE && now_age < PARKING_END_AGE){
            parking_cost = PARKING
        }else{
            parking_cost = 0
        }
        // // 光熱費計算
        // if(now_age >= 35 && now_age < 65){
        //     now_utility = UTILITY_COST
        // }else{
        //     now_utility = UTILITY_COST * 0.8
        // }

        // 家賃補助
        if(now_age >= HOJO_START_AGE && now_age < HOJO_END_AGE){
            rent_hojo = HOJO
        }else{
            rent_hojo = 0
        }

        for(let month=1; month<=12; month++){
            // 更新料計算(偶数年の12月に更新とする)
            if(now_year % 2 == 0 && month == 12){
                koshin = now_rent
            }else{
                koshin = 0
            }
            SUM_RENT = SUM_RENT + now_rent
            // SUM_UTILITY = SUM_UTILITY + now_utility
            SUM_PARKING = SUM_PARKING + parking_cost
            SUM_KOSHIN = SUM_KOSHIN + koshin
            SUM_HOJO = SUM_HOJO + rent_hojo
            // TOTAL_COST = SUM_RENT + SUM_PARKING + SUM_KOSHIN - SUM_HOJO
            TOTAL_COST = TOTAL_COST + now_rent + parking_cost + koshin - rent_hojo
        }
        // console.log(TOTAL_COST,now_age,now_year,SUM_HOJO,SUM_KOSHIN,SUM_PARKING)
        cost_array.push(TOTAL_COST / 10000)
        year_array.push(now_year)
        old_array.push(now_age)
    }
    return [old_array,year_array,cost_array];

}
