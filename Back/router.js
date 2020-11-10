const requestSupportedMethod = ["GET", "POST", "DELETE", "UPDATE"];
const routerPathGet = ["/products"];


const { handleErrorRequest } = require("./middleError");

//#region oldJS

// const routerPathGet = [];
// const routerPathPost = [];
// const routerPathDelete = [];
// const routerPathUpdate = [];

// function Router(){}

//#endregion oldJS

//#region newJS

class Router {
    constructor(){
        this.routerPathGet = [];
        this.routerPathPost = [];
        this.routerPathDelete = [];
        this.routerPathUpdate = [];
    }

    isExistGetPath(res, url){
        if(routerPathGet.indexOf(url) !== -1){
            return true;
        }
        else{
            handleErrorRequest(res, 404, `${url} doesn't exist in your GET router`);
        }
    }

    isExistPostPath(res, url){
        if(routerPathPost.indexOf(url) !== -1){
            return true;
        }
        else{
            handleErrorRequest(res, 404, `${url} doesn't exist in your POST router`);
        }
    }

    requestSupported(res, method){
        if(requestSupportedMethod.indexOf(method) !== -1){
            return true;
        }
        handleErrorRequest(res, 501, `${method} isn't yet supported by the server`);
    }
}

//#endregion newJS

module.exports = new Router();