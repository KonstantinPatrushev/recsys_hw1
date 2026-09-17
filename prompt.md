## Q: Write the code for the random lunch menu recsys as a single `index.html` (HTML + CSS + JS inline) that I will publish on GitHub Pages.

Requirements:

1. A "Generate Lunch!" button picks a random item from a `lunchMenu` array with
   `Math.floor(Math.random() * lunchMenu.length)` and shows its name and icon.
2. Each item is written as `{ name: "Pizza", icon: "fas fa-pizza-slice" }`.
3. Icons: load exactly **Font Awesome Free 6.4.0** from
   `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`.
   Choose every icon **only** from this list of class names, verified to exist in
   Font Awesome Free 6.4.0 Solid. Do not use any name outside it, even if you believe it exists:

   `fa-pizza-slice, fa-fish, fa-burger, fa-hotdog, fa-leaf, fa-carrot, fa-apple-whole, fa-lemon,
   fa-pepper-hot, fa-bowl-food, fa-bowl-rice, fa-plate-wheat, fa-bread-slice, fa-cheese, fa-egg,
   fa-drumstick-bite, fa-bacon, fa-shrimp, fa-fire, fa-fire-burner, fa-mug-hot, fa-utensils,
   fa-spoon, fa-cookie, fa-ice-cream, fa-stroopwafel`

   Icons outside this list (many food icons are Pro-only, e.g. `fa-bowl-hot`, `fa-sandwich`,
   `fa-salad`, or do not exist at all, e.g. `fa-pasta`, `fa-bowl`) render as an empty box.
4. The menu contains: Pizza, Sushi, Burger, Salad, Tacos, Ramen, Sandwich, Pasta, Curry, Steak, Soup, BBQ.
5. No other external dependencies, no build step.

After receiving the code, run `tests/run_icon_check.sh index.html`: it must report `broken_count: 0`.
