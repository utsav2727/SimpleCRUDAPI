import express from "express";
import fs from "fs";
import userData from "../tempDB/userData.json";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

//Here all the routes here starting with /users 
//GET Request to /users
router.get('/getusers', (req, res) => {
    res.send(userData)
});

//POST reqest to /users
router.post('/createusers', (req, res) => {
    const id = uuidv4();
    let user = req.body;
    const userWithId = { ...user, id: id }
    userData.push(userWithId);
    //write in userData.json
    fs.writeFile("./tempDB/userData.json", JSON.stringify(userData), err => {
        // Checking for errors
        if (err) throw err;
        console.log("Done writing");
    });
    res.send(userData);
})

router.get('/:id', async (req, res) => {
    const findUser = userData.find((user) => {
        return user.id === req.params.id
    })
    res.send(findUser)

})

router.delete('/:id', (req, res) => {
    let modifieduserData;
    userData.filter((user) => user.id === req.params.id) ? modifieduserData = userData.filter((user) => user.id !== req.params.id) : [];
    fs.writeFile("./tempDB/userData.json", JSON.stringify(modifieduserData), err => {
        // Checking for errors
        if (err) throw err;
        console.log("Done writing");
    });
    res.send(modifieduserData);

})


export default router