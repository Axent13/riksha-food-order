const foodCategories = [
  {
    _id: '1',
    name: 'pizza',
    text: 'Пицца',
    iconUrl: 'pizza.png',
  },
  {
    _id: '2',
    name: 'sushi',
    text: 'Суши',
    iconUrl: 'sushi.png',
  },
  {
    _id: '3',
    name: 'rolle',
    text: 'Роллы',
    iconUrl: 'rolles.png',
  },
  {
    _id: '4',
    name: 'set',
    text: 'Сеты',
    iconUrl: 'sets.png',
  },
  {
    _id: '5',
    name: 'wok',
    text: 'Wok',
    iconUrl: 'wok.png',
  },
  {
    _id: '6',
    name: 'soup',
    text: 'Супы',
    iconUrl: 'soup.png',
  },
  {
    _id: '7',
    name: 'salad',
    text: 'Салаты',
    iconUrl: 'salad.png',
  },
  {
    _id: '8',
    name: 'dessert',
    text: 'Десерты',
    iconUrl: 'dessert.png',
  },
  {
    _id: '9',
    name: 'drink',
    text: 'Напитки',
    iconUrl: 'drink.png',
  },
  {
    _id: '10',
    name: 'promo',
    text: 'Акции',
    iconUrl: 'promo.png',
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(foodCategories);
    }, 1000);
  });

export default {
  fetchAll,
};
