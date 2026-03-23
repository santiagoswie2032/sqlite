import express from 'express';
import db from '../db.js';

const router = express.Router();


router.get('/', (req,res)=>{
    // this route will be used to get all the todos for a user, it will
    // receive the user id from the request query, and then query the database
    // to get all the todos for that user and send them back in the response.

});

router.post('/', (req,res)=>{ 
    // this route will be used to create a new todo for a user, it will
    // receive the user id and the todo text from the request body,
    // and then insert a new todo into the database for that user and send
    // the created todo back in the response.
})

router.put('/:id', (req,res)=>{
    // this route will be used to update a todo for a user, it will
    // receive the todo id from the request params, and the updated todo 
    // text and completed status from the request body, and then update
    // the todo in the database and send the reqeusted todo back in the responese.

    // while modifying the todo, you gotta modify them by the id so that you dont 
    // mess with other people's todos, and also you have to make sure that the user
    // is the owner of the todo and you do that by checking their id when they make a put (modification) request

})

router.delete('/:id', (req,res)=>{
    // this route will be used to delete a todo for a user, it will
    // receive the todo id from the request params, and then delete the
    // todo from the database and send a success message back in the response.


})

export default router;