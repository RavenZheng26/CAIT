function Product(props) {
  return (
    <div className="Product">
      <div className="ProductInfo">
        <img className="ProductImage" src={props.item.imageUrl} />
        <div
          className="ProductName"
          style={{ fontWeight: "bold", fontSize: "36px" }}
        >
          {props.item.name}
        </div>
        <div className="ProductPrice" style={{ fontSize: "24px" }}>
          ${props.item.price}
        </div>
      </div>
      <div className="SelectQuantity">
        <button onClick={handleClick1}>-</button>
        <input {...props.selectQ} />
        <button onClick={handleClick2}>+</button>
      </div>
    </div>
  );
}

const handleClick1 = (event) => {
  // props.selectQ=(props.selectQ - 1);
  //
  //this.selectQ= (this.selectQ - 1);
  //console.log(beef.selectQ);
};
const handleClick2 = (event) => {
  //  props.selectQ=(input.selectQ + 1);
  //console.log(beef.selectQ);
};
const handleSubmit = (event) => {
  event.preventDefault();
  alert("attempt to send text to " + phoneNumber + " failed");
  alert(receipt);
  //alert(receipt);
  //console.log(receipt);
};
const handleChange = (event) => {
  phoneNumber = event.target.value;
  //use API to send the text
};

let phoneNumber = 0;
const beef = {
  selectQ: 1,
  item: {
    name: "beef",
    price: 6.99,
    imageUrl:
      "https://embed.widencdn.net/img/beef/melpznnl7q/120x120px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml"
  }
};
const chicken = {
  selectQ: 2,
  item: {
    name: "chicken",
    price: 3.99,
    imageUrl:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2424488/4dcbd6daa401e91777f02e1fb67066d1_large.png&width=120&type=webp&quality=80"
  }
};
const fish = {
  selectQ: 3,
  item: {
    name: "fish",
    price: 5.99,
    imageUrl:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2262651/73958a39af08637d4175b9c7a480e8e2_large.png&width=120&type=webp&quality=80"
  }
};
const lobster = {
  selectQ: 0,
  item: {
    name: "lobster",
    price: 12.99,
    imageUrl:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684704629180/d5ee990a21589fcdf1ee0ff8ac38ce59_large.png&width=120&type=webp&quality=80"
  }
};
const pork = {
  selectQ: 0,
  item: {
    name: "pork",
    price: 4.99,
    imageUrl:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00260549000002/f89889ac4f5c5f2158bd7f18e2cf0a48_large.png&width=120&type=webp&quality=80"
  }
};
const shrimp = {
  selectQ: 0,
  item: {
    name: "shrimp",
    price: 7.99,
    imageUrl:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/6390763/238f368a7c774fbe7523eae8c148d0a0_large.png&width=120&type=webp&quality=80"
  }
};

const totalPrice =
  beef.selectQ * beef.item.price +
  chicken.selectQ * chicken.item.price +
  fish.selectQ * fish.item.price +
  lobster.selectQ * pork.item.price +
  shrimp.selectQ * shrimp.item.price;
//console.log(totalPrice);
let receipt = "you bought ";
if (beef.selectQ != 0) receipt = receipt + beef.selectQ + " beef($6.99/ea) ";
if (chicken.selectQ != 0)
  receipt = receipt + chicken.selectQ + " chicken($3.99/ea) ";
if (fish.selectQ != 0) receipt = receipt + fish.selectQ + " fish($5.99/ea) ";
if (lobster.selectQ != 0)
  receipt = receipt + lobster.selectQ + " lobster($12.99/ea) ";
if (pork.selectQ != 0) receipt = receipt + pork.selectQ + " pork($4.99/ea) ";
if (shrimp.selectQ != 0)
  receipt = receipt + shrimp.selectQ + " shrimp($7.99/ea) ";
receipt = receipt + ", the total price is $" + totalPrice;
//console.log(receipt);
//console.log("you bought "+beef.selectQ+ " beef($6.99/ea) and "+chicken.selectQ+" chicken($3.99/ea) and "+fish.selectQ+ " fish($5.99/ea) and "+lobster.selectQ+" lobster($12.99/ea) and "+pork.selectQ+" pork($4.99/ea) and "+shrimp.selectQ+" shrimp($7.99/ea), the total price is $"+totalPrice);

ReactDOM.render(
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    <Product selectQ={beef.selectQ} item={beef.item} />
    <Product selectQ={chicken.selectQ} item={chicken.item} />
    <Product selectQ={fish.selectQ} item={fish.item} />
    <p style={{ flexBasis: "100%" }}> </p>
    <Product selectQ={lobster.selectQ} item={lobster.item} />
    <Product selectQ={pork.selectQ} item={pork.item} />
    <Product selectQ={shrimp.selectQ} item={shrimp.item} />
    <p style={{ flexBasis: "100%" }}> </p>
    <p style={{ fontSize: "24px" }}> Enter your phone number </p>
    <input type="text" onChange={handleChange} />
    <button
      type="submit"
      style={{ fontWeight: "bold", fontSize: "28px" }}
      onClick={handleSubmit}
    >
      {" "}
      CHECKOUT{" "}
    </button>
  </div>,
  document.getElementById("root")
);
