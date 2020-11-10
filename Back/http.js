//#region requires

const http = require("http");
const { handleGetRequest } = require("./middleware");
const { handlePostRequest } = require("./middleware");
const {requestSupported} = require("./router");

//#endregion requires


//#region variables

//#endregion variables


//#region functions

//#endregion functions


//#region MAIN

const server = http.createServer(function(request,response){
    response.setHeader("Access-Control-Allow-Origin", "*");

    if(requestSupported(response, request.method)){
        if(request.method === "GET"){
            handleGetRequest(request, response);
        }
        else if(request.method === "POST"){
            handlePostRequest(request, response);
            
        }
        else if(request.method === "DELETE"){
            
        }
        else if(request.method === "UPDATE"){
            
        }
    }
    
})

server.listen(3000, function(){
    console.log("server started...");
})

//#endregion MAIN


