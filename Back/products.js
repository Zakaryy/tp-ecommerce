
// ================ ANCIEN JAVASCRIPT ==========================

// const products = [
//     {id: 1, name: "name Products", quantity: 6, img: "https://monImage", date:"31/10/2020", ship: false, categorie: "fruit&legume", price: 10}
// ];

// function Product(){

// }

// function getProduct(){

// }

// function saveProduct(){

// }

// function updateProduct(){

// }

// function deleteProduct(){

// }

// Product.prototype.getProduct = getProduct;
// Product.prototype.saveProduct = saveProduct;

// module.exports = new Product();


// =============== NOUVEAU JAVASCRIPT ============================

class Product {
    constructor(){
        this.products = [
                    {
                        "id":1,
                        "name": "Pomme",
                        "img" : "https://felpi.fr/wp-content/uploads/2018/11/pomme-fuji-felpi-2.png",
                        "quantity":20,
                        "livraison":true, 
                        "categorie":"fruit&legume",
                        "sous-categorie": null,
                        "prix":1,
                        "promo": false
                    },
                    {
                        "id": 2,
                        "name": "Poire",
                        "img": "https://felpi.fr/wp-content/uploads/2018/12/poires-fruit-industrie.png",
                        "quantity":20,
                        "livraison":true,
                        "categorie": "fruit&legume",
                        "sous-categorie": null,
                        "prix":1,
                        "promo": true
                    },
                    {
                        "id": 3,
                        "name": "Concombre",
                        "img": "https://www.cahierdecuisine.com/fileadmin/_processed_/csm_concombre_a748357ff5.png",
                        "quantity":15,
                        "livraison":false,
                        "categorie": "fruit&legume",
                        "sous-categorie": null,
                        "prix":5,
                        "promo": false
                    },
                    {
                        "id": 4,
                        "name": "Choux fleur",
                        "img": "https://princedebretagne.com/sites/default/files/styles/vegetable_detail_thumbnail/public/medias/4c12100110d9a_0.png?itok=CB6fvlOk",
                        "quantity":10,
                        "livraison":false,
                        "categorie": "fruit&legume",
                        "sous-categorie": null,
                        "prix":6,
                        "promo": false
                    },
                    {
                        "id": 4,
                        "name": "Bière blanche Hermine",
                        "img": "https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/3770c84f4a62d55491910f19b4b6441c9e27172f_4333BBO030283_1.png",
                        "quantity":50,
                        "livraison":true,
                        "categorie": "boissons",
                        "sous-categorie": "boissons alcoolisees",
                        "prix":0.5,
                        "promo": true
                    },
                    {
                        "id": 5,
                        "name": "Rhum Bumbu",
                        "img": "https://www.vinatis.com/35568-detail_default/bumbu-distillerie-bumbu.png",
                        "quantity":12,
                        "livraison":true,
                        "categorie": "boissons",
                        "sous-categorie":"boissons alcoolisees",
                        "prix":4,
                        "promo": false
                    },
                    {
                        "id": 6,
                        "name": "Jus de Pomme",
                        "img": "https://kerisac.com/41-large_default/jus-de-pomme-kerisac.jpg",
                        "quantity":20,
                        "livraison":true,
                        "categorie": "boissons",
                        "sous-categorie":"jus",
                        "prix":10,
                        "promo": false
                    },
                    {
                        "id": 7,
                        "name": "Jus de Pamplemousse",
                        "img": "https://cdn.metro-group.com/fr/fr_pim_858702001001_01.png?w=400&h=400&mode=pad",
                        "quantity":18,
                        "livraison":false,
                        "categorie": "boissons",
                        "sous-categorie":"jus",
                        "prix":1,
                        "promo": false
                    },
                    {
                        "id": 8,
                        "name": "Monster Energy",
                        "img": "https://www.monsterenergy.com/media/uploads_image/2016/05/31/auto/800/55b851a9c4bac32475f04d9603066ca2.png?mod=v1_f59f227b41311210f3d966e7c0086ab1https://www.monsterenergy.com/media/uploads_image/2016/05/31/auto/800/55b851a9c4bac32475f04d9603066ca2.png?mod=v1_f59f227b41311210f3d966e7c0086ab1",
                        "quantity":13,
                        "livraison":true,
                        "categorie": "boissons",
                        "sous-categorie":"boissons energisantes",
                        "prix":1,
                        "promo": true
                    },
                    {
                        "id": 9,
                        "name": "Boulettes de boeuf",
                        "img": "https://lh3.googleusercontent.com/proxy/KqLkEl_IpDXM7xRLDnsSuDdq2u9xhFp1FgiNw4bkwetFeJ_z6b33mPWklInGBQwM5yoWYu8uunEvEYlT_5fVesAK9P7dCH4sU9mDIekltwXO8ubgwoOFSZMgHsANqt3FrSVh-hpEx8a572hlAw",
                        "quantity":40,
                        "livraison":false,
                        "categorie": "viandes",
                        "sous-categorie": null,
                        "prix":12,
                        "promo": false
                    },
                    {
                        "id": 10,
                        "name": "Ribs de porc",
                        "img": "https://lh3.googleusercontent.com/proxy/sub9o0EedBiFKs52EFpF4sDeulKxdVkdk0_6yH-yoCK8caQ1QHCirMqRIiZnbNTO3vSCG4YlC7-99uVcdMWWwRkykwqroU8VSNp_QpPa48zpB7uqmeERTIgjLEjA8WHmjoryXXYSzWb6scIo4G-8NFOqEt8VDZxdBoqkyVBK7oBInCDhuNI1xmnn",
                        "quantity":40,
                        "livraison":false,
                        "categorie": "viandes",
                        "sous-categorie": null,
                        "prix":10,
                        "promo": false
                    },
                    {
                        "id": 11,
                        "name": "Blé",
                        "img": "https://www.omum.fr/img/cms/actif-03-big_1.png",
                        "quantity":12,
                        "livraison":true,
                        "categorie": "cereales",
                        "sous-categorie": null,
                        "prix":1,
                        "promo": false
                    },
                    {
                        "id": 12,
                        "name": "Avoine",
                        "img": "https://dw5gv07eh08co.cloudfront.net/media/perfumes/thumb/Avoine_thumbnail.png",
                        "quantity":8,
                        "livraison":true,
                        "categorie": "cereales",
                        "sous-categorie": null,
                        "prix":1,
                        "promo": false
                    },
                    {
                        "id": 13,
                        "name": "Yop fraise",
                        "img": "https://www.yoplait.fr/wp-content/uploads/2016/04/yop-fraise-1.png",
                        "quantity":5,
                        "livraison":false,
                        "categorie": "frais",
                        "sous-categorie": null,
                        "prix":4,
                        "promo": false
                    },
                    {
                        "id": 14,
                        "name": "Brie de Meaux",
                        "img": "https://edmondderothschildheritage.com/wp-content/uploads/Brie-de-Meaux-3.png",
                        "quantity":6,
                        "livraison":false,
                        "categorie": "frais",
                        "sous-categorie": null,
                        "prix":10,
                        "promo": false
                    }
                    
                ]
    }

    get getProduct(){
        return this.products;
    }
    
    get addProduct(){
        return "hello";
    }

    saveProduct(){}
    updateProduct(){}
    deleteProduct(){}



}

module.exports = new Product();