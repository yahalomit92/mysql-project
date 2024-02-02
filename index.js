import express from "express";

const app=express();



import accountController from './controllers/accounts.js'
import database from './services/database.js'

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',accountController );






const port=3001;

database
.sync()
.then(res =>{
        console.log(res);
        app.listen(port,() => {
                console.log(`server is running via port ${port}`);
        })
})
.catch(err => {
        console.log(err);
})
