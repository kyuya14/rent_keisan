'use strict';
function owned_house(){


    // let RENT_MONTH = 100000                    // 家賃(35~39歳、65~85歳)
    // let PARKING = 15000                        // 駐車場代（月額）
    // let UTILITY_COST = 15000                   // 光熱費（月額）
    // let HOJO = 70000                           // 家賃補助（月額）
    // let HOJO_LIMIT = 5                         // 家賃補助取得期間（年）
    // let LIMIT = 35                             // 期間
    // let START_YEAR = 2025                      // 年
    // let START_AGE = 35                         // 年齢
    owned_house_cr(35,2025,35,5000,0,15000,0.015,150000,5500000)
}

function owned_house_cr(LIMIT,START_YEAR,START_AGE,HOUSE_COST_OLD,ATAMAKIN,UTILITY_COST,RATE,KOTEISHISAN,SHUZENHI) {
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
    let HOUSE_COST = HOUSE_COST_OLD * 10000
    let FIRST_COST = HOUSE_COST * 0.06         // 初期費用（住宅費用×0.06）
    // let KOTEISHISAN = 150000                   // 固定資産税（年額）
    // let SHUZENHI = 5500000                     // 修繕費用


    let SUM_RENT = 0
    let SUM_UTILITY = 0
    let SUM_PARKING = 0
    let SUM_KOSHIN = 0
    let SUM_COST = 0
    // let RANGE = range(0, LIMIT * 12)

    // Initial parameter
    let now_age = 0
    let now_year = 0
    let now_utility = 0



    // --------------------------------------
    // 金利計算（元利均等返済）※後で関数にする
    
    let totalcost =  HOUSE_COST - ATAMAKIN
    let loan_balance = totalcost  // ローン残高
    let r = RATE
    let reduction_month = 0
    let gankin = 0
    let kinri = 0

    for(let month=0; month<=LIMIT * 12; month++){
        if(loan_balance < 0){
            break;
        } 
        // 毎月返済額(reduction_month)の計算
        reduction_month = (totalcost * r / 12 * (1 + r / 12)**(LIMIT * 12)) / (((1 + r / 12)**(LIMIT * 12)) - 1)
        // 金利(kinri)
        kinri = loan_balance * r / 12
        // 元金分
        gankin = reduction_month - kinri
        // ローン残高(loan_balance)
        loan_balance = loan_balance - gankin
    
        console.log(month,parseInt(reduction_month),parseInt(loan_balance),parseInt(gankin),parseInt(kinri))
    }
    
    // --------------------------------------
    
    for(let year=0; year<LIMIT; year++){
        now_age = START_AGE + year
        now_year = START_YEAR + year
        // 光熱費計算
        if(now_age >=START_AGE && now_age < 65){
            now_utility = UTILITY_COST
        }else{
            now_utility = UTILITY_COST * 0.8
        }
    
        for(let month=0; month<12; month++){
            SUM_UTILITY = SUM_UTILITY + now_utility
        }
    }
    
    console.log(reduction_month + KOTEISHISAN / 12 + SHUZENHI / (LIMIT * 12 ) + FIRST_COST / (LIMIT * 12 ))
    

}