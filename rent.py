# -*- coding: utf-8 -*-
# your parameter
# parsonal 
LIMIT = 35                             # 期間
START_YEAR = 2025                      # 年
START_AGE = 35                         # 年齢
END_YEAR = START_YEAR + LIMIT          # 年
END_AGE = START_AGE + LIMIT            # 年齢

# basic parameter
RENT_MONTH_1 = 100000                  # 家賃(35~39歳、65~85歳)
RENT_MONTH_2 = RENT_MONTH_1 * 1.5      # 家賃(40~64歳)
PARKING = 15000                        # 駐車場代（月額）
UTILITY_COST = 15000                   # 光熱費（月額）
SUM_RENT = 0
SUM_UTILITY = 0
SUM_PARKING = 0
SUM_KOSHIN = 0

for year in range(LIMIT+16):
    now_age = START_AGE + year
    now_year = START_YEAR + year
    # 家賃計算
    if now_age >=40 and now_age < 65:
        now_rent = RENT_MONTH_2
    else:
        now_rent = RENT_MONTH_1
    # 駐車場計算
    if now_age >=35 and now_age < 70:
        parking_cost = PARKING
    else:
        parking_cost = 0
    # 光熱費計算
    if now_age >=35 and now_age < 60:
        now_utility = UTILITY_COST
    else:
        now_utility = UTILITY_COST * 0.8

    for i in range(12):
        SUM_RENT = SUM_RENT + now_rent
        SUM_UTILITY = SUM_UTILITY + now_utility
        SUM_PARKING = SUM_PARKING + parking_cost
        print(now_year,i+1,now_age,now_rent,parking_cost)
        
print(SUM_RENT,SUM_UTILITY,SUM_PARKING,SUM_RENT+SUM_UTILITY+SUM_PARKING)
        