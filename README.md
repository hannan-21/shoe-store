# Stride - Shoe Store Website

My first website project, made while learning web development from YouTube.

A simple shoe store with a product list, category filters and a working cart.

## What each language does

| Language | File | What it does |
|----------|------|--------------|
| HTML | `index.html` | The structure of the page: header, hero section, filter buttons, product area and cart panel |
| CSS | `style.css` | The looks: colors, fonts, spacing, product grid, cart panel and the mobile layout |
| JavaScript | `script.js` | The logic: shows the shoes, filters by category, adds and removes items from the cart, updates the total |

## Features
- Product cards with a picture, name, type and price
- Filter buttons: All, Running, Casual, Boots
- Add to cart and remove from cart
- Cart total updates automatically
- Works on phones and computers

## Project structure
```
shoe-store/
├── index.html
├── style.css
├── script.js
└── images/       (shoe pictures)
```

## How to run
1. Download or clone this repo.
2. Open `index.html` in your browser.

No installs needed.

## How to add a shoe
Open `script.js` and add a new line to the `shoes` list at the top:

```js
{ id: 7, name: "New Shoe", type: "casual", price: 80, img: "images/new-shoe.jpg" }
```

## What I learned
- How HTML, CSS and JavaScript work together
- Making a layout with CSS grid
- Using JavaScript arrays and events (clicks) to build a cart

## Author
[hannan-21](https://github.com/hannan-21)
