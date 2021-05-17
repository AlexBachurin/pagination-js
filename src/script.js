//data with items
const items = [{
        name: 'item1'
    },
    {
        name: 'item2'
    },
    {
        name: 'item3'
    },
    {
        name: 'item4'
    },
    {
        name: 'item5'
    },
    {
        name: 'item6'
    },
    {
        name: 'item7'
    },
    {
        name: 'item8'
    },
    {
        name: 'item9'
    },
    {
        name: 'item10'
    },
    {
        name: 'item11'
    },
    {
        name: 'item12'
    },
    {
        name: 'item13'
    },
    {
        name: 'item14'
    }
]

window.addEventListener('DOMContentLoaded', () => {
    //get elems
    const itemsContainer = document.querySelector('.pagination__items');
    const nav = document.querySelector('.pagination__nav');
    //how many items should be shown on 1 page
    const itemsOnPage = 4;
    //setup App, pass in params which number of page u want to show
    setupApp(1);

    //get all li elements only after we created them(after setupApp function);
    const pages = document.querySelectorAll('.pagination__page')

    //nav event listener, using delegation
    nav.addEventListener('click', (e) => {
        const target = e.target;
        let currentPage;
        if (target.classList.contains('pagination__page')) {
            itemsContainer.innerHTML = ''; //clear container so items wont stack on each other
            currentPage = target.textContent; //get number of page
            console.log(currentPage)
            showItems(currentPage) // show items for this page
            pages.forEach(page => {
                page.classList.remove('active-page'); // remove active class from all pages
            })
            target.classList.add('active-page'); //give active state to clicked element
        }

    })

    //dynamically show items on page
    function showItems(pageNumber) {
        //formula to get right start number from where to splice
        const from = (pageNumber - 1) * itemsOnPage;
        const to = from + itemsOnPage;
        const itemsToShow = items.slice(from, to) // get array for clicked page

        //show them on page
        itemsToShow.forEach(item => {
            itemsContainer.innerHTML += `<div class="pagination__item">${item.name}</div>
        `
        })
    }

    //dynamically calculate number of pages to show
    function showPages(pageNumber) {
        //formula to calculate number of pages
        const pagesToShow = Math.ceil(items.length / itemsOnPage);

        //create and show pages
        for (let i = 1; i <= pagesToShow; i++) {
            //add default active class to passed pageNumber
            if (i === pageNumber) {
                nav.innerHTML += `<li class="pagination__page active-page">${i}</li>`
            } else {
                nav.innerHTML += `<li class="pagination__page">${i}</li>`
            }

        }

    }

    //setup app
    function setupApp(pageNumber) {
        //create and show pages
        showPages(pageNumber);
        //show items from first page by default
        showItems(pageNumber);
    }

})