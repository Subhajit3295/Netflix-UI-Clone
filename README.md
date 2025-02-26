
# Netflix UI Clone

This project is a functional and interactive Netflix-like web page that closely resembles a given user interface while fetching and displaying data from an API.

## 🚀 Features
- Responsive UI similar to Netflix
- Dynamic content fetched from an API
- Interactive Swiper-based carousel
- Navigation menu with an off-canvas sidebar
- Play interface on hover
- Styled with Bootstrap and custom CSS

## 📁 Project Structure
```
📂 netflix-clone
├── 📄 index.html         # Main HTML file
├── 📄 style.css         # Styling for the webpage
├── 📄 script.js         # JavaScript for fetching and rendering data
├── 📄 README.md         # Project documentation

```

## 📌 Technologies Used
- **HTML5**
- **CSS3** (Bootstrap 5, custom styles)
- **JavaScript (ES6)**
- **Swiper.js** (Carousel implementation)
- **Boxicons** (Icon library)

## 🔗 API Usage
The web page fetches data from the following API endpoint:
```
https://repo-tech2edge.github.io/tasks/sample.json
```
### API Response Example
```json
"characters": [
  {
      "id": 1,
      "name": "Sartaj Singh",
      "age": 35,
      "profession": "Inspector",
      "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/sartaj-singh.jpg"
  }
],
{
  "series": {
    "title": "Sacred Games",
    "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/sacred-games-netflix.jpg"
  },
  "episodes": [
    {
      "id": 1,
      "title": "Aswatthama",
      "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/1.jpg"
    },
    {
      "id": 2,
      "title": "Halahala",
      "img": "https://repo-tech2edge.github.io/tasks/assets/images/sacred-games/episodes/1.jpg"
    }
  ]
}
```

## ⚙️ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Subhajit3295/Netflix-UI-Clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd netflix-clone
   ```
3. Open `index.html` in your browser.

## 📜 Implementation Details
- The **hero section** dynamically updates the main image and series title from the API.
- The **episode slider** dynamically displays episodes with an image and episode number.
- The **Swiper.js library** enables horizontal scrolling of episodes.
- A **navigation menu** provides easy access to different sections.
- **CSS animations** improve user experience.

## 🛠 Future Enhancements
- Add video player functionality.
- Implement a real-time search bar.
- Improve accessibility and SEO optimization.
- Implement user authentication for personalized recommendations.

## 🤝 Contributing
Feel free to fork this repository and contribute by submitting a pull request. 😊


---
### 👨‍💻 Author
**Subhajit Modnal**  
[GitHub](https://github.com/Subhajit3295) | [LinkedIn](https://www.linkedin.com/in/subhajit-mondal-7a23562b1/)

