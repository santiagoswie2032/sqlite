import express from 'express'; // imports express function which helps in setting up the server, node.js can run without it but it'll be painful, node.js is baremetal without it 
import path, {dirname} from 'path';  //a helper function that extracts folder path from file path
import { fileURLToPath } from 'url'; // gives import.meta.url instead of a file url 
import authRoutes from './routes/authRoutes.js';           //importing routers like /register and /login
import todoRoutes from './routes/todoRoutes.js';



const app = express(); // sets up a server in app which handles routes, middleware, auth, request/response 

const PORT = process.env.PORT || 5757;     // useful when deploying, uses deployment url if available otherwise uses the local port 5757

//get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)               
// get the directory name from the file path

const __dirname = dirname(__filename);



//middleware  :


app.use(express.json());    // is a middleware that recieves raw http bytes data, parses it and attaches it to req.body as a js object 

// serves the html file from /public directory and also tells express
// to serve all files from the public folder as static assest
//file any requests for css files will be resolved to the public
//directoy 

app.use(express.static(path.join(__dirname, '../public')));        

 // bulids an absolute path from /src to /public, tells the files are not routes and to just send them directly 
 // registers middleware  , middleware runs before routes 




    // routes :




app.use('/auth',authRoutes);    // combines all of the auth endpoints or auth routes and links them to /auth  (those imported routers like /register and /login) 
app.use('/todos',todoRoutes);    // combines all of the todo endpoints or todo routes and links them to /todos (those imported routers like /get, /post, /put, /delete)


console.log("born"); 

//serving up the html file from the public directory
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public','index.html'))
})

app.listen(PORT, ()=>{
    console.log(`server has started on port : ${PORT}`);
});