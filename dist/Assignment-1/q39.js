"use strict";
// question no 39
Object.defineProperty(exports, "__esModule", { value: true });
const city_country = (city, country) => {
    return `"${city},${country}"`;
};
console.log(city_country("lahore", "Pakistan"));
console.log(city_country("istanbul", "turkey"));
console.log(city_country("melborne", "australia"));
