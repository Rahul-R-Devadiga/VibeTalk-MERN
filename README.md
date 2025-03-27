# VibeTalk

VibeTalk is a real-time chat application built using the MERN stack. It enables seamless communication through text and images with real-time updates powered by Socket.io. Designed for efficiency and scalability, VibeTalk is an ideal project for recruiters and clients looking for a well-structured, full-stack web application.

## Features
- **User Authentication**: Secure login and signup using JWT.
- **Real-time Messaging**: Instant message delivery with Socket.io.
- **Profile Management**: Update profile picture via Cloudinary.
- **Security Measures**: HTTP-only cookies, CSRF protection, and password hashing.
- **Online/Offline Status**: Track user availability in real time.
- **Responsive UI**: Built with Tailwind CSS and Daisy UI for a modern look.

## Tech Stack
### Frontend:
- React
- Tailwind CSS
- Daisy UI
- Zustand (State Management)
- Axios
- Socket.io-client

### Backend:
- Node.js
- Express.js
- MongoDB
- Cloudinary (For profile picture storage)
- JWT Authentication
- Bcrypt.js (For password hashing)
- Cookie-parser (For secure cookies)
- Socket.io (For real-time messaging)

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB setup (local or Atlas)

### Clone Repository
```bash
git clone https://github.com/your-repo/vibetalk.git
cd vibetalk
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Modify `.env` file in `backend`:
```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
CLOUDINARY_URL=your_cloudinary_url
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints
### Authentication
- **POST** `/api/auth/signup` - Register a new user.
- **POST** `/api/auth/login` - Authenticate user and issue token.
- **GET** `/api/auth/logout` - Logout user.
- **GET** `/api/auth/checkAuth` - Check authentication status.

### Messages
- **POST** `/api/messages/send` - Send a new message.
- **GET** `/api/messages/:id` - Get chat history with a user.

## Real-Time Features (Socket.io)
- Users can see who is online.
- Messages are delivered instantly.
- Users receive real-time notifications.

## Deployment
VibeTalk is fully deployed on Render.
[Live Link](https://vibetalk-mern.onrender.com/)

## Why Choose VibeTalk?
- **Scalable & Secure**: Designed with best practices for security and performance.
- **Modern UI/UX**: Built with Tailwind CSS and Daisy UI for a clean and responsive experience.
- **Real-time Communication**: Uses WebSockets for instant message delivery.
- **Full-Stack Implementation**: A showcase of a complete MERN stack application.

## Contact
If you are a recruiter or client interested in this project, feel free to reach out via:
- Email: devadigarahul06@gmail.com
- [LinkedIn](https://www.linkedin.com/in/rahul-r-devadiga/)
- [GitHub](https://github.com/Rahul-R-Devadiga)

---

Thank you for reviewing VibeTalk! Looking forward to potential collaborations.
