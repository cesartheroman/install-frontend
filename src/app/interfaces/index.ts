export interface User {
  id: number;
  utility: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  user_energy: {
    date_names: string[];
    electricity_consumption: number[];
    electricity_cost: number[];
  };
  user_electricity_consumption_annual: number;
  user_electricity_cost_annual: number;
  user_gas: UserGas;
  user_gas_consumption_annual: number;
  user_gas_cost_annual: number;
  home: Home;
}

interface UserGas {
  date_names: string[];
  gas_consumption: number[];
  gas_cost: number[];
}

interface Home {
  date_names: string[];
  home_electricity_consumption: number[];
  home_electricity_cost: number[];
  home_gas_consumption: number[];
  home_gas_cost: number[];
  home_electricity_consumption_annual: number;
  home_electricity_cost_annual: number;
  home_gas_consumption_annual: number;
  home_gas_cost_annual: number;
}

export interface Appliance {
  applianceType: string;
  date_names: string[];
  brand_name: string;
  model_name: string;
}

export interface Washer extends Appliance {
  washer_volume_cu_ft: number;
  IMEF: number;
  load_type: string;
  electricity_consumption: number[];
  electricity_cost: number[];
  electricity_consumption_annual: number;
  electricity_cost_annual: number;
}

export interface Dryer extends Appliance {
  dryer_volume_cu_ft: number;
  CEF: number;
  ES_energy_use: number;
  dryer_type: string;
  dryer_energy_type: string;
  gas_consumption: number[];
  gas_cost: number[];
  gas_consumption_annual: number;
  gas_cost_annual: number;
}

export interface Dishwasher extends Appliance {
  ES_annual_energy_use: number;
  dishwasher_type: string;
  dishwaher_width: number;
  dishwasher_depth: number;
  electricity_consumption: number[];
  electricity_cost: number[];
  electricity_consumption_annual: number;
  electricity_cost_annual: number;
}
