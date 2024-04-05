import requests
import time
import json
import pandas as pd

energy_star_types = ["dehumidifiers", "clothes dryers", "clothes washers", "dishwashers",
                     "electric cooking", "freezers", "refrigerators", "air cleaners", "storm windows",
                     "heat pumps (ducted)", "boilers", "central AC", "furnaces",
                     "geothermal heat pumps", "mini-split AC", "room AC", "smart thermostats", "ventilating fans",
                     "heat pumps (mini-split)"]

master_dict = {}
for i in range(len(energy_star_types)):
    appliance_type = energy_star_types[i]

    energy_star_urls = {
        "dehumidifiers": "https://data.energystar.gov/resource/myec-ajj2.json",
        "clothes dryers": "https://data.energystar.gov/resource/t9u7-4d2j.json",
        "clothes washers": "https://data.energystar.gov/resource/bghd-e2wd.json",
        "dishwashers": "https://data.energystar.gov/resource/q8py-6w3f.json",
        "electric cooking": "https://data.energystar.gov/resource/m6gi-ng33.json",
        "freezers": "https://data.energystar.gov/resource/8t9c-g3tn.json",
        "heat pumps (ducted)": "https://data.energystar.gov/resource/akti-mt5s.json",
        "boilers": "https://data.energystar.gov/resource/6rww-hpns.json",
        "central AC": "https://data.energystar.gov/resource/tyr2-hhgu.json",
        "furnaces": "https://data.energystar.gov/resource/i97v-e8au.json",
        "geothermal heat pumps": "https://data.energystar.gov/resource/acvd-5wvz.json",
        "mini-split AC": "https://data.energystar.gov/resource/qj64-j3bn.json",
        "room AC": "https://data.energystar.gov/resource/5xn2-dv4h.json",
        "smart thermostats": "https://data.energystar.gov/resource/7p2p-wkbf.json",
        "ventilating fans": "https://data.energystar.gov/resource/8dv7-nngq.json",
        "heat pumps (mini-split)": "https://data.energystar.gov/resource/akti-mt5s.json",
        "refrigerators": "https://data.energystar.gov/resource/p5st-her9.json",
        "air cleaners": "https://data.energystar.gov/resource/jmck-i55n.json",
        "storm windows": "https://data.energystar.gov/resource/qaxz-ikcb.json",
    }

    energy_star_url = energy_star_urls[appliance_type]

    headers = {
        "X-App-Token": "hKV3KyjBKxMoRTsr6dpGO8eII"
    }

    energy_star_app_token = "hKV3KyjBKxMoRTsr6dpGO8eII"

    try_number = 1
    while try_number < 5:
        try:
            test = requests.get(energy_star_url, headers={"X-Params": json.dumps(headers)})
            print(test)
            test2 = test.json()
            try_number = 5
        except:
            time.sleep(2 ** try_number)
            try_number = try_number + 1

    master_dict[appliance_type] = test2
    print(appliance_type)
    time.sleep(5)

with open("energy_star_api_data.json", "w") as out:
    json.dump(master_dict, out)