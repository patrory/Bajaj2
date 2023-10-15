import express from "express"
import mysql from "mysql"
import cors from "cors"
import http from "http"

const app = express();
const server = http.createServer(app)

app.use(express.json()) ;
app.use(cors())
const db = mysql.createConnection({
    host:"localhost" ,
    user :"root" ,
    password :"DTS:Xultra",
    database : "chat_app"
})

app.get("/",(req,res)=>{
    res.json("Hello from backend")
})

app.get("/active",(req,res)=>{
    const q = "select * from user where online  = TRUE " ;
    db.query(q,(err,data)=>{
        if(err)return res.json(err) ;
        return res.json(data)
    })
})

app.post("/user",(req,res)=>{
    const q = "insert into user (userName , socketID ) values (?) on duplicate key update socketId = values(socketId) , online = TRUE ;"
    console.log("REQUEST ",req.body.userName)
    const value = [req.body.userName , "1234567b"] ;
    db.query(q,[value] , (err,data)=>{
        if(err)return res.json(err) ;
        return res.json("User logged in") ;
    })
})

app.post("/dissconnect",(req,res)=>{
    const q = "update user set online = FALSE where socketId = ? ; "
    const socketId = "12345678A" ; // update later
    db.query(q,[socketId],(err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).json({error : "Internal Server Error" })
        }
        return res.json("Boolean updated to FALSE successfully.");
    })
})
server.listen(8800 ,()=>{
    console.log("Conntected to backend")
})