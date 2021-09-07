// All Button Ref.
const m_8gb_btn = document.getElementById('8gb-price')
const m_16gb_Btn = document.getElementById('16gb-price')
const s_256gb_Btn = document.getElementById('256gd-price')
const s_512gb_Btn = document.getElementById('512gb-price')
const s_1tb_Btn = document.getElementById('1tb-price')
const free_delivery = document.getElementById('free-delivery')
const delivery_Btn = document.getElementById('delivery-charge')
const promo_btn = document.getElementById('promo_Btn')
// All cost/price placeholder Ref.
let extra_memory_cost = document.getElementById('extra-memory-cost')
let extra_storage_cost = document.getElementById('extra-storage-cost')
let extra_delivery_cost = document.getElementById('delivery-cost')
let total_price = document.getElementById('total-price')
let total_price_after_discount = document.getElementById('total-price-after-discount-amount')
let promo_code = document.getElementById('promo_Code')

// Funtion For Adding Extra cost
function addingExtraCostToTotalPrice(extra_cost) {
    extraCost = parseInt(extra_cost.innerText);
    totalPrice = parseInt(total_price.innerText) + extraCost;

    return totalPrice;
}


// Memory Cost Calculations
m_8gb_btn.addEventListener('click', () => {
    extra_memory_cost.innerText = 0;

    if (m_16gb_Btn.disabled) {
        let newTotal = addingExtraCostToTotalPrice(extra_memory_cost);
        newTotal = newTotal - 180;
        console.log(newTotal);
        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;
        
    }


    m_8gb_btn.disabled = true;
    m_16gb_Btn.disabled = false;
})

m_16gb_Btn.addEventListener('click', () => {
    extra_memory_cost.innerText = 180;
    m_16gb_Btn.disabled = true;
    m_8gb_btn.disabled = false;

    let newTotal = addingExtraCostToTotalPrice(extra_memory_cost)

    total_price.innerText = newTotal; 
    total_price_after_discount.innerText = newTotal;
    
    console.log(newTotal);
})

// Storage Cost Calculations

s_256gb_Btn.addEventListener('click', () => {
    extra_storage_cost.innerText = 0;

    if (s_512gb_Btn.disabled) {
        let newTotal = addingExtraCostToTotalPrice(extra_storage_cost);
        newTotal = newTotal - 100;
        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;
    }

    if (s_1tb_Btn.disabled) {
        let newTotal = addingExtraCostToTotalPrice(extra_storage_cost);
        newTotal = newTotal - 180;
        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;
    }

    s_256gb_Btn.disabled = true;
    s_512gb_Btn.disabled = false;
    s_1tb_Btn.disabled = false;
})

s_512gb_Btn.addEventListener('click', () => {

    if (s_1tb_Btn.disabled) {
        extra_storage_cost.innerText = 100;
        let newTotal = addingExtraCostToTotalPrice(extra_storage_cost)
        console.log(newTotal);
        newTotal = newTotal - 180;

        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;

    } else {
        extra_storage_cost.innerText = 100;
        let newTotal = addingExtraCostToTotalPrice(extra_storage_cost)
        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;
        console.log(newTotal);
    }



    s_256gb_Btn.disabled = false;
    s_512gb_Btn.disabled = true;
    s_1tb_Btn.disabled = false;


})

s_1tb_Btn.addEventListener('click', () => {

    if (s_512gb_Btn.disabled) {
        extra_storage_cost.innerText = 180;
        let newTotal = addingExtraCostToTotalPrice(extra_storage_cost);
        newTotal = newTotal - 100;
        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;
        console.log(newTotal);
    } else {
        extra_storage_cost.innerText = 180;
        let newTotal = addingExtraCostToTotalPrice(extra_storage_cost);
        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;
        console.log(newTotal);
    }



    s_256gb_Btn.disabled = false;
    s_512gb_Btn.disabled = false;
    s_1tb_Btn.disabled = true;
})

// Delivery Cost Calculations
free_delivery.addEventListener('click', () => {
    extra_delivery_cost.innerText = 0;

    if (delivery_Btn.disabled) {
        let newTotal = addingExtraCostToTotalPrice(extra_delivery_cost);
        newTotal = newTotal - 20;
        console.log(newTotal);
        total_price.innerText = newTotal; 
        total_price_after_discount.innerText = newTotal;
    }


    free_delivery.disabled = true;
    delivery_Btn.disabled = false;
})

delivery_Btn.addEventListener('click', () => {
    extra_delivery_cost.innerText = 20;
    delivery_Btn.disabled = true;
    free_delivery.disabled = false;

    let newTotal = addingExtraCostToTotalPrice(extra_delivery_cost)

    total_price.innerText = newTotal; 
    total_price_after_discount.innerText = newTotal;
    console.log(newTotal);
})


// Promo Code 
promo_btn.addEventListener('click', () => {
    //Checking PromoCode use time.
    if (promo_code.value === "stevekaku" && parseFloat(total_price_after_discount.innerText) > 1039.2) {
        let newTotal = parseFloat(total_price_after_discount.innerText)
        newPriceAfterPromoCode = newTotal - ((newTotal / 100) * 20);
        console.log(newPriceAfterPromoCode);
        total_price_after_discount.innerText = newPriceAfterPromoCode;
    }
})