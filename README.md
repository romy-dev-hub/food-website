# PixelSpark Food Website 🍔

A modern, responsive food website built with HTML, CSS, and JavaScript featuring delicious food displays, menu carousel, testimonials, and contact form.

## Features ✨

- **Mobile-First Design**: Fully responsive across all devices
- **Interactive Elements**:
  - Smooth navigation with active link highlighting
  - Add-to-cart animations
  - Form validation
- **Modern UI Components**:
  - Hero section with floating food image
  - Swiper.js powered menu carousel
  - Testimonial section
  - Newsletter subscription
- **Performance Optimized**:
  - Lazy loading images
  - Efficient CSS animations
  - Clean JavaScript

## Technologies Used 💻

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![FontAwesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)

## Installation & Setup 🛠️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/romy-dev-hub/food-website.git
   cd food-website
   ```
2. **Open in browser**:
  - Simply open index.html in your preferred browser
  - Or use Live Server extension in VS Code
3. **Development**:
  - Edit HTML, CSS, or JavaScript files as needed
  - All source files are in the root directory

## Project Structure 📂
food-website/
├── index.html          # Main HTML file

├── style.css           # All CSS styles

├── script.js           # All JavaScript functionality

├── pics/               # Image assets

│   ├── hero cover.jpg

│   ├── hero pic.png

│   ├── about us.jpg

│   ├── card 1.jpg

│   ├── card 2.jpg

│   ├── card 3.jpg

│   ├── costumer img.jpg

│   └── costumers say.jpg

└── README.md           # This file

## Customization 🎨

### Colors
Modify the CSS variables in :root to change the color scheme:
```bach
:root {
    --primary-color: #ff6b00; /* Main brand color */
    --primary-light: #ff8c33;
    --primary-dark: #e55a00;
    --background: #fff4ed;
    --text-color: #333;
    --text-light: #777;
    --white: #ffffff;
}
```

### Content
  - Update food items in the menu carousel (HTML)
  - Change testimonial content in the testimonials section
  - Modify contact information in the footer


## Responsive Breakpoints 📱

 Device     |	Breakpoint
------------------------
Mobile	    |    < 768px
------------------------
Tablet	    |    768-992px
------------------------
Desktop   	|    > 992px

## Known Issues & Solutions ⚠️

### Carousel not displaying on mobile:
  - Ensure Swiper JS is properly initialized
  - Check CSS overflow properties
### Email button display issues:
  - Verify the button has proper padding and background color
  - Check z-index if overlapping occurs
### Layout shifts on load:
  - Ensure all images have defined dimensions
  - Use proper lazy loading attributes


## Contributing 🤝

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License 📄
This project is licensed under the MIT License - see the LICENSE file for details.

### Enjoy the delicious experience! 🍕🍣🍔