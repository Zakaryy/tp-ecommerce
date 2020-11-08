$(document).ready(function(){
    //constantes
    const selectionnerProduit = $(".selectionnerProduit");
    const quantiteProduit =  $(".inputNumber");

    //Verification
    console.log("Case de selection du produit :", selectionnerProduit);
    console.log("Input de la quantite de produit :", quantiteProduit);
    
    selectionnerProduit.on('click', function(){
        console.log(this.value);
    });
});