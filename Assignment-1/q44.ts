// question 44
const sandwich_summary = (...items: Array<string>) => {
    console.log("A sandwich ordered with items: ");
    items.map((item: string) => console.log(item));
  };
  let items: Array<string> = ["beef", "cheese", "onions", "egg"];
  sandwich_summary(...items);
  items = ["mayo", "garlic", "cheese", "onions", "chicken", "parsley", "carrot"];
  sandwich_summary(...items);