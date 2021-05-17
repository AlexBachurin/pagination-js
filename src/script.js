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
    const itemsContainer = document.querySelector('.pagination__items'),
          pageContainer = document.querySelector('.pagination__page-container'),
          prevBtn = document.querySelector('.pagination__nav-btn_prev'),
          nextBtn = document.querySelector('.pagination__nav-btn_next');
    //how many items should be shown on 1 page
    const itemsOnPage = 4;
    //current page counter
    let currentPage = 1;

    //setup App, pass in params which number of page u want to show
    setupApp(currentPage);

    //get all li elements only after we created them(after setupApp function);
    const pages = document.querySelectorAll('.pagination__page')

    //pageContainer event listener, using delegation
    pageContainer.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.classList.contains('pagination__page')) {
            
            currentPage = +target.textContent; //get number of page
            showItems(currentPage) // show items for this page
            pages.forEach(page => {
                page.classList.remove('active-page'); // remove active class from all pages
            })
            target.classList.add('active-page'); //give active state to clicked element
        }

    })
    // **** BUTTONS HANDLERS ****
    //prev
    prevBtn.addEventListener('click', () => {
        console.log(currentPage)
        if (currentPage !== 1) {
            currentPage--;
            showItems(currentPage);
            pages.forEach(page => {
                page.classList.remove('active-page'); // remove active class from all pages
            })
            pages[currentPage - 1].classList.add('active-page');
        }
    })

    //next 
    nextBtn.addEventListener('click', () => {
        console.log(currentPage)
        if (currentPage !== pages.length ) {
            currentPage++;
            console.log(currentPage)
            showItems(currentPage);
            pages.forEach(page => {
                page.classList.remove('active-page'); // remove active class from all pages
            })
            pages[currentPage - 1].classList.add('active-page');
        }
    })

    //dynamically show items on page
    function showItems(pageNumber) {
        //formula to get right start number from where to splice
        const from = (pageNumber - 1) * itemsOnPage;
        const to = from + itemsOnPage;
        const itemsToShow = items.slice(from, to) // get array for clicked page

        itemsContainer.innerHTML = ''; //clear container so items wont stack on each other

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
                pageContainer.innerHTML += `<li class="pagination__page active-page">${i}</li>`
            } else {
                pageContainer.innerHTML += `<li class="pagination__page">${i}</li>`
            }

        }

    }

    //setup app
    function setupApp(pageNumber) {
        //create and show pages
        showPages(pageNumber);
        //show items 
        showItems(pageNumber);
        // placeButtons();
    }

    // //properly place buttons
    // function placeButtons() {
    //     const pagesWidth = pageContainer.getBoundingClientRect().width;
    //     console.log(pagesWidth);
    
    //     prevBtn.style.right = `${pagesWidth/2}px`
    //     nextBtn.style.right = `${pagesWidth/2}px`    

    // }

})