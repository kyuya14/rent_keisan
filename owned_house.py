# -*- coding: utf-8 -*-
# from ctypes.wintypes import INT


# your parameter
# parsonal 
LIMIT = 35                             # 期間
START_YEAR = 2025                      # 年
START_AGE = 35                         # 年齢
END_YEAR = START_YEAR + LIMIT          # 年
END_AGE = START_AGE + LIMIT            # 年齢

# basic parameter
RENT_MONTH = 100000                  # 家賃(35~39歳、65~85歳)
# RENT_MONTH = RENT_MONTH * 1.5      # 家賃(40~64歳)
PARKING = 15000                        # 駐車場代（月額）
UTILITY_COST = 15000                   # 光熱費（月額）
HOJO = 70000                           # 家賃補助（月額）
HOJO_LIMIT = 5                         # 家賃補助取得期間（年）

SUM_RENT = 0
SUM_UTILITY = 0
SUM_PARKING = 0
SUM_KOSHIN = 0
SUM_HOJO = 0

for year in range(LIMIT):
    now_age = START_AGE + year
    now_year = START_YEAR + year
    # 家賃計算(40~64歳はRENT_MONTHの1.5倍)
    if now_age >=START_AGE + 5 and now_age < 65:
        now_rent = RENT_MONTH * 1.5
    else:
        now_rent = RENT_MONTH
    # 駐車場計算
    if now_age >=START_AGE and now_age < END_AGE:
        parking_cost = PARKING
    else:
        parking_cost = 0
    # 光熱費計算
    if now_age >=START_AGE and now_age < 65:
        now_utility = UTILITY_COST
    else:
        now_utility = UTILITY_COST * 0.8
    # 家賃補助
    if now_age >=START_AGE and now_age < START_AGE + HOJO_LIMIT:
        rent_hojo = HOJO
    else:
        rent_hojo = 0


    for month in range(12):
        # 更新料計算(偶数年の12月に更新とする)
        if now_year % 2 == 0 and month + 1 == 12:
            koshin = now_rent
        else:
            koshin = 0
        SUM_RENT = SUM_RENT + now_rent
        SUM_UTILITY = SUM_UTILITY + now_utility
        SUM_PARKING = SUM_PARKING + parking_cost
        SUM_KOSHIN = SUM_KOSHIN + koshin
        SUM_HOJO = SUM_HOJO + rent_hojo
        print(now_year,month+1,now_age,now_rent,now_utility,parking_cost,koshin,rent_hojo)
        
print(int(SUM_RENT),int(SUM_UTILITY),int(SUM_PARKING),int(SUM_KOSHIN),int(SUM_RENT+SUM_UTILITY+SUM_PARKING+SUM_KOSHIN))
print(int(SUM_RENT+SUM_PARKING+SUM_KOSHIN)/LIMIT/12)
print(int(SUM_RENT),int(SUM_UTILITY),int(SUM_PARKING),int(SUM_KOSHIN),int(SUM_HOJO),int(SUM_RENT+SUM_UTILITY+SUM_PARKING+SUM_KOSHIN-SUM_HOJO))
print(int(SUM_RENT+SUM_PARKING+SUM_KOSHIN-SUM_HOJO)/LIMIT/12)
        