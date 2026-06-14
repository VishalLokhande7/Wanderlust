# WanderLust 

A full-stack travel accommodation booking platform inspired by Airbnb. Users can browse listings, create their own listings, upload images, write reviews, and manage their accounts securely.

## 🚀 Features

* User Authentication & Authorization
* Create, Edit, and Delete Listings
* Upload Listing Images
* Interactive Maps with Mapbox
* Review and Rating System
* Flash Messages and Error Handling
* Session Management with MongoDB Store
* Responsive UI using Bootstrap
* Secure Authentication using Passport.js

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap
* EJS Templates

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* Passport.js
* Passport Local Strategy

### Cloud Services

* Cloudinary (Image Storage)
* Mapbox (Location & Maps)

### Deployment

* Render

---

## 📂 Project Structure

```text
wanderlust/
│
├── models/
├── routes/
├── controllers/
├── middleware/
├── utils/
├── views/
├── public/
├── app.js
├── package.json
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret

MAP_TOKEN=your_mapbox_token

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Run the Project

```bash
node app.js
```

or

```bash
nodemon app.js
```

---

## 🌐 Live Demo

Add your deployed Render URL here:

```text
https://wanderlust-89gl.onrender.com
```

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Listing Details Page
* Create Listing Page
* Login / Signup Page
* Review Section

---

## 🔒 Authentication Features

* User Registration
* User Login
* User Logout
* Session-Based Authentication
* Protected Routes
* Authorization Checks

---

## 📍 Maps & Location

Mapbox is integrated to provide location visualization for listings.

---

## ☁️ Image Uploads

Cloudinary is used for storing and managing listing images.

---

## 📈 Future Improvements

* Wishlist Functionality
* Booking System
* Payment Gateway Integration
* Search and Filter Enhancements
* User Profile Dashboard

---

## 👨‍💻 Author

Vishal Lokhande

B.Tech Student | Full Stack Developer | DSA Enthusiast

---

## 📜 License

This project is developed for learning and educational purposes.
