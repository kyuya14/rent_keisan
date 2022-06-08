'use strict';
function rent_house(){


    // let RENT_MONTH = 100000                    // 家賃(35~39歳、65~85歳)
    // let PARKING = 15000                        // 駐車場代（月額）
    // let UTILITY_COST = 15000                   // 光熱費（月額）
    // let HOJO = 70000                           // 家賃補助（月額）
    // let HOJO_LIMIT = 5                         // 家賃補助取得期間（年）
    // let LIMIT = 35                             // 期間
    // let START_YEAR = 2025                      // 年
    // let START_AGE = 35                         // 年齢
    rent_house_cr(35,2025,35,100000,15000,15000,70000,5)
}

function rent_house_cr(LIMIT,START_YEAR,START_AGE,RENT_MONTH,PARKING,UTILITY_COST,HOJO,HOJO_LIMIT) {
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


    let END_YEAR = START_YEAR + LIMIT          // 年
    let END_AGE = START_AGE + LIMIT            // 年齢

    let SUM_RENT = 0
    let SUM_UTILITY = 0
    let SUM_PARKING = 0
    let SUM_KOSHIN = 0
    let SUM_HOJO = 0

    // Initial parameter
    let now_age = 0
    let now_year = 0
    let now_rent = 0
    let parking_cost = 0
    let now_utility = 0
    let rent_hojo = 0
    let koshin = 0

  
    for(let year=0; year<LIMIT; year++){
        now_age = START_AGE + year
        now_year = START_YEAR + year
        // 家賃計算(40~64歳はRENT_MONTHの1.5倍)
        if(now_age >=START_AGE + 5 && now_age < 65){
            now_rent = RENT_MONTH * 1.5
        }else{
            now_rent = RENT_MONTH
        }
        // 駐車場計算
        if(now_age >=START_AGE && now_age < END_AGE){
            parking_cost = PARKING
        }else{
            parking_cost = 0
        }
        // 光熱費計算
        if(now_age >=START_AGE && now_age < 65){
            now_utility = UTILITY_COST
        }else{
            now_utility = UTILITY_COST * 0.8
        }
        // 家賃補助
        if(now_age >=START_AGE && now_age < START_AGE + HOJO_LIMIT){
            rent_hojo = HOJO
        }else{
            rent_hojo = 0
        }
        for(let month=0; month<12; month++){
            // 更新料計算(偶数年の12月に更新とする)
            if(now_year % 2 == 0 && month + 1 == 12){
                let koshin = now_rent
    
            }else{
                koshin = 0
                SUM_RENT = SUM_RENT + now_rent
                SUM_UTILITY = SUM_UTILITY + now_utility
                SUM_PARKING = SUM_PARKING + parking_cost
                SUM_KOSHIN = SUM_KOSHIN + koshin
                SUM_HOJO = SUM_HOJO + rent_hojo
                console.log(now_year,month+1,now_age,now_rent,now_utility,parking_cost,koshin,rent_hojo)
            }
        }
    }



}