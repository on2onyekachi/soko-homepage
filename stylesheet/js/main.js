const itemContent = [
    {
        itemImage: '/images/shoe.png',
        itemName: "Norbury Scandinavian Wood Leg Ottoman",
        itemPrice: '205,000',
    },
    {
        itemImage: '/images/bagI.png',
        itemName: "Kids' 2px Cloth Face Masks",
        itemPrice: '100,000',
        newPrice: '80,000',
        discount: '-20%'
    },
    {
        itemImage: '/images/baga.png',
        itemName: "Lady Chearleader - Hand Bag",
        itemPrice: '605,000',
        newPrice: '500,000',
        discount: '-53%'
    },
    {
        itemImage: '/images/pend.png',
        itemName: "Methal Country Chalet Charm and wood Bench -Saracina Home",
        itemPrice: '305,000',
    },
    {
        itemImage: '/images/Pendantt.png',
        itemName: "Alternative Protein Ground - 16oz Good & Gather",
        itemPrice: '705,000',
    }
]
// selesctors
const sellerItemMain = document.querySelector('.seller-items-main');
const navs = document.querySelectorAll('.nav-link');
const categoryContainer = document.querySelector('.category-container');
const categoryItem = document.querySelectorAll('.category-item');

// load each item func
const itemDetail = (items) => {
    const div = document.createElement('div');
    for (let item of items) {
        const itemParent = document.createElement('div');
        itemParent.className = 'seller-item-container';
        itemParent.innerHTML =   `
            <div class="seller-item-image">
                <img src="${item.itemImage}" alt="item-photo">
                ${
                    item.discount ? `<span class="new-discount" >${item.discount}</span>`: ''
                }
            </div>
            <div class="seller-item-detail">
            <p class="seller-item-name">${item.itemName}</p>
            <p class="seller-item-price">UGX <span class="seller-item-price-main">${item.itemPrice}</span></p>
            ${
                item.newPrice ? `<p class="old-price">UGX <span class="seller-item-price-main">${item.newPrice}</span></p>` : ''
            }
            </div>
            <div class="seller-item-add-button">
                <button><span class="cross">+</span> Add</button>
            </div>
        `;
        div.appendChild(itemParent);
    }
    return div;
}
// 
const loadItems = itemDetail(itemContent);
sellerItemMain.appendChild(loadItems)

// Navbar interactivity
categoryContainer.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if(id){
        navs.forEach(function(nav, i){
            nav.classList.remove('active');
            e.target.classList.add('active');
        })
        categoryItem.forEach(function(item){
            item.classList.remove('active');
            e.target.parentElement.classList.add('active');
        })
    }
})