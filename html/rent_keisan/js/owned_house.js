'use strict';

function owned_house(LIMIT,START_YEAR,START_AGE){

    // let RENT_MONTH = 100000                    // 家賃(35~39歳、65~85歳)
    // let PARKING = 15000                        // 駐車場代（月額）
    // let UTILITY_COST = 15000                   // 光熱費（月額）
    // let HOJO = 70000                           // 家賃補助（月額）
    // let HOJO_LIMIT = 5                         // 家賃補助取得期間（年）
    // let LIMIT = 35                             // 期間
    // let START_YEAR = 2025                      // 年
    // let START_AGE = 35                         // 年齢


    let LIMIT_LOAN = parseInt(document.getElementById("limit_loan").value);
    // let LIMIT = parseInt(document.getElementById("limit").value);
    // if(num == 0){
    //     let LIMIT_LOAN = parseInt(document.getElementById("limit_loan").value);
    // }else {
    //     let LIMIT_LOAN = 
    // }
    // let START_YEAR = parseInt(document.getElementById("start_year").value);
    // let START_AGE = parseInt(document.getElementById("start_age").value);
    let ATAMAKIN = parseFloat(document.getElementById("atamakin").value) * 10000;
    
    // let UTILITY_COST = parseFloat(document.getElementById("utility_cost").value) * 10000;
    let UTILITY_COST = 0;
    let RATE = parseFloat(document.getElementById("rate").value);
    let KOTEISHISAN = parseFloat(document.getElementById("koteishisan").value) * 10000;
    // let SHUZENHI = parseFloat(document.getElementById("shuzenhi").value) * 10000;
    let HOUSE_COST = parseFloat(document.getElementById("house_cost").value) * 10000;


    return owned_house_cr(LIMIT_LOAN,LIMIT,START_YEAR,START_AGE,HOUSE_COST,ATAMAKIN,UTILITY_COST,RATE,KOTEISHISAN)
}

function owned_house_cr(LIMIT_LOAN,LIMIT,START_YEAR,START_AGE,HOUSE_COST,ATAMAKIN,UTILITY_COST,RATE,KOTEISHISAN) {
    // 変数値（入力値）
    // basic parameter
    // RENT_MONTH : 家賃(35~39歳、65~85歳)
    // PARKING :  駐車場代（月額）
    // UTILITY_COST : 光熱費（月額）

    // your parameter
    // parsonal 
    // LIMIT : 期間
    // START_YEAR : 年
    // START_AGE : 年齢

    // your parameter
    // 変数値（入力値）
    // let ATAMAKIN = 0                           // 頭金
    // let UTILITY_COST = 20000                   // 光熱費（月額）
    // let RATE = 0.015

    // 固定値
    let END_YEAR = START_YEAR + LIMIT          // 年
    let END_AGE = START_AGE + LIMIT            // 年齢
    let FIRST_COST = HOUSE_COST * 0.06         // 初期費用（住宅費用×0.06）
    let SHUZENHI = 30 * 10000                  // 修繕費用（年間30万）



    // let SUM_RENT = 0
    // let SUM_UTILITY = 0
    let SUM_COST = 0
    // let RANGE = range(0, LIMIT * 12)

    // Initial parameter
    let now_age = 0
    let now_year = 0
    let now_utility = 0
    let TOTAL_COST = 0

    // chartjsに表示する配列
    let year_array = new Array();
    let cost_array = new Array();
    let old_array = new Array();

    SUM_COST = reduction_month_cr(HOUSE_COST,ATAMAKIN,RATE,LIMIT_LOAN);

    let TOCHI = document.getElementById("tochi").checked;

    for(let year=1; year<=LIMIT; year++){
        // ローン期間を超過したら0にする
        if(year > LIMIT_LOAN){
            SUM_COST = 0;
        }

        // 初期費用を計上
        if(year == 1){
            TOTAL_COST = TOTAL_COST + FIRST_COST
        }else if(year == LIMIT){
            if(TOCHI){
                TOTAL_COST = TOTAL_COST - (HOUSE_COST - 2400 * 10000) * 0.8
                // TOTAL_COST = TOTAL_COST + SHUZENHI - (HOUSE_COST - 2400 * 10000) * 0.8
            }
        }
        now_age = START_AGE + year
        now_year = START_YEAR + year
        // TOTAL_COST = TOTAL_COST + SUM_COST + KOTEISHISAN + (SHUZENHI / LIMIT);

        if(year % 10 == 0) {
            TOTAL_COST = TOTAL_COST + SUM_COST + KOTEISHISAN + SHUZENHI * 10;
        }else {
            TOTAL_COST = TOTAL_COST + SUM_COST + KOTEISHISAN;
            
        }
        // // 光熱費計算
        // if(now_age >=START_AGE && now_age < 65){
        //     now_utility = UTILITY_COST
        // }else{
        //     now_utility = UTILITY_COST * 0.8
        // }
    
        // for(let month=0; month<12; month++){
        //     SUM_UTILITY = SUM_UTILITY + now_utility
        // }

        cost_array.push(parseInt(TOTAL_COST / 10000))
        year_array.push(now_year)
        old_array.push(now_age)

    }
    return [old_array,year_array,cost_array];
    

}

function reduction_month_cr(HOUSE_COST,ATAMAKIN,RATE,LIMIT_LOAN){

    // --------------------------------------
    // 金利計算（元利均等返済）
    
    let totalcost =  HOUSE_COST - ATAMAKIN;
    let loan_balance = totalcost  // ローン残高
    let r = RATE
    let reduction_month = 0
    let gankin = 0
    let kinri = 0

    for(let month=1; month<=LIMIT_LOAN * 12; month++){
        if(loan_balance < 0){
            break;
        } 
        // 毎月返済額(reduction_month)の計算
        reduction_month = (totalcost * r / 12 * (1 + r / 12)**(LIMIT_LOAN * 12)) / (((1 + r / 12)**(LIMIT_LOAN * 12)) - 1)
        // 金利(kinri)
        kinri = loan_balance * r / 12
        // 元金分
        gankin = reduction_month - kinri
        // ローン残高(loan_balance)
        loan_balance = loan_balance - gankin
    

    }
    

    return reduction_month * 12
}
    

    
    // --------------------------------------
