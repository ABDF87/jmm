import { v4 as uuidv4 } from 'uuid';

interface photos {
  id: number;
  renderNum: number;
  title: string;
  src: string;
}

const photos: photos[] = [
  {
    id: 0,
    renderNum: 1,
    title: 'Roasted Chicken',
    src: '/photo/L1010245 PS_photo.jpg',
  },
  {
    id: 0,
    renderNum: 2,
    title: 'Roasted Chicken',
    src: '/photo/roasted-chicken-potatoes_1_i.jpg',
  },
  {
    id: 1,
    renderNum: 2,
    title: 'Saucisson',
    src: '/photo/pizza-cutting_1_i.jpg',
  },
  {
    id: 2,
    renderNum: 1,
    title: 'Saucisson',
    src: '/photo/saucisson_1_i.jpg',
  },

  {
    id: 3,
    renderNum: 2,
    title: 'Tomato',
    src: '/photo/heirloon_tomatoo_1_i.jpg',
  },
  {
    id: 4,
    renderNum: 2,
    title: 'Paprica',
    src: '/photo/bell-pepper_1_i.jpg',
  },
  {
    id: 5,
    renderNum: 1,
    title: 'Mezze',
    src: '/photo/L1000986_PS_edit last.jpg',
  },
  {
    id: 6,
    renderNum: 2,
    title: 'Lox-bagel',
    src: '/photo/lox-bagel_1_i.jpg',
  },
  {
    id: 7,
    renderNum: 2,
    title: 'Soup',
    src: '/photo/soup_1_i.jpg',
  },
  {
    id: 8,
    renderNum: 2,
    title: 'Cornichons',
    src: '/photo/cornichons_1_i.jpg',
  },
  {
    id: 9,
    renderNum: 2,
    title: 'Pate',
    src: '/photo/pate_1_i.jpg',
  },
  {
    id: 110,
    renderNum: 0,
    title: '',
    src: '/photo/heirloon_tomatoo_1_i.jpg',
  },
  {
    id: 10,
    renderNum: 2,
    title: 'Cheesecake strawberries',
    src: '/photo/cheesecake-strawberries_1_i.jpg',
  },
  {
    id: 11,
    renderNum: 2,
    title: 'Parfait',
    src: '/photo/parfait_1_i.jpg',
  },
  {
    id: 12,
    renderNum: 2,
    title: 'Orange cocktail',
    src: '/photo/orange-cocktail_1_i.jpg',
  },
  {
    id: 13,
    renderNum: 2,
    title: 'Strawberries',
    src: '/photo/strawberries_1_i.jpeg',
  },
  {
    id: 14,
    renderNum: 1,
    title: 'Watermelon cantaloupe',
    src: '/photo/watermelon-cantaloupe_1_i.jpeg',
  },
  {
    id: 15,
    renderNum: 2,
    title: 'Fruits',
    src: '/photo/fruits_1_i.jpg',
  },
  {
    id: 116,
    renderNum: 2,
    title: 'Peaches',
    src: '/photo/peaches_1_i.jpg',
  },
  {
    id: 16,
    renderNum: 2,
    title: 'Pomegranate',
    src: '/photo/pomogranate_2_i.jpg',
  },
  {
    id: 17,
    renderNum: 2,
    title: 'Mini fruit tart',
    src: '/photo/mini-fruit-tart_1_i.jpg',
  },
  {
    id: 18,
    renderNum: 2,
    title: 'Bruxelles sprouts',
    src: '/photo/bruxelles-sprouts_1_i.jpg',
  },
  {
    id: 19,
    renderNum: 2,
    title: 'Sardines',
    src: '/photo/sardines_1_i.jpg',
  },
  {
    id: 20,
    renderNum: 1,
    title: 'Clams',
    src: '/photo/clams_1_i.jpg',
  },
  {
    id: 21,
    renderNum: 2,
    title: 'Clams 2',
    src: 'photo/clams_2_i.jpg',
  },
  {
    id: 22,
    renderNum: 2,
    title: 'Clams with linguini',
    src: '/photo/clams_with_linguini_1_i.jpg',
  },
  {
    id: 23,
    renderNum: 1,
    title: 'Hamburger',
    src: '/photo/hamburger_1_i.jpg',
  },
  {
    id: 24,
    renderNum: 3,
    title: 'Macaroni and cheese',
    src: '/photo/macaroni-and-cheese_1_i.jpg',
  },
  {
    id: 25,
    renderNum: 3,
    title: 'Hotdog',
    src: '/photo/hotdog_1_i.jpg',
  },
  {
    id: 26,
    renderNum: 3,
    title: 'Pizza 2',
    src: '/photo/pizza_2_v2_i.jpg',
  },
  {
    id: 27,
    renderNum: 2,
    title: 'Watermelon juice',
    src: '/photo/watermelon-juice_1_i.jpeg',
  },
  {
    id: 29,
    renderNum: 2,
    title: 'Pepper salad',
    src: '/photo/pepper-salad_1_i.jpg',
  },
  {
    id: 30,
    renderNum: 1,
    title: 'Apple',
    src: '/photo/hand-apple_1_i.jpg',
  },
  {
    id: 31,
    renderNum: 2,
    title: 'Figs',
    src: '/photo/Figs_1_i.jpg',
  },
  {
    id: 32,
    renderNum: 2,
    title: 'Mohito',
    src: '/photo/mojito_1_i.jpg',
  },
  {
    id: 33,
    renderNum: 2,
    title: 'Garlic',
    src: '/photo/garlic_1_i.jpg',
  },
  {
    id: 34,
    renderNum: 2,
    title: 'Israely couscous salad',
    src: '/photo/israelu-couscous-salad_1_i.jpg',
  },
  {
    id: 35,
    renderNum: 2,
    title: 'fright eggs',
    src: '/photo/frisee_aux_lardons_1_i.jpg',
  },
  {
    id: 36,
    renderNum: 2,
    title: 'Teriyaki chiken ',
    src: '/photo/teriyaki_chicken_i.jpg',
  },
  {
    id: 37,
    title: 'Asparagus',
    renderNum: 2,
    src: '/photo/asparagus_1_i.jpg',
  },
  {
    id: 38,
    renderNum: 2,
    title: 'Sushi',
    src: '/photo/sushi-veggie_1_i.jpeg',
  },
];

export default photos;
