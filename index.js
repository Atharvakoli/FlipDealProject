const express = require('express');
let cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Assignment_1');
});

// Arrays for performing operations
let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 30000,
    ram: 16,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 44000,
    ram: 6,
    rom: 32,
    rating: 3,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 82000,
    ram: 4,
    rom: 256,
    rating: 2.4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 54000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 32000,
    ram: 12,
    rom: 32,
    rating: 3.2,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 67000,
    ram: 12,
    rom: 64,
    rating: 3.7,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 78000,
    ram: 4,
    rom: 512,
    rating: 4.0,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 22000,
    ram: 8,
    rom: 32,
    rating: 4.8,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 15000,
    ram: 4,
    rom: 64,
    rating: 3.9,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 40000,
    ram: 16,
    rom: 512,
    rating: 1.9,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 10000,
    ram: 12,
    rom: 64,
    rating: 2.6,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 33000,
    ram: 32,
    rom: 64,
    rating: 3.1,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 55555,
    ram: 4,
    rom: 64,
    rating: 2.0,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 45554,
    ram: 12,
    rom: 512,
    rating: 4,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 23334,
    ram: 8,
    rom: 64,
    rating: 2.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 56666,
    ram: 16,
    rom: 128,
    rating: 1.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 25200,
    ram: 8,
    rom: 64,
    rating: 1,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 19000,
    ram: 4,
    rom: 64,
    rating: 1.4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 11111,
    ram: 16,
    rom: 256,
    rating: 3.3,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 29522,
    ram: 8,
    rom: 128,
    rating: 4.4,
    os: 'Android',
    camera: 108,
  },
];

// functions
const sortedProductsByPopularity = (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort((a, b) => b.rating - a.rating);
  res.json(productsCopy);
};

const sortedProductsByPriceHighToLow = (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort((a, b) => b.price - a.price);
  res.json(productsCopy);
};

const sortedProductsByPriceLowToHigh = (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort((a, b) => a.price - b.price);
  res.json(productsCopy);
};

const filterByRam = (req, res) => {
  let ram = parseFloat(req.query.ram);
  let filterWithRam = products.filter((product) => product.ram === ram);
  res.json(filterWithRam);
};

const filterByRom = (req, res) => {
  let rom = parseFloat(req.query.rom);
  let filterWithRom = products.filter((product) => product.rom === rom);
  res.json(filterWithRom);
};

const filterByBrand = (req, res) => {
  let brand = req.query.brand;
  let filterByBrand = products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase()
  );
  res.json(filterByBrand);
};

const filterByOs = (req, res) => {
  let os = req.query.os;
  let filterByOs = products.filter(
    (product) => product.os.toLowerCase() === os.toLowerCase()
  );
  res.json(filterByOs);
};

const filterByPrice = (req, res) => {
  let price = parseFloat(req.query.price);
  let filterByPrice = products.filter((products) => products.price <= price);
  res.json(filterByPrice);
};

const SendRemainingProducts = (req, res) => {
  res.json(products);
};

// routes
app.get('/products/sort/popularity', sortedProductsByPopularity);
app.get('/products/sort/price-high-to-low', sortedProductsByPriceHighToLow);

app.get('/products/sort/price-low-to-high', sortedProductsByPriceLowToHigh);

app.get('/products/filter/ram', filterByRam);

app.get('/products/filter/rom', filterByRom);

app.get('/products/filter/brand', filterByBrand);

app.get('/products/filter/os', filterByOs);

app.get('/products/filter/price', filterByPrice);

app.get('/products', SendRemainingProducts);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
