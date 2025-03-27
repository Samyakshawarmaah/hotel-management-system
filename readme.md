# Hotel Management System

A **MERN stack** hotel booking platform where users can book rooms, manage reservations, and process secure payments using **Stripe**. The system includes authentication, user profiles, and an admin dashboard for managing bookings and rooms.

## Features
- **User Authentication:** Secure login and registration system.
- **Room Booking:** Users can browse available rooms and make reservations.
- **Payments:** Integrated with **Stripe** for secure online transactions.
- **Admin Dashboard:** Manage rooms, bookings, and users.
- **Real-time Availability:** Displays available rooms dynamically.
- **Responsive UI:** Built with React.js and Bootstrap for a smooth user experience.

## Tech Stack
- **Frontend:** React.js, Redux, Bootstrap, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payments:** Stripe API

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** & **npm**
- **MongoDB** (Local or Cloud Database)

### Clone Repository
```sh
git clone https://github.com/Samyakshawarmaah/hotel-management-system
cd hotel-management-system
```

### Backend Setup
```sh
cd server
npm install
npm start
```

### Frontend Setup
```sh
cd client
npm install
npm start
```

### Environment Variables
Create a **.env** file in the `server/` directory and add:
```
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
```

## Usage
- Users can register/login and book available rooms.
- Payments are securely processed via Stripe.
- Admins can manage rooms and bookings via the dashboard.

## License
This project is licensed under the MIT License.

---

