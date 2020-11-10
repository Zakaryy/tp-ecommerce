const product = require("./products");
const { isExistGetPath } = require("./router");

function Middleware(){

}

function handleGetRequest(req, res){
    res.setHeader("Content-Type", "application/json; charset= UTF-8");
    res.statusCode = 200;
    if(isExistGetPath(res, req.url)){
        if(req.url === "/products"){
            res.end(JSON.stringify(product.getProduct));
        }
    }
    
}

function handlePostRequest(req, res){
    res.setHeader("Content-Type", "application/json; charset= UTF-8");
    res.statusCode = 200;
    if(isExistPostPath(res, req.url)){
        if(req.url === "/products"){
            res.end(JSON.stringify(product.getProduct)); //surement modifier ici
        }
    }

}

function handleDeleteRequest(req, res){

}

function handleUpdateRequest(req, res){

}

Middleware.prototype.handleGetRequest = handleGetRequest;
Middleware.prototype.handlePostRequest = handlePostRequest;
Middleware.prototype.handleDeleteRequest = handleDeleteRequest;
Middleware.prototype.handleUpdateRequest = handleUpdateRequest;

module.exports = new Middleware();