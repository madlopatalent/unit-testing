function findItemsOver(products, threshold) {
    const itemsOverThreshold = [];
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].qty > threshold) {
            itemsOverThreshold.push(products[i]);
        }
    }
    
    return itemsOverThreshold;
}

const itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 }
];

const results = findItemsOver(itemList, 35);
console.log(results);