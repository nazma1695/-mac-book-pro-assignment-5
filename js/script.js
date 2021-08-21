// Golobal variabale 
const bestPrice = 1299;

// set prices
const myProduct = {
    memory: 0,
    storage: 0,
    delivery: 0
}
/******************** Get Total Function **********************/
function getTotal() {
    let total = myProduct.memory + myProduct.storage + myProduct.delivery;
    document.getElementById("total-price").innerText = total + bestPrice;
    document.getElementById("subtotal-price").innerText = total + bestPrice;
}
/******************** Get Charge0 Function **********************/
function getCharge0(charge) {
    const price0 = 0;
    const priceData = document.getElementById(charge);
    const priceDataText = priceData.innerText;
    priceData.innerText = price0;

    return price0;
}
/******************** Get Charge180 Function **********************/
function getCharge180(charge) {
    const price180 = 180;
    const price180data = document.getElementById(charge);
    const price180dataText = price180data.innerText;
    price180data.innerText = price180;

    return price180;
}
/******************** Get Charge100 Function **********************/
function getCharge100(charge) {
    const price100 = 100;
    const price100data = document.getElementById(charge);
    const price100dataText = price100data.innerText;
    price100data.innerText = price100;

    return ram16Price;
}
/******************** Get delivery20 Function **********************/
function delivery(charge) {
    const deliveryPrice = 20;
    const deliveryPrice20 = document.getElementById(charge);
    const deliveryPrice20Text = deliveryPrice20.innerText;
    deliveryPrice20.innerText = deliveryPrice;

    return deliveryPrice;
}
/******************** Ram / Memory *********************/
// Set Extra 8GB Memory price to $0
document.getElementById('ram-8gb').addEventListener('click',function(){
    myProduct.memory = getCharge0('ram-charge');
    getTotal();

});
// Set Extra 16GB Memory price To $180
document.getElementById('ram-16gb').addEventListener('click',function(){
    myProduct.memory = getCharge180('ram-charge');
    getTotal();  
});
/******************** Storage **********************/
// Set Extra Storage 256Gb Price to $0
document.getElementById('storage-256gb').addEventListener('click', function () {
    myProduct.storage = getCharge0('storage-charge');
    getTotal();
});

// Set Extra Storage 512Gb Price to $100
document.getElementById('storage-512gb').addEventListener('click', function () {
    myProduct.storage = getCharge100('storage-charge');
    getTotal();
});
// Set Extra Storage 1TB Price to $180
document.getElementById('storage-1tb').addEventListener('click', function () {
    myProduct.storage = getCharge180('storage-charge');
    getTotal();
});
/******************** delivery **********************/
// Set Extra delivery Price to $0
document.getElementById('delivery-free').addEventListener('click', function () {
    myProduct.delivery = getCharge0('delivery-charge');
    getTotal();
})
// Set Extra delivery Price to $20
document.getElementById('delivery-cost').addEventListener('click', function () {
    myProduct.delivery = delivery('delivery-charge');
    getTotal();
    
});

/******************** Apply Button **********************/
document.getElementById('apply').addEventListener('click',function(){
    let promoCode = document.getElementById('promo-code');
    const promo = promoCode.value;
    if (promo == 'stevekaku'){
        let total = myProduct.memory + myProduct.storage + myProduct.delivery;
        let subTotal = (bestPrice + total - (((bestPrice + total)*20)/100));
        document.getElementById('subtotal-price').innerText = subTotal;
    }
    else{
        alert('Please Use Valid Promo!!')
    }

    promoCode.value = '';
})