class Product {
  constructor(name, price, created) {
    this.name = name;
    this.price = price;
    this.created = created;
  }
}

class UI {
  AddNewProduct(product) {
    const product_list = document.getElementById("card-list");
    const newProduct = document.createElement("li");
    const { name, price, created } = product;

    newProduct.innerHTML = `
    <li>Name: ${name} Price: ${price} Created: ${created} <button class="button button-info" name="delete">Delete</button></li>
    `;
    product_list.appendChild(newProduct);
  }

  ResetForm() {
    document.getElementById("product-form").reset();
  }

  DeleteProduct(element) {
    const { name, parentElement } = element;
    if (name === "delete") {
      parentElement.parentElement.remove();
      this.ShowAlert("Deleted Successfully", "info");
    }
  }

  ShowAlert(message, type) {
    let alert = document.createElement("div");
    alert.className = `aler alert-${type}`;
    alert.appendChild(document.createTextNode(message));

    let alertContainer = document.querySelector(".alert-message");
    alertContainer.appendChild(alert);
    setTimeout(() => {
      alertContainer.remove();
    }, 5000);
  }
}

const Name = document.getElementById("name");
const Price = document.getElementById("price");
const Created = document.getElementById("created");

document.getElementById("product-form").addEventListener("submit", () => {
  event.preventDefault();

  const product = new Product(Name.value, Price.value, Created.value);

  const User_Interface = new UI();

  if (Name.value === "" || Price.value === "" || Created.value === "")
    return User_Interface.ShowAlert("All fields are required", "error");

  User_Interface.AddNewProduct(product);
  User_Interface.ResetForm();
  User_Interface.ShowAlert("Created Successfully", "success");
});

document.getElementById("card-list").addEventListener("click", (e) => {
  const User_Interface = new UI();
  User_Interface.DeleteProduct(e.target);
});
