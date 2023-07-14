//You have to fill up your gas and there are multiple gas stations with different prices
// and different distance to you. Sometimes it is cheaper to drive to a more distant gas station,
//because the prices are cheaper!

// Your tank can contain 60l at maximum.
// You always fill your tank full
// Calculate the current fuel in tank with the actual price of the gas stations
// Your task:
// Given an object with multiple gas stations, your currentFuel as integer between 0 and 60 and the fuel consumption of your car (l/100km, float) - find the cheapest gas station and return the name of the gas station!

// Return undefined (in JS) | None (in Python) if there are no gas station or your fuel is not enough to reach one!

// No need to test for invalid input!
// Remember: You also need fuel to drive to the gas station! The way back home should also be considered :)

function gasStation(obj, currentFuel, fuelConsumption) {
  const THANK = 60;
  const FUEL_FOR_ONE_KM = fuelConsumption / 100;
  const keys = Object.keys(obj);
  const isFuel = new Set();
  let gasStation = "";
  let minPrice = 0;

  if (keys.length === 0) {
    return undefined;
  }

  for (let i = 0; i < keys.length; i++) {
    const distance = obj[keys[i]].distance;
    const twoWayDistance = distance * 2;

    if (currentFuel < distance * FUEL_FOR_ONE_KM) {
      isFuel.add(false);
    } else {
      isFuel.add(true);
    }

    obj[keys[i]].totalPrice =
      (THANK - (currentFuel - FUEL_FOR_ONE_KM * twoWayDistance)) *
      obj[keys[i]].price;
  }

  if (isFuel.size === 1 && isFuel.has(false)) {
    return undefined;
  }

  for (let i = 0; i < keys.length; i++) {
    if (minPrice === 0) {
      minPrice = obj[keys[i]].totalPrice;
      gasStation = keys[i];
    }

    if (minPrice > obj[keys[i]].totalPrice) {
      minPrice = obj[keys[i]].totalPrice;
      gasStation = keys[i];
    }
  }

  return gasStation;
}

const stations = {iFuel:{'price': 3.0, 'distance': 7},
TheStation:{'price': 2.0, 'distance': 77},
Gasoline:{'price': 2.0, 'distance': 101}};

console.log(gasStation(stations, 41, 8));
