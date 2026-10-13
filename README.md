# Prince Pandey - Portfolio

A premium, production-ready developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS (v3.4) + Custom CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Form Handling:** EmailJS (placeholder integration)
- **Deployment:** Ready for Vercel

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run locally:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🌍 Deployment on Vercel

This project is optimized for deployment on Vercel.

1.  Push your code to a GitHub repository.
2.  Log in to [Vercel](https://vercel.com/).
3.  Click "New Project".
4.  Import your GitHub repository.
5.  Vercel will automatically detect the Vite framework and configure the build settings.
6.  Click **Deploy**.

## 📧 Email Configuration

To make the contact form fully functional:

1.  Sign up for [EmailJS](https://www.emailjs.com/).
2.  Create a Service and a Template.
3.  Update the `Contact.jsx` file with your Public Key, Service ID, and Template ID.

```javascript
// src/components/Contact.jsx
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
```

## 🎨 Design Philosophy

- **Theme:** Premium Dark Mode (Black / Deep Navy)
- **Typography:** Inter (Google Fonts)
- **Effects:** Glassmorphism, Smooth Gradients, Hover Animations

---

© 2024 Prince Pandey. All rights reserved.
