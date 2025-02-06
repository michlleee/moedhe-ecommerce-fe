//image display
const allClickImages = document.querySelectorAll('.click-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allClickImages[0].parentElement.classList.add('active');
});

allClickImages.forEach((image) => {
    image.addEventListener('click', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
    
});

function resetActiveImg(){
    allClickImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

// size buttons
const sizeButtons = document.querySelectorAll('.size-buttons button');

const defaultSizeButton = document.querySelector('.size-buttons .small');
defaultSizeButton.style.backgroundColor = 'black';
defaultSizeButton.style.color = 'white';


sizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Reset background color of all buttons
        sizeButtons.forEach((btn) => {
            btn.style.backgroundColor = 'inherit';
            btn.style.color = ''; // Reset text color
        });

        // Set background color of the clicked button to black
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    });
});

// quanitity button
const quantityContainer = document.querySelector('.quantity-container');
const plusButton = quantityContainer.querySelector('.plus-sign');
const minusButton = quantityContainer.querySelector('.minus-sign');
const quantityDisplay = quantityContainer.querySelector('.amount');

let quantity = 1;
const maxStock = 10;

const updateQuantityDisplay = () =>{
    quantityDisplay.textContent = quantity;
};

const increaseQuantity = () =>{
    if (quantity < maxStock) {
        quantity++;
        updateQuantityDisplay();
    }
};

const decreaseQuantity = () =>{
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
};

plusButton.addEventListener('click', increaseQuantity);
minusButton.addEventListener('click', decreaseQuantity);


// ganti2 description

document.addEventListener('DOMContentLoaded', () =>{
    const tabs = document.querySelectorAll('.info-options p');

    const descriptions={
        overview: "In the depths of its rich, dark blue hue, this shirt whispers tales of timeless elegance and sophistication. Handcrafted with meticulous care, every thread woven with reverence for tradition and heritage. Inspired by the serene landscapes of Java, it embodies the essence of Indonesian craftsmanship, a fusion of art and culture. Each delicate motif tells a story of the artisan's dedication, their skilled hands imbuing the fabric with life and meaning. <br><br> Experience the unique style of the androgynous Galembong pants. Authentic to Sumatra, these pants showcase the cultural heritage of the region, <br>originally worn by men. The comfortable, wide-legged silhouette and loose fit allow for ease of movement, making them ideal for everyday wear or special occasions",
        material: "Cotton: Crafted from premium 100% cotton, our pieces offerunmatched durability and luxurious comfort. Each garment serves<br>as a canvas for intricate designs, ensuring vibrant colors and timeless elegance.",
        careguide: "Gentle Washing: Hand wash your  garments in cold water with a mild <br>detergent to preserve their vibrant colors and intricate designs. Avoid harsh scrubbing or wringing to prevent damage to the fabric. <br><br>Ironing: If ironing is necessary, use a low to medium heat setting and place a thin cloth over the batik fabric to protect the intricate designs. Avoid ironing directly on the batik surface."
    };    

    const informationDiv = document.querySelector('.information');

    tabs.forEach(tab =>{
        tab.addEventListener('click', () =>{
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabName = tab.className.split(' ')[0].toLowerCase();
            const description = descriptions[tabName];
            updateDescription(description);
        });
    });

    const overviewTab = document.querySelector('.overview');
    overviewTab.classList.add('active');
    updateDescription(descriptions['overview']);

    function updateDescription(description){
        informationDiv.innerHTML = `<p>${description}</p>`;
    }
});



