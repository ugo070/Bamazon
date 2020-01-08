$(document).ready(function() {
  // Getting a reference to the input field where user adds a new product
  var $newItemInput = $("input.new-item");
  // Our new todos will go inside the productContainer
  var $productContainer = $(".product-container");
  // Adding event listeners for purchase,updating, and adding product
  // $(document).on("click", "button.purchase", purchaseProduct);
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", "button.delete", deleteProduct);
  $(document).on("click", ".product-item", editProduct);
  $(document).on("keyup", ".product-item", finishEdit);
  $(document).on("blur", ".product-item", cancelEdit);
  $(document).on("submit", "#product-form", insertProduct);

  // Our initial product array
  var product = [];

  // Getting todos from database when page loads
  getProduct();

  // This function resets the product displayed with new product from the database
  function initializeRows(product) {
    $(".product-container").empty();
    var rowsToAdd = [];
    for (var i = 0; i < product.length; i++) {
      //rowsToAdd.push(createNewRow(product[i]));
      let productrow = `<tr><td>${product[i].id}</td><td>${product[i].product_name}</td><td>${product[i].department_name}</td><td>${product[i].price}</td><td>${product[i].stock_quantity}</td></tr>`;
      $(".product-container").append(productrow);
    }
    console.log(product);
  }

  // This function grabs product from the database and updates the view
  function getProduct() {
    console.log("hit");
    $.get("/api/product", function(data) {
      product = data;
      console.log(product);
      initializeRows(product);
    });
  }

  // This function deletes a product when the user clicks the purchase button
  function deleteProduct(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/product/" + id
    }).then(getProduct);
  }

  // This function handles showing the input box for a user to edit a product
  function editProduct() {
    var currentProduct = $(this).data("product");
    $(this)
      .children()
      .hide();
    $(this)
      .children("input.edit")
      .val(currentProduct.text);
    $(this)
      .children("input.edit")
      .show();
    $(this)
      .children("input.edit")
      .focus();
  }

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var product = $(this)
      .parent()
      .data("product");
    product.complete = !product.complete;
    updateProduct(product);
  }

  // This function starts updating a product in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    var updatedProduct = $(this).data("product");
    if (event.which === 13) {
      updatedProduct.text = $(this)
        .children("input")
        .val()
        .trim();
      $(this).blur();
      updateProduct(updatedProduct);
    }
  }

  // This function updates a product in our database
  function updateProduct(product) {
    $.ajax({
      method: "PUT",
      url: "/api/product",
      data: product
    }).then(getProduct);
  }

  // This function is called whenever a product item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentProduct = $(this).data("product");
    if (currentProduct) {
      $(this)
        .children()
        .hide();
      $(this)
        .children("input.edit")
        .val(currentProduct.text);
      $(this)
        .children("span")
        .show();
      $(this)
        .children("button")
        .show();
    }
  }

  // This function constructs a product-item row
  function createNewRow(product) {
    var $newInputRow = $(
      [
        "<tr>",
        "<li class='list-group-item product-item'>",
        "<span>",
        product.text,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>",
        "</tr>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", product.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("todo", product);
    if (product.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }

  // This function inserts a new product into our database and then updates the view
  function insertProduct(event) {
    event.preventDefault();
    var product = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/product", product, getProduct);
    $newItemInput.val("");
  }
});
