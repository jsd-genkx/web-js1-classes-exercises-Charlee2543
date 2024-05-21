// class = (ES6 feature) provides a more structured and clearner way to work with objects compared to traditional constructor functions.

// constructor function - without class

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.displayProduct = function () {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ฿${this.price.toFixed(2)}`);
//   };
//   this.calculateTotal = function (salesTax) {
//     return this.price + this.price * salesTax;
//   };
// }

// const salesTax = 0.07;

// const product1 = new Product("Shirt", 249.99);
// const product2 = new Product("Pants", 339.99);
// const product3 = new Product("Underwear", 149.99);

// product1.displayProduct();

// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total Price (with tax): ฿${totalPrice.toFixed(2)}`);

// class

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // don't need to use the function keyword in class
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ฿${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax,promotion) {
    return (this.price + this.price * salesTax) *promotion;
  }
}

const promotion = 0.98;
const salesTax = 0.07;

const product1 = new Product("watch", 3500);
const product2 = new Product("iPhone",35000);
const product3 = new Product("iPad", 15000);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const totalPrice1 = product1.calculateTotal(salesTax,promotion);
const totalPrice2 = product2.calculateTotal(salesTax,promotion);
const totalPrice3 = product3.calculateTotal(salesTax,promotion);

console.log(`Total Price (with tax): ฿${totalPrice1.toFixed(2)}`);
console.log(`Total Price (with tax): ฿${totalPrice2.toFixed(2)}`);
console.log(`Total Price (with tax): ฿${totalPrice3.toFixed(2)}`);
console.log(`Total Price All Product (with tax): ฿${(totalPrice1+totalPrice2+totalPrice3).toFixed(2)}`)