const ul = document.body.appendChild(document.createElement('ul'));

const sliderBar = document.querySelector('#sliderBar');

// I assume this is the data you wanted us to use from repl.it
const pricesArr [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  }
];

function renderItems(items,) {
  ul.innerHTML = items.map(item => `
  <li>
  <>
    id="${item.name}">${item.name} ${item.price}
  </h3>
  </li>`,).join('');
}
