import json
import numpy as np
import InstallAPIcalls

dummy_user = {}

dummy_user['id'] = 1234
dummy_user['utility'] = 'Seattle City Light'
dummy_user['email'] = 'erick.s.salvatierra@gmail.com'
dummy_user['address'] = '123 Elm St'
dummy_user['city'] = 'Chicago'
dummy_user['state'] = 'IL'
dummy_user['zip'] = 60007


dummonth = ["January 2024", "December 2023", "November 2023", "October 2023", "September 2023", "August 2023", "July 2023", "June 2023", "May 2023", "April 2023", "March 2023", "February 2023"]
dumelec = [52.831, 52.655, 94.642, 25.031, 42.981, 25.413, 73.575, 90.008, 92.173, 13.962, 47.757, 87.798] #all in kWh
dumgas = [27001, 53099, 18340, 61400, 68329, 63334, 81523, 90973, 71470, 63650, 37285, 63207] #all in therms
dumelecc = [108.53, 61.20, 164.28, 135.03, 156.93, 173.56, 157.22, 98.54, 173.10, 129.48, 115.60, 94.74] #all in $
dumgasc = [75.50, 40.07, 90.60, 86.42, 57.33, 12.75, 85.91, 72.98, 44.37, 17.13, 51.56, 10.84] #all in $

dummonth.reverse()
dumelec.reverse()
dumgas.reverse()
dumelecc.reverse()
dumgasc.reverse()

user_energy = {}
user_energy['date_names'] = dummonth
user_energy['electricity_consumption'] = dumelec
user_energy['electricity_cost'] = dumelecc

dummy_user['user_energy'] = user_energy
dummy_user['user_electricity_consumption_annual'] = sum(dumelec)
dummy_user['user_electricity_cost_annual'] = sum(dumelecc)

user_gas = {}
user_gas['date_names'] = dummonth
user_gas['gas_consumption'] = dumgas
user_gas['gas_cost'] = dumgasc

dummy_user['user_gas'] = user_gas
dummy_user['user_gas_consumption_annual'] = sum(dumgas)
dummy_user['user_gas_cost_annual'] = sum(dumgasc)

dummy_home = {}

# In the future for Prisma we'll have lat and long but for now this will suffice

dummy_home_prob = [0.4, 0.6]

dummy_home_elec = []
dummy_home_gas = []
dummy_home_elecc = []
dummy_home_gasc = []
for i in range(len(dumelec)):
    elecper = np.random.choice(dummy_home_prob)
    dummy_home_elec.append(elecper*dumelec[i])
    dummy_home_elecc.append(elecper*dumelecc[i])
    gasper = np.random.choice(dummy_home_prob)
    dummy_home_gas.append(gasper*dumgas[i])
    dummy_home_gasc.append(gasper*dumgasc[i])

dummy_home['date_names'] = dummonth
dummy_home['home_electricity_consumption'] = dummy_home_elec
dummy_home['home_electricity_cost'] = dummy_home_elecc
dummy_home['home_gas_consumption'] = dummy_home_gas
dummy_home['home_gas_cost'] = dummy_home_gasc

dummy_home['home_electricity_consumption_annual'] = sum(dummy_home_elec)
dummy_home['home_electricity_cost_annual'] = sum(dummy_home_elecc)
dummy_home['home_gas_consumption_annual'] = sum(dummy_home_gas)
dummy_home['home_gas_cost_annual'] = sum(dummy_home_gasc)

dummy_user['home'] = dummy_home

appliance_types = ['washer', 'dryer', 'dishwasher']
appliance_probs = [[0.05, 0.08], [0.1, 0.2], [0.05, 0.08]]
dummy_data = {}

for i in range(len(appliance_types)):
    dummy_appliance = {'applianceType': appliance_types[i], 'date_names': dummonth}
    # gas powered dryer
    if appliance_types[i] == 'dryer':
        dummy_appliance['brand_name'] = "Samsung"
        dummy_appliance['model_name'] = "DV50K8600GV"
        dummy_appliance['dryer_volume_cu_ft'] = 7.4
        dummy_appliance['CEF'] = 3.49
        dummy_appliance['ES_energy_use'] = 685
        dummy_appliance['dryer_type'] = 'Standard'
        dummy_appliance['dryer_energy_type'] = 'Gas'
        dummy_appliance_gas = []
        dummy_appliance_gasc = []
        dummy_appliance_gas_broke = []
        dummy_appliance_gasc_broke = []

        for j in range(len(dumgas)):
            gasper = np.random.choice(appliance_probs[i])
            # There will be an issue with the dryer beginning on the 8th data point
            if j > 7:
                gasper2 = 2*gasper
            else:
                gasper2 = gasper
            dummy_appliance_gas.append(gasper*dumgas[j])
            dummy_appliance_gasc.append(gasper*dumgasc[j])
            dummy_appliance_gas_broke.append(gasper2*dumgas[j])
            dummy_appliance_gasc_broke.append(gasper2*dumgasc[j])
        dummy_appliance['gas_consumption'] = dummy_appliance_gas_broke
        dummy_appliance['gas_cost'] = dummy_appliance_gasc_broke
        dummy_appliance['gas_consumption_annual'] = sum(dummy_appliance_gas_broke)
        dummy_appliance['gas_cost_annual'] = sum(dummy_appliance_gasc_broke)

        applookup = InstallAPIcalls.EnergyStarAPILookup("clothes dryers")
        dummy_dryers = {}
        for j in range(len(applookup['model_name'])):
            if applookup['type'][j] == dummy_appliance['dryer_energy_type']:

                dryer_id_string = applookup['pd_id'][j]
                dummy_dryer = {}
                dummy_dryer['brand_name'] = applookup['brand_name'][j]
                dummy_dryer['model_name'] = applookup['model_name'][j].replace("*", "0")
                dummy_dryer['dryer_volume_cu_ft'] = float(applookup['drum_capacity_cu_ft'][j])
                dummy_dryer['CEF'] = float(applookup['combined_energy_factor_cef'][j])
                dummy_dryer['dryer_type'] = "Standard"
                dummy_dryer['dryer_energy_type'] = applookup['type'][j]
                dummy_dryer['ES_energy_use'] = float(applookup['estimated_annual_energy_use_kwh_yr'][j])

                ratio = (dummy_dryer['ES_energy_use']/dummy_dryer['dryer_volume_cu_ft']) / (dummy_appliance['ES_energy_use']/dummy_appliance['dryer_volume_cu_ft'])
                dummy_dryer['gas_consumption'] = [ratio*x for x in dummy_appliance_gas]
                dummy_dryer['gas_cost'] = [ratio*x for x in dummy_appliance_gasc]
                dummy_dryer['gas_consumption_annual'] = ratio*sum(dummy_appliance_gas)
                dummy_dryer['gas_cost_annual'] = ratio*sum(dummy_appliance_gasc)

                dummy_dryers[dryer_id_string] = dummy_dryer

        dummy_data['dryers'] = dummy_dryers

        # electric washer, dishwasher
    elif appliance_types[i] == 'washer':
        dummy_appliance['brand_name'] = "LG"
        dummy_appliance['model_name'] = "WT7010CW"
        dummy_appliance['washer_volume_cu_ft'] = 4.5
        dummy_appliance['IMEF'] = 2.06
        dummy_appliance['load_type'] = 'Top Load'
        dummy_appliance_elec = []
        dummy_appliance_elecc = []

        for j in range(len(dumelec)):
            elecper = np.random.choice(appliance_probs[i])

            dummy_appliance_elec.append(elecper*dumelec[j])
            dummy_appliance_elecc.append(elecper*dumelecc[j])

        dummy_appliance['electricity_consumption'] = dummy_appliance_elec
        dummy_appliance['electricity_cost'] = dummy_appliance_elecc
        dummy_appliance['electricity_consumption_annual'] = sum(dummy_appliance_elec)
        dummy_appliance['electricity_cost_annual'] = sum(dummy_appliance_elecc)

        applookup = InstallAPIcalls.EnergyStarAPILookup("clothes washers")
        dummy_washers = {}
        for j in range(len(applookup['model_number'])):
            if float(applookup['volume_cubic_feet'][j]) == dummy_appliance['washer_volume_cu_ft']:
                if float(applookup['integrated_modified_energy_factor_imef'][j]) > dummy_appliance['IMEF']:
                    washer_id_string = applookup['pd_id'][j]
                    dummy_washer = {}
                    dummy_washer['brand_name'] = applookup['brand_name'][j]
                    dummy_washer['model_name'] = applookup['model_number'][j].replace("*", "0")
                    dummy_washer['washer_volume_cu_ft'] = float(applookup['volume_cubic_feet'][j])
                    dummy_washer['IMEF'] = float(applookup['integrated_modified_energy_factor_imef'][j])
                    dummy_washer['load_type'] = applookup['load_configuration'][j]

                    ratio = dummy_washer['IMEF']/dummy_appliance['IMEF']
                    dummy_washer['electricity_consumption'] = [ratio*x for x in dummy_appliance_elec]
                    dummy_washer['electricity_cost'] = [ratio*x for x in dummy_appliance_elecc]
                    dummy_washer['electricity_consumption_annual'] = sum(dummy_appliance_elec)*ratio
                    dummy_washer['electricity_cost_annual'] = sum(dummy_appliance_elecc)*ratio

                    dummy_washers[washer_id_string] = dummy_washer

        dummy_data['washers'] = dummy_washers

    elif appliance_types[i] == "dishwasher":
        dummy_appliance["brand_name"] = "GE"
        dummy_appliance["model_name"] = "DDT700SSNSS"
        dummy_appliance["ES_annual_energy_use"] = 240
        dummy_appliance["dishwasher_type"] = "Standard"
        dummy_appliance["dishwasher_width"] = 23.8
        dummy_appliance["dishwasher_depth"] = 24
        dummy_appliance_elec = []
        dummy_appliance_elecc = []

        for j in range(len(dumelec)):
            elecper = np.random.choice(appliance_probs[i])

            dummy_appliance_elec.append(elecper*dumelec[j])
            dummy_appliance_elecc.append(elecper*dumelecc[j])

        dummy_appliance['electricity_consumption'] = dummy_appliance_elec
        dummy_appliance['electricity_cost'] = dummy_appliance_elecc
        dummy_appliance['electricity_consumption_annual'] = sum(dummy_appliance_elec)
        dummy_appliance['electricity_cost_annual'] = sum(dummy_appliance_elecc)

        applookup = InstallAPIcalls.EnergyStarAPILookup("dishwashers")
        dummy_dws = {}
        for j in range(len(applookup['model_number'])):
            if applookup['type'][j] == dummy_appliance['dishwasher_type']:
                if float(applookup['width_inches'][j]) >= dummy_appliance['dishwasher_width']:
                    if float(applookup['depth_inches'][j]) >= dummy_appliance['dishwasher_depth']:
                        if float(applookup['annual_energy_use_kwh_year'][j]) > dummy_appliance['ES_annual_energy_use']:
                            dw_id_string = applookup['pd_id'][j]
                            dummy_washer = {}
                            dummy_washer['brand_name'] = applookup['brand_name'][j]
                            dummy_washer['model_name'] = applookup['model_number'][j].replace("*", "0")
                            dummy_washer['dishwasher_width'] = float(applookup['width_inches'][j])
                            dummy_washer['dishwasher_depth'] = float(applookup['depth_inches'][j])
                            dummy_washer['ES_annual_energy_use'] = float(applookup['annual_energy_use_kwh_year'][j])
                            dummy_washer['dishwasher_type'] = applookup['type'][j]

                            ratio = dummy_washer['ES_annual_energy_use']/dummy_appliance['annual_energy_use_kwh_year']
                            dummy_washer['electricity_consumption'] = [ratio*x for x in dummy_appliance_elec]
                            dummy_washer['electricity_cost'] = [ratio*x for x in dummy_appliance_elecc]
                            dummy_washer['electricity_consumption_annual'] = sum(dummy_appliance_elec)*ratio
                            dummy_washer['electricity_cost_annual'] = sum(dummy_appliance_elecc)*ratio

                            dummy_dws[dw_id_string] = dummy_washer

        dummy_data['dishwashers'] = dummy_dws

    dummy_user[appliance_types[i]] = dummy_appliance

with open('dummy_user.json', 'w') as out:
    json.dump(dummy_user,out)

with open('dummy_data.json', 'w') as out:
    json.dump(dummy_data, out)



# different dicts for appliance data



# applookup.to_csv("dishwashers.csv", index=False)












