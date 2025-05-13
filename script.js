const products = [
  { name: "BLK Airy Matte Lipstick", price: 399, image: "https://blkcosmetics.com.ph/cdn/shop/files/airy-matte-tint-websiPNGite-thumbnail-Artboard-1_900x.png?v=1716198729" },
  { name: "Issy & Co. Hydragloss", price: 349, image: "https://medias.lookatme.com.ph/publishing/LOOKPH-70081268-front-zoom.jpg?version=1728389909" },
  { name: "GRWM Radiance Tint", price: 499, image: "https://grwmcosmetics.com.ph/cdn/shop/files/Birthday_Sale_-_Straight_Discount-13_a346a77f-4973-4641-b3eb-8790e66f336e.jpg?v=1747060355&width=533" },
  { name: "Charlotte Tilbury Magic Cream", price: 4590, image: "https://images.ctfassets.net/wlke2cbybljx/4ZisBTrjGvb866CEUQZ7WU/acf26ca931c80bd0454e66ab83f70ff2/Magic_Cream_Dims.png?q=80&w=660&h=660&fit=fill&bg=&fm=webp" },
  { name: "BLK Skin Tint SPF 30", price: 499, image: "https://blkcosmetics.com.ph/cdn/shop/files/silk_900x.png?v=1723794168" },
  { name: "Issy & Co. Active Concealer", price: 399, image: "https://shopcosy.com.au/cdn/shop/files/ph-11134207-7r98w-lmqumn0idoy7a5.webp?crop=center&height=1024&v=1727165181&width=1024" },
  { name: "GRWM Milk Tint", price: 349, image: "https://grwmcosmetics.com.ph/cdn/shop/files/Thumbnail_MilkTint.png?v=1747060506&width=1946" },
  { name: "Charlotte Tilbury Airbrush Flawless Foundation", price: 2990, image: "https://images.ctfassets.net/wlke2cbybljx/4EJHxYaCDln4AJIeorJfnn/03a6142a9573ba084fe5bbb8ece733ee/AIRBRUSH-FLAWLESS-FOUNDATION-3-COOL-CLOSED.png?q=80&w=660&h=660&fit=fill&bg=&fm=webp" },
  { name: "BLK Cream Blush", price: 399, image: "https://blkcosmetics.com.ph/cdn/shop/files/PeachCloud.png?v=1729161242" },
  { name: "Issy & Co. Brow Pencil", price: 249, image: "https://medias.lookatme.com.ph/publishing/LOOKPH-70080310-front-zoom.jpg?version=1728393629" },
  { name: "GRWM  Life-Proof Fixing Spray - Matte Finish", price: 499, image: "https://down-ph.img.susercontent.com/file/ph-11134207-7r990-llvyy529v94h46.webp" },
  { name: "Charlotte Tilbury Pillow Talk Lipstick", price: 1950, image: "https://images.ctfassets.net/wlke2cbybljx/6QLItVWaR3INrE5B8MMObK/c3f10ac5c6c17a5d67f8fc074432e564/MATTEREV-PT-LEGENDARY-PDP__2_.png?q=80&w=660&h=660&fit=fill&bg=&fm=webp" },
  { name: "BLK Brow Stick", price: 299, image: "https://blkcosmetics.com.ph/cdn/shop/files/BrowSculptingPencilDuo_NaturalBrown_f1eb7405-701c-4a1e-8126-70eaac9d7038_900x.png?v=1691670903" },
  { name: "Issy & Co. Lip Mousse", price: 399, image: "https://api.lookatme.com.ph/medias/zoom-front-70099210.jpg?context=bWFzdGVyfGxvb2twaC9pbWFnZXN8MzMxNzJ8aW1hZ2UvanBlZ3xhRFk0TDJoak5DOHhOalU1Tnpnek1UUTFNRFkxTkM5NmIyOXRYMlp5YjI1MExUY3dNRGs1TWpFd0xtcHdad3w3ZDVkYTFlNjVhMjYxMzI1YTczMTJmMmM1ZDNlOWU2MzgzYjY3NTQ4MTRkNmMyNTNjMjc0MmMwYzc5YzUxOTA2" },
  { name: "GRWM Powder Rush", price: 399, image: "https://grwmcosmetics.com.ph/cdn/shop/files/Ecomm-PRLooseBaking_SettingPowder-01.jpg?v=1734482446&width=1946" },
  { name: "Charlotte Tilbury Highlighter Wand", price: 2590, image: "https://images.ctfassets.net/wlke2cbybljx/6usdoH8aUCwNz7KVhsubHt/7a1e6fa09cb5421c3a96e0fe79ba56f7/HOLLYWOOD-BEAUTY-LIGHT-WAND---PACKSHO---CLOSED.png?q=80&w=660&h=660&fit=fill&bg=&fm=webp" },
  { name: "BLK Daydream Tints", price: 449, image: "https://blkcosmetics.com.ph/cdn/shop/files/airy-matte-tint-websiPNGite-thumbnail-Artboard-1-copy_900x.png?v=1716198729" },
  { name: "Issy & Co. Creme Blush", price: 399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsWclttZuqrmSasyo1mDu_CjOBRxbk-NCqQ&s" },
  { name: "GRWM Makeup Prep Squad Primer", price: 599, image: "https://down-ph.img.susercontent.com/file/ph-11134207-7rasc-m8fos348blgh1f.webp" },
  { name: "Charlotte Tilbury Lip Cheat Pencil", price: 1390, image: "https://images.ctfassets.net/wlke2cbybljx/3LQtmbLK0C7OFFvHHtzAB4/489ee40d53f423b3bd07a8b5069e8f2d/039_220100_PILLOW_TALK_PLUMP_P_LIP_CHEAT_PT_MEDIUM_CLOSED_RJ_2402.jpg?q=80&w=660&h=660&fit=fill&bg=&fm=webp" }
];

const productSection = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const custOrder = document.getElementById("cust_order");

let cart = [];

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Php ${item.price}`;
    const removeBtn = document.createElement("span");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove");
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
  custOrder.value = JSON.stringify(cart);
}

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <h2>${product.name}</h2>
    <p>Php ${product.price}</p>
    <button>Add to cart</button>
  `;
  const btn = div.querySelector("button");
  btn.onclick = () => {
    cart.push({ name: product.name, price: product.price });
    updateCart();
  };
  productSection.appendChild(div);
});
