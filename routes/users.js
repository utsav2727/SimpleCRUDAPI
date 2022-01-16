import express from "express";
import fs from "fs";
import userData from "../tempDB/userData.json"

const router = express.Router();
console.log(userData);


//Here all the routes here starting with /users 

//GET Request to /users
router.get('/getusers', (req, res) => {
    res.send(userData)
});

//POST reqest to /users
router.post('/createusers', (req, res) => {

    let user = req.body;
    userData.push(user);
    //write in userData.json
    fs.writeFile("./tempDB/userData.json", JSON.stringify(userData), err => {

        // Checking for errors
        if (err) throw err;

        console.log("Done writing");
    });
    res.send(userData)
})



export default router