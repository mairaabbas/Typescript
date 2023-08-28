"use strict";
// question no 38
Object.defineProperty(exports, "__esModule", { value: true });
const describe_city = (city, country = "Pakistan") => {
    console.log(city, "is situated in", country);
};
describe_city("Lahore");
describe_city("tokyo", "japan");
describe_city("paris", "france");
