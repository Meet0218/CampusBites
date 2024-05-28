const mongoose = require("mongoose");
const initData = require("./data");
const menu = require("../models/campus.js.bak");

async function main(){
    await mongoose.connect("mongodb://localhost:27017/campusbite").then(console.log("data connected"));
}
main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

const initDB = async()=>{
    await menu.deleteMany({});
    await menu.insertMany([
        { name: 'Burger', description: 'Classic beef burger', price: 10.99 },
        { name: 'Pizza', description: 'Margherita pizza', price: 12.99 },
        { name: 'Pasta', description: 'Spaghetti Bolognese', price: 9.99 },
      ]);
    console.log("data was initialized");
}
initDB();
