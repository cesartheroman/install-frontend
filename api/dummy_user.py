import json
import numpy as np

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

for i in range(len(appliance_types)):
    dummy_appliance = {}
    dummy_appliance['applianceType'] = appliance_types[i]
    dummy_appliance['date_names'] = dummonth

    #gas powered dryer
    if appliance_types[i] == 'dryer':
        dummy_appliance_gas = []
        dummy_appliance_gasc = []

        for j in range(len(dumgas)):
            gasper = np.random.choice(appliance_probs[i])
            # There will be an issue with the dryer beginning on the 8th data point
            if j > 7:
                gasper = 2*gasper
            dummy_appliance_gas.append(gasper*dumgas[j])
            dummy_appliance_gasc.append(gasper*dumgasc[j])
        dummy_appliance['gas_consumption'] = dummy_appliance_gas
        dummy_appliance['gas_cost'] = dummy_appliance_gasc
        dummy_appliance['gas_consumption_annual'] = sum(dummy_appliance_gas)
        dummy_appliance['gas_cost_annual'] = sum(dummy_appliance_gasc)

    #electric washer, dishwasher
    else:
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

    dummy_user[appliance_types[i]] = dummy_appliance

with open('dummy_user.json', 'w') as out:
    json.dump(dummy_user,out)










