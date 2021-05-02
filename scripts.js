const ul = document.body.appendChild(document.createElement('ul'));

const sliderBar = document.querySelector('#sliderBar');

// I assume this is the data you wanted us to use from repl.it
const pricesArr = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7',
  },
];

function renderItems(maxPrice) {
  const pricesArrFiltered = maxPrice
    ? pricesArr.filter(({ price }) => price.slice(1) < maxPrice)
    : pricesArr;

  ul.innerHTML = pricesArrFiltered
    .map(
      ({ name, price }) => `
  <li>
    ${name} - ${price}}
  </li>`,
    )
    .join('');
}

renderItems(pricesArr);

document
  .querySelector('#checkbox')
  .addEventListener('change', ({ target: { checked } }) => {
    let stockArrFiltered = pricesArr.filter(
      product => product.stocked === true,
    );

    if (checked === false) {
      stockArrFiltered = pricesArr;
    }

    renderItems(stockArrFiltered);
  });

document.querySelector('#searchName').addEventListener('keyup', event => {
  const pricesArrSearchName = pricesArr.filter(
    product => product.name.toLowerCase().includes(event.target.value), // used MDN for includes
  );
  renderItems(pricesArrSearchName);
});

sliderBar.addEventListener('input', event => {
  renderItems(pricesArr, Number(event.target.value));
});
