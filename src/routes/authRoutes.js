import express from "express";  // this is the file where we will be handling all the authentication related routes like login and register
import bcrypt from "bcryptjs";    // this is the library which we will be using for hashing the password before storing it in the database, it provides a simple way to hash and compare passwords securely.
import jwt from "jsonwebtoken"; // this is the library which we will be using for generating and verifying JSON Web Tokens (JWTs), which are used for authentication and authorization in our application.
import db from "../db.js"; // this is the file where we have defined our database connection and exported it, we will be using this to interact with our database.


//when we are sub-dividing our routes into different files we have to use express.Router() to create a new router object, which we can then use to define our routes and export it to be used in our main server file.
const router = express.Router();

router.post('/register', (req,res)=>{
    // this is the route for registering a new user, it will receive
    // the username and password from the request body, hash the password
    // and store the user in the database, we will also generate a JWT token
    // and send it back to the client for authentication purposes.

    const{username, password} = req.body; // we extract the username and password from the request body, which is sent by the user when
    // they are trying to register a new account, we will use these values to create a new user in the database and also to generate a JWT
    // token for the user to authenticate themselves in future requests.

    const hashedPassword = bcrypt.hashSync(password, 7); 
    const hashedPassword2 = bcrypt.hashSync(password, 8);
    
    //we use the bcrypt library to hash the password before storing it in 
    // the database, this is a security measure to protect the user's
    // password in case the database is compromised, the hashSync function
    // takes the password and a salt rounds value (in this case 8) and returns
    // the hashed password, the salt rounds value determines how many
    // times the hashing algorithm will be applied, a higher value means more
    // security but also more time to hash the password.

   

    console.log(username,password);

    console.log(hashedPassword);
    console.log(hashedPassword2);

    try{

    }
    catch(err){
        console.log(err.message);
        res.sendStatus(504);
    }

    // obviously only one out of try and catch runs at a time, if try has been executed successfully then 
    // catch will be skipped, if try dosent run as intended, catch will log the error message and send a 504
    // status code to the user implying that something has gone wrong with the server.


    

    // saves the new user's username and their irreversible encrypted passwoerd 
    //in the database, and then generates a JWT token for the user to authenticate.
}

);

router.post('/login', (req,res)=>{}
    // this is the route for logging in a user, it will receive the
    // username and password from the request body, check if the user exists
    // in the database, compare the hashed password with the one stored in the database
    // and if it matches, generate a JWT token and send it back to the client for authentication purposes.
    

    //when a user tries to log in, we try to check if they have entered the 
    // correct password and username from the database
    // the problem is because when they were registering, the passwords got
    //encrypted and when we need to check, we get back the encrypted password
    // so we encrypt it again using the same algorithm and compare the keys
    // generated in both cases, if they match then the user is authenticated.
)

export default router;