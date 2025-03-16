# Setting Up the Project

Follow these steps to set up the project on your local machine.

## 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-folder>
```

## 2. Install Dependencies

Navigate to the root directory and run the following command to install dependencies:

```sh
npm install
```

## 3. Create a `.env` File

Inside the `backend` folder, create a new file named `.env` and add the following environment variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/musicdb
CYANITE_API_KEY=<your-cyanite-api-key>
CYANITE_SECRET_KEY=<your-cyanite-secret-key>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name> <optional>
CLOUDINARY_API_KEY=<your-cloudinary-api-key> <optional>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret> <optional>
SPOTIFY_CLIENT_ID=<your-spotify-client-id>
SPOTIFY_CLIENT_SECRET=<your-spotify-client-secret>
SPOTIFY_REDIRECT_URI=http://localhost:5000/api/auth/spotify/callback
```

Replace `<your-...>` with the appropriate values.

## 4. Run the Backend Server

After setting up the `.env` file, start the backend server:

```sh
cd backend
node server.js
```

## 5. Start the Frontend

Navigate to the frontend folder and run:

```sh
npm install
npm run dev
```

Your project should now be running successfully!

