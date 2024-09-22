const menu = [
  {
    id: 1,
    title: "moroccan breakfast",
    category: "breakfast",
    img: "moroccan_breakfast.jpg",
    price: 70,
    description:
      "A traditional Moroccan breakfast featuring a variety of fresh breads, olive oil, local cheeses, olives, and seasonal fruits.",
  },
  {
    id: 2,
    title: "french breakfast",
    category: "breakfast",
    img: "french_breakfast.jpg",
    price: 40,
    description:
      "A classic French breakfast with croissants, fresh baguettes, butter, jam, and a selection of cheeses and cold cuts.",
  },
  {
    id: 3,
    title: "american breakfast",
    category: "breakfast",
    img: "american_breakfast.jpg",
    price: 55,
    description:
      "A hearty American breakfast including eggs, bacon, sausage, pancakes, and fresh fruit.",
  },
  {
    id: 4,
    title: "bastilla",
    category: "lunch",
    img: "bastilla.jpg",
    price: 600,
    description:
      "A Moroccan savory pie made with thin pastry layers, spiced chicken, almonds, and a sprinkle of powdered sugar.",
  },
  {
    id: 5,
    title: "couscous",
    category: "lunch",
    img: "couscous.jpg",
    price: 35,
    description:
      "A traditional Moroccan dish of steamed couscous served with a stew of meat and vegetables.",
  },
  {
    id: 6,
    title: "poulet roti",
    category: "lunch",
    img: "poulet_roti.jpg",
    price: 120,
    description:
      "Succulent roasted chicken seasoned with Moroccan spices and served with a side of roasted vegetables.",
  },
  {
    id: 7,
    title: "tjine",
    category: "lunch",
    img: "tajine.jpg",
    price: 80,
    description:
      "A slow-cooked Moroccan stew made with a variety of meats or vegetables and aromatic spices, served in a traditional earthenware pot.",
  },
  {
    id: 8,
    title: "tangia",
    category: "lunch",
    img: "tangia.jpg",
    price: 90,
    description:
      "A traditional Moroccan dish of slow-cooked lamb with spices, olives, and preserved lemons, cooked in a special clay pot.",
  },
  {
    id: 9,
    title: "pizza",
    category: "dinner",
    img: "pizza.jpg",
    price: 45,
    description:
      "Classic pizza with a choice of toppings including cheese, tomato sauce, and various meats or vegetables.",
  },
  {
    id: 10,
    title: "les pattes",
    category: "dinner",
    img: "les_pates.jpg",
    price: 25,
    description:
      "A selection of pasta dishes with different sauces including marinara, Alfredo, and pesto.",
  },
  {
    id: 11,
    title: "godzilla milkshake",
    category: "shakes",
    img: "godzilla_milkshake.jpeg",
    price: 25,
    description:
      "Another option of our pasta dishes with a variety of sauces to choose from, perfect for a satisfying meal.",
  },
  {
    id: 12,
    title: "harira",
    category: "dinner",
    img: "harira.jpg",
    price: 15,
    description:
      "A traditional Moroccan soup made with tomatoes, lentils, chickpeas, and a blend of spices.",
  },
  {
    id: 13,
    title: "quarantine buddy",
    category: "shakes",
    img: "quarantine_buddy.jpeg",
    price: 50,
    description:
      "A creamy and refreshing shake with a blend of exotic fruits and a hint of vanilla.",
  },
  {
    id: 14,
    title: "oreo dream",
    category: "shakes",
    img: "oreo_dream.jpeg",
    price: 40,
    description:
      "A delicious shake made with Oreo cookies blended into a creamy base for a rich, indulgent treat.",
  },
];

const menuContainer = document.querySelector(".menu-container");
const btnsContainer = document.querySelector(".btns-container");

window.addEventListener("DOMContentLoaded", () => {
  showItems(menu);
  displayMenuButtons();
});

function showItems(displayMenu) {
  let menuItems = displayMenu.map((item) => {
    return `<div class="card">
          <img src="${item.img}" alt="pizza" class="card-img" />
          <div class="card-title">
            <h3>${item.title}</h3>
            <button class="price">${item.price} MAD</button>
          </div>
          <p class="description">
            ${item.description}
          </p>
        </div>`;
  });
  menuItems = menuItems.join("");
  menuContainer.innerHTML = menuItems;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );
  //   console.log(categories);
  const btnsCategory = categories
    .map((item) => {
      return `<button type="button" class="filter-btn" data-id='${item}'>${item}</button>`;
    })
    .join("");
  btnsContainer.innerHTML = btnsCategory;
  //   console.log(btnsCategory);
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // console.log(event.currentTarget.dataset);
      const category = event.currentTarget.dataset.id;
      // console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        showItems(menu);
      } else {
        showItems(menuCategory);
      }
    });
  });
}
