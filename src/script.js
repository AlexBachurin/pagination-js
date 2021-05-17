//data with items
const items = [
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'},
    {name: 'item5'},
    {name: 'item6'},
    {name: 'item7'},
    {name: 'item8'},
    {name: 'item9'},
    {name: 'item10'},
    {name: 'item11'},
    {name: 'item12'},
    {name: 'item13'},
    {name: 'item14'}
]
//get elems
const itemsContainer = document.querySelector('.pagination__items');
const nav = document.querySelector('.pagination__nav');

//how many items should be shown on 1 page
const itemsOnPage = 4;

//nav event listener, using delegation
nav.addEventListener('click', (e) => {
    const target = e.target;
    let currentPage;
    if (target.classList.contains('pagination__page')) {   
        itemsContainer.innerHTML = ''
        currentPage = target.textContent;
        console.log(currentPage)
        showItems(currentPage)
    }

})

//dynamically show items on page

function showItems(pageNumber) {
    //formula to get right start number from where to splice
    const from = (pageNumber - 1) * itemsOnPage;
    const to  =  from + itemsOnPage;
    const itemsToShow = items.slice(from, to)

    itemsToShow.forEach(item => {
        itemsContainer.innerHTML += `<div class="pagination__item">${item.name}</div>
        `
    })
}
