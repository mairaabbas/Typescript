// question no 38

const describe_city = (city: string, country: string = "Pakistan") => {
    console.log(city, "is situated in", country);
  };
  describe_city("Lahore");
  describe_city("tokyo", "japan");
  describe_city("paris", "france");