# -*- coding: utf-8 -*-
# from ctypes.wintypes import INT


# your parameter
# parsonal 
from sre_constants import RANGE


LIMIT = 35                             # 期間
START_YEAR = 2025                      # 年
START_AGE = 35                         # 年齢
END_YEAR = START_YEAR + LIMIT          # 年
END_AGE = START_AGE + LIMIT            # 年齢

# basic parameter
HOUSE_COST = 5000 * 10000              # 住宅費用
ATAMAKIN = 0                           # 頭金
FIRST_COST = HOUSE_COST * 0.06         # 初期費用（住宅費用×0.06）
UTILITY_COST = 20000                   # 光熱費（月額）
RATE = 0.015
KOTEISHISAN = 150000                   # 固定資産税（年額）
SHUZENHI = 5500000                     # 修繕費用

SUM_COST = 0
SUM_UTILITY = 0
SUM_HOJO = 0
RANGE = range(0, LIMIT * 12)


# --------------------------------------
# 金利計算（元利均等返済）※後で関数にする

totalcost =  HOUSE_COST - ATAMAKIN
balance = totalcost
r = RATE
for month in RANGE:
    if balance < 0: break
    # 毎月返済額(reduction_month)の計算
    reduction_month = (totalcost * r / 12 * (1 + r / 12)**(LIMIT * 12)) / (((1 + r / 12)**(LIMIT * 12)) - 1)
    # 金利 
    kinri = balance * r / 12
    # 元金分
    gankin = reduction_month - kinri
    # 残高(balance)
    balance = balance - gankin

    print(int(reduction_month),int(balance),int(reduction_month-kinri),int(kinri))

# --------------------------------------

for year in range(LIMIT):
    now_age = START_AGE + year
    now_year = START_YEAR + year
    # 光熱費計算
    if now_age >=START_AGE and now_age < 65:
        now_utility = UTILITY_COST
    else:
        now_utility = UTILITY_COST * 0.8


    for month in range(12):
        SUM_UTILITY = SUM_UTILITY + now_utility

print(reduction_month + KOTEISHISAN / 12 + SHUZENHI / (LIMIT * 12 ) + FIRST_COST / (LIMIT * 12 ))

        