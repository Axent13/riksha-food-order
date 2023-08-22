import drinkImg from 'assets/foodCategoryItems/drink.png';
import pizzaImg from 'assets/foodCategoryItems/pizza.png';
import rolleImg from 'assets/foodCategoryItems/rolle.png';
import setImg from 'assets/foodCategoryItems/set.png';
import sushiImg from 'assets/foodCategoryItems/sushi.png';
import wokImg from 'assets/foodCategoryItems/wok.png';
import snackImg from 'assets/foodCategoryItems/snack.png';

type FoodCategoryInfo = { image: string; text: string; categoryName: string };

export const foodCategoryInfo: FoodCategoryInfo[] = [
  {
    image: pizzaImg,
    text: 'Пицца',
    categoryName: 'pizza',
  },
  {
    image: sushiImg,
    text: 'Суши',
    categoryName: 'sushi',
  },
  {
    image: rolleImg,
    text: 'Роллы',
    categoryName: 'roll',
  },
  {
    image: setImg,
    text: 'Сеты',
    categoryName: 'set',
  },
  {
    image: wokImg,
    text: 'Wok',
    categoryName: 'wok',
  },
  {
    image: drinkImg,
    text: 'Напитки',
    categoryName: 'drink',
  },
  {
    image: snackImg,
    text: 'Закуски',
    categoryName: 'snack',
  },
];
