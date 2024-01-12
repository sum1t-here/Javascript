// Build a feature for Store's Inventory.

// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

const convertToInr = (priceUSD) => {
  const exchangeRate = 80;
  return priceUSD * exchangeRate;
};

const itemsToInr = (inventory) => {
  const convertedInventory = Object.entries(inventory).map(
    ([items, priceUSD]) => {
      const priceInr = convertToInr(priceUSD);
      return [items, priceInr];
    }
  );
  return Object.fromEntries(convertedInventory);
};

const storeInventoryUSD = {
  item1: 20, // USD
  item2: 35.5, // USD
  item3: 10, // USD
};

const storeInventoryINR = itemsToInr(storeInventoryUSD);

console.log('Original Inventory (USD):', storeInventoryUSD);
console.log('Converted Inventory (INR):', storeInventoryINR);

// Original Inventory (USD): { item1: 20, item2: 35.5, item3: 10 }
// Converted Inventory (INR): { item1: 1600, item2: 2840, item3: 800 }
