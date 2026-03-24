import {DatabaseSync} from 'node:sqlite';
const db = new DatabaseSync(':memory:');

// execute SQL statements from strings 
 
// data


db.exec(`
    CREATE TABLE users ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,

    password TEXT
    
)
    
    `)

        // PRIMARY KEY is what configures id's from users tables to other tables such as to-do table and allows communication between tables 
        // AUTOINCREMENT basically removes the manual labor to assign each id's to a sort of serial no. so it automatically assigns user1 to id1 and so on  
    
    db.exec(`
            
        CREATE TABLE todos ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        username TEXT, //
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCES users (id)
        //FOREIGN KEY is a constraint that links the user_id in the todos table to the id in the users table, this ensures that each to-do is associated with a valid user and helps maintain data integrity between the two tables, it also allows us to easily query for all to-dos that belong to a specific user by joining the two tables on the user_id and id columns.
    )
        
        
        
        `)  
        
        // user_id keeps track of which to do is assigned for which id in the user table , so when a user authenticates they only recieves the to-do's that's specific to them 

        export default db;
