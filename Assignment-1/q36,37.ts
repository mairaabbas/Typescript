// question no 36 and 37

const make_shirt = (size: string, message: string) => {
    console.log("Shirt size: " + size + ". Message: " + message);
  };
  make_shirt("XS", "hurray! we're gonna dance all night!");
  
  // funtion is updated
  function make_shirtUpdate(
    size: string = "L",
    message: string = "I love programming"
  ) {
    console.log("Shirt size: " + size + ". Message: " + message);
  }
  make_shirtUpdate();
  make_shirtUpdate("M", "i am a mess");
  make_shirtUpdate("XL", "You are just perfect!");



  