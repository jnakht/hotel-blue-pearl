# 🌟 Hotel Blue Pearl

A fully responsive and dynamic real estate-themed hotel website built with modern web technologies. **Hotel Blue Pearl** allows users to explore luxurious estates, register or log in with Firebase Authentication, and manage their profile—all wrapped in a smooth user experience and stylish UI.

🌐 **Live Site:** https://hotel-blue-pearl.web.app/

---

## 🔥 Features

- ✅ Fully responsive across **mobile**, **tablet**, and **desktop**
- 🔐 **Firebase Authentication** with Email/Password, Google
- 🏠 Dynamic **Estate Listings** from JSON data with protected detail routes
- 📝 **User Profile Update** with real-time updates using `updateProfile()` from Firebase
- ⚙️ Protected routing with persistent user state via `onAuthStateChanged`
- 🌈 Stylish animations with **AOS** and **Swiper Slider**
- 👁️ Toggle show/hide password field in registration form
- 🧭 Dynamic page titles and a fully functional 404 page

---

## 🧩 Technologies & Tools Used

- React.js
- React Router DOM
- Tailwind CSS + DaisyUI
- Firebase (Auth + Hosting)
- AOS (Animate On Scroll)
- Swiper.js
- React Hook Form

📦 **npm Packages Used:**
- `aos`
- `swiper`
- `react-hook-form`

---

## 🛡 Protected Routes

- 🔒 Estate Details Page: Requires login to view full detailed info
- 🔒 Profile Update Page: View & edit user data (name, photo)

If not logged in, users are redirected to the login page with state preserved after login.

---


## 💼 Firebase Configuration

All Firebase config keys are stored securely using **environment variables** to prevent key exposure in public repos.

---

## 🧪 Data Handling

- Images hosted via **ImgBB**
- Each estate includes: image, title, location, price, area, facilities, and status (rent/sale)

---

## 💬 Feedback & Contributions

Feel free to fork, star, or raise issues for improvements. This project was developed as part of a frontend challenge and showcases both functionality and design excellence.

---

> 🚀 Designed & Developed with passion for the Web 🌍
