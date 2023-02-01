import {
  AsianFood,
  burger1,
  burger2,
  burger3,
  burger4,
  burger5,
  burgerfood,
  pizza,
  sandwich,
  setMenu,
} from "../assets";

export const navigationLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "Service",
    title: "Service",
  },
  {
    id: "Top cities",
    title: "Top cities",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

export const categoryMenu = [
  {
    id: "Burger",
    title: "Burger",
    category: "burger",
    icon: [burgerfood],
  },
  {
    id: "Pizza",
    title: "Pizza",
    category: "pizza",
    icon: [pizza],
  },
  {
    id: "sandwich",
    title: "sandwich",
    icon: [sandwich],
  },
  {
    id: "Asian Food",
    title: "Asian Food",
    icon: [AsianFood],
  },
  {
    id: "Set Menu",
    title: "Set Menu",
    icon: [setMenu],
  },
];

export const products = [
  {
    id: "1",
    img: [burger1],
    descrption: "Cheeseburger With Salad",
    category: "burger",
    price: "$18.00",
  },
  {
    id: "2",
    img: [burger2],
    category: "burger",
    descrption: "Beef Burger",
    price: "$15.00",
  },
  {
    id: "3",
    img: [burger3],
    descrption: "Royel Cheeseburger",
    category: "burger",
    price: "$16.00",
  },
  {
    id: "4",
    img: [burger4],
    descrption: "Black Gambugrer ",
    category: "burger",
    price: "$14.00",
  },
  {
    id: "5",
    img: [burger5],
    descrption: "Chicken Burger",
    category: "burger",
    price: "$15.00",
  },
  {
    id: "6",
    img: [burger5],
    descrption: "Pizza",
    category: "pizza",
    price: "$00",
  },
];
