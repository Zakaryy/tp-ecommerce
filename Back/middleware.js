const product = require("./products");
const { isExistGetPath, isExistPostPath, isExistDeletePath } = require("./router");

function Middleware(){}

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
    res.statusCode = 201;
    if(isExistPostPath(res, req.url)){
        if(req.url === "/products"){
            req.on("data", function(data){
                temp = JSON.parse(data.toString());
                product.addProduct(temp);
                
            })
            req.on("end", function(){             
                console.log("post effectué");
                res.end(JSON.stringify({message: "post effectué"}));
            })
        }
    }

}

function handleDeleteRequest(req, res){
    res.statusCode = 202;
    if(isExistDeletePath(res,req.url)){
        if(req.url === "/products"){
            product.deleteProduct();
        
        }

    }

}

function handleUpdateRequest(req, res){

}

Middleware.prototype.handleGetRequest = handleGetRequest;
Middleware.prototype.handlePostRequest = handlePostRequest;
Middleware.prototype.handleDeleteRequest = handleDeleteRequest;
Middleware.prototype.handleUpdateRequest = handleUpdateRequest;

module.exports = new Middleware();