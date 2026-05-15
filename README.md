# 🎮 Game Vault

Game Vault is a modern gaming catalog web application inspired by digital stores such as PlayStation Store and Steam.  
The project showcases a collection of legendary and modern video games using dynamic Bootstrap cards loaded from a JSON database.

The website was built as a final front-end project focused on visual design, JavaScript logic, responsive layouts, and JSON Server integration.

---

# 🚀 Features

## 🎨 Modern UI Design
- Custom dark gaming aesthetic
- Responsive layout using Bootstrap
- Neon gradients and glowing hover effects
- Fully customized cards
- Hero section with gaming background
- Custom logo and favicon

---

## 🃏 Dynamic Game Cards
- Games are loaded dynamically from `db.json`
- Cards are rendered using JavaScript and `fetch`
- Each card includes:
  - Game image
  - Title
  - Genre
  - Year
  - Rating
  - Price
  - Short description

---

## 📂 Genre Filters
Users can filter games dynamically by genre:
- All
- RPG
- Adventure
- Shooter
- Sports
- Racing
- Horror

The active category is highlighted visually.

---

## 🛒 Shopping Cart System
A fully interactive shopping cart inspired by PS Store:
- Add games to cart
- Remove games from cart
- Dynamic total price calculation
- Cart modal window
- Purchase simulation button
- Animated notification when adding games

---

## 📖 Game Details Modal
Clicking a game card opens a detailed modal containing:
- Large cover image
- Full long description
- Genre
- Release year
- Rating

---

## ✨ Extra Features
- Hover animations
- Smooth transitions
- Notification popups
- Responsive design for mobile and desktop
- Custom gaming gradients
- Cloudinary hosted images

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- JSON Server
- Cloudinary

---

# 📡 JSON Server Setup

Install JSON Server:

```bash
npm install -g json-server
```

Run the server:

```bash
npx json-server --watch db.json
```

The API will run on:

```bash
http://localhost:3000/games
```

---

# ▶️ Run The Project

1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY
```

2. Open the project folder

3. Start JSON Server

```bash
npx json-server --watch db.json
```

4. Open the project using Live Server or localhost

---

# 📁 Project Structure

```bash
project-folder/
│
├── index.html
├── style.css
├── main.js
├── db.json
```

---

# 🎮 Included Games

The catalog contains modern and legendary games from multiple genres:
- RPG
- Adventure
- Shooter
- Sports
- Racing
- Horror

Examples:
- The Witcher 3
- Red Dead Redemption 2
- Elden Ring
- FC 26
- Resident Evil 4 Remake
- Call of Duty Modern Warfare III
- Forza Horizon 5
- EA Sports FC 26
- Alan Wake 2
- Gran Turismo 7

and many more.

---

# 🌐 Deployment

The project is designed to be deployed using:
- GitHub
- Vercel

---

# 🎯 Learning Goals

This project focuses on:
- DOM manipulation
- Async/Await
- Fetch API
- Dynamic rendering
- JSON handling
- Responsive design
- Component customization
- Front-end architecture

---

# 🔮 Future Improvements

The project could continue evolving with more advanced features such as:

## 🧠 Advanced Search System
- Search bar by title
- Search by studio or release year
- Instant live filtering

---

## ❤️ Wishlist System
- Add favorite games
- Save favorites using Local Storage
- Personal wishlist section

---

## 🛒 Enhanced Shopping Cart
- Increase/decrease game quantities
- Persistent cart using Local Storage
- Real checkout simulation
- Purchase history

---

## 🌙 Dark / Light Mode
- Alternative visual themes
- User customizable appearance
- Smooth theme transitions

---

## 👤 User Profiles
- Login system
- Personalized library
- Recently viewed games

---

## 📊 Advanced Filters
- Filter by rating
- Filter by price range
- Sort alphabetically
- Sort by popularity

---

## 🎞 UI / UX Improvements
- Animated loading screens
- Skeleton loaders
- Card entrance animations
- Better mobile gestures
- Improved accessibility

---

## 🌐 Backend Integration
Future versions could replace JSON Server with:
- Firebase
- Node.js + Express
- MongoDB
- Real APIs

---

## 🎮 More Gaming Features
- Trailers inside modal windows
- Embedded gameplay videos
- User reviews and comments
- Recommended games system

---

# 💡 Possible Ideas

Some ideas considered during development:
- Steam inspired library mode
- PlayStation Store style checkout
- Achievement system
- Recently added section
- Top rated games section
- Trending games carousel

---

# 🧪 Challenges During Development

Some of the main challenges solved during the project:
- Dynamic rendering with JavaScript
- JSON integration
- Responsive Bootstrap customization
- Cart logic implementation
- Modal synchronization
- UI consistency and color palette design

---

# 👨‍💻 Author

Developed by [Daniel Chaves Domínguez]

Final Front-End Project — 2026