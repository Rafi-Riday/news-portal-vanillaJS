const getPageBtnData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    displayPageBtnData(data.data.news_category);
}
const displayPageBtnData = (categoryArray) => {
    const pageList = document.getElementById('page-list');
    categoryArray.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('page-btn', 'btn', 'text-xs', 'md:text-base', 'lg:text-xs', '2lg:text-sm');
        categoryBtn.setAttribute('id', `${category.category_id}`);
        categoryBtn.setAttribute('onclick', 'pageBtnActivate(this)');
        categoryBtn.innerHTML = `${category.category_name}`;
        pageList.appendChild(categoryBtn);
    });
}

getPageBtnData();

const pageBtnActivate = (activeBtn) => {
    const pageBtnList = document.getElementsByClassName('page-btn');
    if (activeBtn.getAttribute('id') === 'home') {
        writeHomeInsideMainContainer();
    }
    else {
        writeCategoryInsideMainContainer();
    }
    for (const pageBtn of pageBtnList) {
        pageBtn.classList.remove('btn-info');
    }
    activeBtn.classList.add('btn-info');
    document.title = `Daily-Dose | ${activeBtn.innerText}`;
}
