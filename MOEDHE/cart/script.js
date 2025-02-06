document.addEventListener('DOMContentLoaded', () => {
    const priceBox = document.querySelector('.harga');
    const quantityContainer = document.querySelector('.quantity-container');
    const plusButton = quantityContainer.querySelector('.plus-sign');
    const minusButton = quantityContainer.querySelector('.minus-sign');
    const quantityDisplay = quantityContainer.querySelector('.amount');
    const priceTotal = priceBox.querySelector('.price');

    const priceBox1 = document.querySelector('.harga1');
    const quantityContainer1 = document.querySelector('.quantity-container1');
    const plusButton1 = quantityContainer1.querySelector('.plus-sign1');
    const minusButton1 = quantityContainer1.querySelector('.minus-sign1');
    const quantityDisplay1 = quantityContainer1.querySelector('.amount1');
    const priceTotal1 = priceBox1.querySelector('.price1');

    const summary = document.querySelector('.summary');
    const TOTAL = summary.querySelector('.TOTAL');

    const initialPrice = parseFloat(priceTotal.textContent.replace(/\./g, '').replace(',', '.'));
    const initialPrice1 = parseFloat(priceTotal1.textContent.replace(/\./g, '').replace(',', '.'));

    let quantity = 1;
    let quantity1 = 1;
    const maxStock = 10;
    const maxStock1 = 10;

    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const updateTotal = () => {
        const newTotalPrice = initialPrice * quantity;
        const newTotalPrice1 = initialPrice1 * quantity1;
        const combinedTotal = newTotalPrice + newTotalPrice1;
        priceTotal.textContent = formatPrice(newTotalPrice);
        priceTotal1.textContent = formatPrice(newTotalPrice1);
        TOTAL.textContent = formatPrice(combinedTotal);
    };

    const updateQuantityDisplay = () => {
        quantityDisplay.textContent = quantity;
        updateTotal();
    };

    const increaseQuantity = () => {
        if (quantity < maxStock) {
            quantity++;
            updateQuantityDisplay();
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    };

    plusButton.addEventListener('click', increaseQuantity);
    minusButton.addEventListener('click', decreaseQuantity);

    const updateQuantityDisplay1 = () => {
        quantityDisplay1.textContent = quantity1;
        updateTotal();
    };

    const increaseQuantity1 = () => {
        if (quantity1 < maxStock1) {
            quantity1++;
            updateQuantityDisplay1();
        }
    };

    const decreaseQuantity1 = () => {
        if (quantity1 > 1) {
            quantity1--;
            updateQuantityDisplay1();
        }
    };

    plusButton1.addEventListener('click', increaseQuantity1);
    minusButton1.addEventListener('click', decreaseQuantity1);
});
