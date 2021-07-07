import faker from 'faker';

const mount  = (el) => {
    let products = '';

    for (let i = 0; i < 15; i++){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products;
}



//DEVELOPMENT/ISOLATION MODE
if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');

    //Assuming container doesn't have #dev-products
    if(el){
        mount(el);
    }
}

export {mount};