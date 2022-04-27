const b = document.querySelector('#bacaneria')
const c = document.querySelector('#list')

b.addEventListener('submit', function(e){
    e.preventDefault();
    const productInput = b.elements.product;
    const qInput = b.elements.qty;
    addProduct(productInput.value, qInput.value)
    productInput.value = '';
    qInput.value = '';
 });

 const addProduct = (product, qty) => {
    const newP = document.createElement('li');
    const pTag = document.createElement('b');
    pTag.append(product)
    newP.append(pTag);
    newP.append(`- ${qty}`)
    c.append(newP);
}