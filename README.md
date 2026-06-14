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

* Home Page :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d38ccf69-4eb6-46f0-acfd-fbc9d70e8091" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/399a7caa-0353-4acb-91e0-0be503526ce0" />


* Listing Details Page :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0d778715-2094-4b9e-accf-57fd595bdbd7" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/de22dcef-b4a7-489a-8b31-fd8341ca4aeb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e4fc9bad-8ede-4b83-8563-9c9161e20ed0" />



* Create Listing Page :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ac7f0f95-ecbf-472f-8a74-cb1bba208615" />

* Login / Signup Page :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1921d629-91f0-4f4d-a502-bb8a983e1553" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/aafcce22-ed20-435e-b1d3-4fc68a2ebcbb" />


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
