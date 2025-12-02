let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item
function addToCart(name, price) {

    // Get the logged-in user
    let user = localStorage.getItem("loginUser");

    // If not logged in → block add-to-cart
    if (!user) {
        alert("Please login first!");
        window.location.href = "login1.html";  // correct login page
        return;
    }

    // If logged in → add to cart
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added!");
}

// Show items in cart
function showCart() {
    let box = document.getElementById("cart-items");
    if (!box) return;

    let total = 0;
    box.innerHTML = "";

    cart.forEach((item, index) => {
        box.innerHTML += `
            <p>
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </p>
        `;
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

// Remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

showCart();
