const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5},
    {id: 6,price: 50},
    {id: 7},
    {id: 8,price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (title, price, img="https://via.placeholder.com/200x150") => {
    return `<div class="product-item">
                <img src="${img}">
                <h3>${title}</h3>git
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
}
renderPage(products);