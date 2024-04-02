const express = require("express");

const app = express();
const PORT = process.env.PORT || 4455;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", (req, res) => {
  console.log("/restaurants pinged");
  res.json({ status: 200, msg: "restaurants api backend" });
});

const restaurants = [
  {
    id: 1,
    name: "The Rustic Spoon",
    priceRange: 3,
    reviews: 8,
    foodType: "American",
  },
  {
    id: 2,
    name: "Sushi Haven",
    priceRange: 4,
    reviews: 9,
    foodType: "Japanese",
  },
  {
    id: 3,
    name: "La Trattoria",
    priceRange: 3,
    reviews: 7,
    foodType: "Italian",
  },
  {
    id: 4,
    name: "Taco Tierra",
    priceRange: 2,
    reviews: 8,
    foodType: "Mexican",
  },
  {
    id: 5,
    name: "Spice Village",
    priceRange: 3,
    reviews: 8,
    foodType: "Indian",
  },
  {
    id: 6,
    name: "Café Parisienne",
    priceRange: 4,
    reviews: 7,
    foodType: "French",
  },
  {
    id: 7,
    name: "Golden Chopsticks",
    priceRange: 2,
    reviews: 6,
    foodType: "Chinese",
  },
  {
    id: 8,
    name: "The Grill House",
    priceRange: 5,
    reviews: 9,
    foodType: "Steakhouse",
  },
  {
    id: 9,
    name: "Mama Mia Pizzeria",
    priceRange: 2,
    reviews: 8,
    foodType: "Pizza",
  },
  {
    id: 10,
    name: "Thai Orchid",
    priceRange: 3,
    reviews: 7,
    foodType: "Thai",
  },
  {
    id: 11,
    name: "Sizzling Wok",
    priceRange: 2,
    reviews: 6,
    foodType: "Asian",
  },
  {
    id: 12,
    name: "Burger Bistro",
    priceRange: 2,
    reviews: 9,
    foodType: "Burgers",
  },
  {
    id: 13,
    name: "Mediterranean Delight",
    priceRange: 3,
    reviews: 8,
    foodType: "Mediterranean",
  },
  {
    id: 14,
    name: "Smokehouse BBQ",
    priceRange: 4,
    reviews: 9,
    foodType: "BBQ",
  },
  {
    id: 15,
    name: "Gourmet Fusion",
    priceRange: 5,
    reviews: 8,
    foodType: "Fusion",
  },
];

app.get("/api/v1/restaurants", (req, res) => {
  res.json({ status: 200, restaurants });
});

app.get("/api/v1/restaurants/:id", (req, res) => {
  let foundRestaurant = restaurants.find((u) => u.id == req.params.id);
  if (!foundRestaurant)
    return res.json({ status: 404, msg: "Restaurant couldn't be found" });
  res.json({ status: 200, user: foundRestaurant });
});

app.use((req, res, next) => {
  res.redirect("/");
  next();
});

app.listen(PORT, console.log(`Listening in on port ${PORT}`));
