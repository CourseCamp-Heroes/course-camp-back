"use strict"

const axios = require('axios');

function getBlogHandler(request,response){

    let keyWordsArr = ['html','css','javascript','react','python','jquery','ruby','heroku','linux','networking','http'];

    let randNum= Math.floor(Math.random() * (keyWordsArr.length - 0) ) + 0;
   
    
    axios.get(`https://api.currentsapi.services/v1/search?keywords=${keyWordsArr[randNum]}&apiKey=ris1F9b-qAuivtr2Kj_AosOuQ56HT3B6LuC3AhVyeavmdFHn&category=programming`).then((data) => {
        // console.log(response.data);
        // console.log(this.setState.blogData);
        response.send(data.data);
    })
    .catch(
        error => {
            response.status(500).send(error.messgae)
        }
    )
}

module.exports = getBlogHandler;