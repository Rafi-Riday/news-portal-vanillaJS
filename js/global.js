fetch('https://openapi.programming-hero.com/api/news/category/08')
    .then(res => res.json())
    .then(data => {
        const newsCount = data.data.length;
        for (const newsCountContainer of document.getElementsByClassName('news-count-container')) {
            newsCountContainer.innerText = `${newsCount}`;
        }
    })

// const blogCount = document.getElementById('blog-container')?.childElementCount;
const blogCountContainerList = document.getElementsByClassName('blog-count-container');
for (const blogCountContainer of blogCountContainerList) {
    // blogCountContainer.innerText = `${blogCount}`;
    blogCountContainer.innerText = `${4}`;
}

const main = document.getElementById('main');

