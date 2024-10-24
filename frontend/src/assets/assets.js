import forever from "./forever.png";
import search_icon from "./search-icon.webp";
import profile_icon from "./profile-icon.webp";
import cart_icon from "./cart-icon.webp";
import menu_icon from "./menu-icon.webp";
import back_icon from "./back-icon.webp";
import hero_pic from "./hero-pic.jpg";
import round_neck from "./round-neck.webp";
import men_slim_jean from './slim-jean.webp'
import women_floral_skirt from './women-floral-skirt.webp'
import cartoon_tshirt from "./cartoon_tshirt.webp"
import polo_tshirt from './polo_tshirt.webp'
import denim_shorts from './denim_shorts.webp'
import maxi_dress from './maxi_dress.webp'
import leatherjacket from './leatherjacket.webp'
import high_waist_jean from './high_waist_jean.webp'
import casual_tshirt from './casual_tshirt.webp'


export const assets = {
  forever,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  back_icon,
  hero_pic,
};

export const products = [
  {
    _id: "01",
    bestseller: true,
    category: "women",
    date: "2024-05-01",
    name: "Women Round Neck T-shirt",
    price: "1200",
    image: round_neck,
    sizes: ["M", "S", "L", "XL"],
    subcategory: "TopWear",
  },
  {
    _id: "02",
    bestseller: false,
    category: "men",
    date: "2024-06-12",
    name: "Men Slim Fit Jeans",
    price: "1800",
    image: men_slim_jean,
    sizes: ["M", "L", "XL"],
    subcategory: "BottomWear",
  },
  {
    _id: "03",
    bestseller: true,
    category: "women",
    date: "2024-04-18",
    name: "Women Floral Skirt",
    price: "1500",
    image: women_floral_skirt,
    sizes: ["S", "M", "L"],
    subcategory: "BottomWear",
  },
  {
    _id: "04",
    bestseller: false,
    category: "kids",
    date: "2024-03-20",
    name: "Kids Cartoon T-shirt",
    price: "700",
    image: cartoon_tshirt,
    sizes: ["S", "M"],
    subcategory: "TopWear",
  },
  {
    _id: "05",
    bestseller: true,
    category: "men",
    date: "2024-07-15",
    name: "Men Classic Polo Shirt",
    price: "1400",
    image: polo_tshirt,
    sizes: ["L", "XL", "XXL"],
    subcategory: "TopWear",
  },
  {
    _id: "06",
    bestseller: false,
    category: "women",
    date: "2024-08-02",
    name: "Women Maxi Dress",
    image: maxi_dress,
    price: "2000",
    sizes: ["M", "S", "L"],
    subcategory: "Dresses",
  },
  {
    _id: "07",
    bestseller: true,
    category: "kids",
    date: "2024-09-05",
    name: "Kids Denim Shorts",
    price: "800",
    image: denim_shorts,
    sizes: ["S", "M", "L"],
    subcategory: "BottomWear",
  },
  {
    _id: "08",
    bestseller: false,
    category: "men",
    date: "2024-02-11",
    name: "Men Leather Jacket",
    price: "3500",
    image: leatherjacket,
    sizes: ["M", "L", "XL"],
    subcategory: "Outerwear",
  },
  {
    _id: "09",
    bestseller: true,
    category: "women",
    date: "2024-10-15",
    name: "Women High Waist Jeans",
    price: "1700",
    image: high_waist_jean,
    sizes: ["S", "M", "L", "XL"],
    subcategory: "BottomWear",
  },
  {
    _id: "10",
    bestseller: true,
    category: "men",
    date: "2024-09-25",
    name: "Men Striped Casual T-shirt",
    price: "1300",
    image: casual_tshirt,
    sizes: ["M", "L", "XL"],
    subcategory: "TopWear",
  },
  {
    _id: "11",
    bestseller: false,
    category: "women",
    date: "2024-01-29",
    name: "Women Blazer",
    price: "2500",
    sizes: ["S", "M", "L"],
    subcategory: "Outerwear",
  },
  {
    _id: "12",
    bestseller: false,
    category: "men",
    date: "2024-07-10",
    name: "Men Chino Pants",
    price: "1600",
    sizes: ["M", "L", "XL", "XXL"],
    subcategory: "BottomWear",
  },
  {
    _id: "13",
    bestseller: true,
    category: "women",
    date: "2024-03-22",
    name: "Women Sports Leggings",
    price: "900",
    sizes: ["S", "M", "L"],
    subcategory: "ActiveWear",
  },
  {
    _id: "14",
    bestseller: true,
    category: "kids",
    date: "2024-04-09",
    name: "Kids Hoodie",
    price: "1100",
    sizes: ["S", "M", "L"],
    subcategory: "Outerwear",
  },
  {
    _id: "15",
    bestseller: false,
    category: "men",
    date: "2024-08-14",
    name: "Men Graphic T-shirt",
    price: "900",
    sizes: ["M", "L", "XL"],
    subcategory: "TopWear",
  },
  {
    _id: "16",
    bestseller: true,
    category: "women",
    date: "2024-06-18",
    name: "Women Crop Top",
    price: "800",
    sizes: ["S", "M", "L"],
    subcategory: "TopWear",
  },
  {
    _id: "17",
    bestseller: true,
    category: "kids",
    date: "2024-07-02",
    name: "Kids Joggers",
    price: "950",
    sizes: ["S", "M"],
    subcategory: "BottomWear",
  },
  {
    _id: "18",
    bestseller: false,
    category: "men",
    date: "2024-11-05",
    name: "Men Formal Trousers",
    price: "2000",
    sizes: ["M", "L", "XL", "XXL"],
    subcategory: "BottomWear",
  },
  {
    _id: "19",
    bestseller: true,
    category: "women",
    date: "2024-05-28",
    name: "Women Ankle Boots",
    price: "3000",
    sizes: ["36", "37", "38", "39"],
    subcategory: "Footwear",
  },
  {
    _id: "20",
    bestseller: false,
    category: "men",
    date: "2024-04-14",
    name: "Men Hooded Sweatshirt",
    price: "1500",
    sizes: ["M", "L", "XL"],
    subcategory: "Outerwear",
  },
];
