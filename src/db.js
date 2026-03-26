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
        username TEXT, 
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCES users (id)
    )
        
        
        
        `)  
        
        // user_id keeps track of which to do is assigned for which id in the user table , so when a user authenticates they only recieves the to-do's that's specific to them 

        export default db;
