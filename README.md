# 🎮 Tic Tac Toe

A clean, responsive, two-player **Tic Tac Toe** game built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks or libraries required.

---

## 📸 Preview

> A 3×3 grid game where two players take turns placing **O** and **X** symbols. The first player to align three of their marks in a row, column, or diagonal wins!

---

## ✨ Features

- 🔵 **Two-player gameplay** — Player O always goes first, then players alternate
- 🏆 **Win detection** — Checks all 8 winning combinations (3 rows, 3 columns, 2 diagonals)
- 🎉 **Winner announcement** — A congratulations banner appears with a smooth fade-in animation
- 🔄 **New Game button** — Shown after a winner is declared to start fresh
- ♻️ **Reset button** — Always available to restart the board at any time
- 🌙 **Dark theme** — Deep dark gradient background for a sleek, modern look
- ✨ **Smooth animations** — Hover effects, press effects, and fade-in transitions
- 📱 **Responsive design** — Centered layout that works well on all screen sizes

---

## 🗂️ Project Structure

```
Tic-Tac-Toe/
├── index.html   # Game markup and layout
├── style.css    # Styling, dark theme, animations
├── script.js    # Game logic, win detection, event handling
└── README.md    # Project documentation
```

---

## 🚀 Getting Started

No installation needed. Just open the game in your browser!

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/DurgaGanesh05/Tic-Tac-Toe.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd Tic-Tac-Toe
   ```
3. **Open `index.html` in your browser**
   ```bash
   open index.html
   # or double-click index.html in your file explorer
   ```

---

## 🎯 How to Play

1. The game board shows a **3×3 grid** of buttons.
2. **Player O** always takes the first turn.
3. Players alternate clicking empty cells to place their symbol (**O** or **X**).
4. The first player to get **three in a row** — horizontally, vertically, or diagonally — **wins**.
5. When a winner is found, a **congratulations message** is displayed along with a **New Game** button.
6. Click **New Game** to start a fresh game after a winner is declared.
7. Click **Reset** at any time to clear the board and restart.

---

## 🏆 Winning Combinations

The game checks all **8** possible winning patterns:

| Type       | Positions         |
|------------|-------------------|
| Row 1      | 0 · 1 · 2         |
| Row 2      | 3 · 4 · 5         |
| Row 3      | 6 · 7 · 8         |
| Column 1   | 0 · 3 · 6         |
| Column 2   | 1 · 4 · 7         |
| Column 3   | 2 · 5 · 8         |
| Diagonal ↘ | 0 · 4 · 8         |
| Diagonal ↙ | 2 · 4 · 6         |

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5      | Game structure and layout |
| CSS3       | Styling, dark theme, animations |
| JavaScript | Game logic and interactivity |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Author

**Durga Ganesh**  
GitHub: [@DurgaGanesh05](https://github.com/DurgaGanesh05)

