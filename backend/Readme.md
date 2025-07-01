<!-- Initial Setup -->

1. Install all the dependance for the backend like:
   ---> bcrypt,cloudinary,cors,dotenv,express,jsonwebtoken,mongoose,multer,nodemon,validator

- command : npm install bcrypt cloudinary cors dotenv express jsonwebtoken mongoose multer validator

2. Create a server.js files. Where we invoke all database, cloud, routes it it.

3. We have create few folder like:

- config
- controllers -> To handle the API Operation(based on the requests).
- middlewares -> To handle the storage.
- models -> To handle the request schema.
- routes -> To import express routes and handle the routing.

4. Created a .env file that help in storing the keys like:

- MONGODB_URI
- CLOUDINARY_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_SECRET_KEY

5. We need to add a parameter in package.json for scripts:

   "server": "nodemon server.js"

<!--
✅ What nodemon does:
nodemon watches your files for changes (like server.js, or any other files it imports), and automatically restarts your Node.js server whenever you:

Save a file

Change your server code

Add or remove routes or middleware
 -->

<!-- Lets Start Writing API's -->

--> For Testing API's I have used POSTMAN.

<!-- --- ADMIN --- -->

- Firstly we create schema's for the request. Schema is nothing but what are the parameter that are need, which are required and what are parameters that contain default values.(You can refer this in models folder)

- Next we create a function in a specific file in controller. This function are the operations that we do for CRUD operation for DB.

- On next we need to create a directional route that help in CRUD opertion. This is done in the specific file in the routes. We implement the routing using express.Router() concept.

- The routes that are defined in routes folder are called in the server.js for handling the routes.
