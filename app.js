const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app= express();

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    const dbo = db.db("sathya");
    dbo.collection('userInformation').aggregate([     //userInformation is Tables name
        {  $lookup:
            {
               from: 'userAddress',                // userAddress is Another tables name
               localField: 'fullname',
               foreignField: 'fullname',
               as: 'address'
            }
        }
    ]).toArray((err, res)=>{
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    })

})
