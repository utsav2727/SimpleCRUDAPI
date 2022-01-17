import express from "express";
import userRoutes from './routes/users.js'
const app = express();
const PORT = 5000;


//Middlewares 
app.use(express.json())
app.use('/users', userRoutes);


app.get('/', (req, res) => {
    console.log("Request recieved for homepage");
    res.send("Request recieved for homepage");
})

app.listen(PORT, () => console.log(`Server listing at port ${PORT}`))