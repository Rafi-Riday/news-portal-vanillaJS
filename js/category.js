let sortAndFilter = {
    sortData: 'latest',
    filterData: 'none',
};
// sort : latest views ratings
// filter : todaysPick trending

const specificNewsDisplay = (categoryId) => {
    sortAndFilter = {
        sortData: 'latest',
        filterData: 'none',
    };
    main.innerHTML = `
        <div class="my-5 p-4 w-full bg-slate-700 rounded-xl text-sm md:text-base"><span id="news-container-child-count">&nbsp;&nbsp;</span> items found for category
            Entertainment
        </div>
        <!-- sorting section -->
        <section class="my-5 p-4 w-full bg-slate-700 rounded-xl text-sm md:text-base flex justify-between">
            <!-- sorting option -->
            <select id="select-sorting" class="select select-info">
                <option value="latest" selected class="hidden">Sort By</option>
                <option value="latest">Latest</option>
                <option value="views">Views</option>
                <option value="ratings">Ratings</option>
            </select>
            <!-- todays pick vs trading -->
            <div class="flex flex-col sm:flex-row gap-2">
                <button onclick="sortBoolianBtn(this, 'boolian-btn'); sortAndFilter.filterData = 'none'; specificNewsDisplayEach('${categoryId}')"
                    class="boolian-btn btn btn-info text-xs md:text-base lg:text-xs 2lg:text-sm"><i
                        class="fa-solid fa-retweet"></i></button>
                <button onclick="sortBoolianBtn(this, 'boolian-btn'); sortAndFilter.filterData = 'todaysPick'; specificNewsDisplayEach('${categoryId}')"
                    class="boolian-btn btn btn-info btn-outline text-xs md:text-base lg:text-xs 2lg:text-sm">Today's
                    Pick</button>
                <button onclick="sortBoolianBtn(this, 'boolian-btn'); sortAndFilter.filterData = 'trending'; specificNewsDisplayEach('${categoryId}')"
                    class="boolian-btn btn btn-info btn-outline text-xs md:text-base lg:text-xs 2lg:text-sm">Trending</button>
            </div>
        </section>
        <div id="specific-news-container"
            class="max-w-3xl xl:max-w-7xl mx-auto my-5 p-4 w-full bg-slate-700 rounded-2xl text-sm md:text-base grid grid-cols-1 xl:grid-cols-2 gap-4">
        </div>
    `;

    specificNewsDisplayEach(categoryId);

}

const specificNewsDisplayEach = async (categoryId) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
        const data = await res.json();
        // console.log();
        const dataArray = data.data;
        // sorting
        if (sortAndFilter.sortData === 'latest') {
            sortNewsByLatest(dataArray);
        }
        else if (sortAndFilter.sortData === 'views') {
            sortNewsByViews(dataArray);
        }
        else if (sortAndFilter.sortData === 'ratings') {
            sortNewsByRatings(dataArray);
        }
        else {
            sortNewsByLatest(dataArray);
        }
        // filtering
        if (sortAndFilter.filterData === 'none') {
            displayNewsFunction(dataArray, categoryId);
        }
        else if (sortAndFilter.filterData === 'todaysPick') {
            const todaysPickList = dataArray.filter(data => data.others_info.is_todays_pick === true);
            displayNewsFunction(todaysPickList, categoryId);
        }
        else if (sortAndFilter.filterData === 'trending') {
            const trendingList = dataArray.filter(data => data.others_info.is_trending === true);
            displayNewsFunction(trendingList, categoryId);
        }
        else {
            displayNewsFunction(dataArray, categoryId);
        }

    }
    catch (error) {
        console.log(error);
    }

}


const displayNewsFunction = (dataArray, categoryId) => {
    document.getElementById('specific-news-container').textContent = '';
    dataArray.forEach(news => {
        const newsArticle = document.createElement('article');
        newsArticle.classList.add('card', 'md:card-side', 'bg-base-100', 'shadow-xl');
        newsArticle.innerHTML = `
<figure class="p-2 pb-0 md:p-6 md:pr-0"><img class="rounded-xl"
src="${news.thumbnail_url}" alt="${news.title}">
</figure>
<div class="card-body p-4 text-justify">
<h2 class="card-title text-orange-300">${news.title}</h2>
<p class="text-defaultcolor">
${news.details.slice(0, 100)}
</p>
<div class="flex flex-col sm:flex-row gap-2 bg-slate-700 shadow-inner shadow-slate-800 rounded-xl">
    <div class="stat flex gap-2 items-center py-2 px-0 pl-4 sm:pl-2">
        <div class="text-secondary">
            <div class="avatar mt-2">
                <div class="w-14 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                    <img src="${news.author.img}" />
                </div>
            </div>
        </div>
        <div>
            <div class="stat-title">${news.author.name && news.author.name.split(' ').length > 2 ? news.author.name.split(' ').slice(0, 2).join(' ') : news.author.name}</div>
            <div class="stat-desc text-secondary">${news.author.published_date}</div>
        </div>
    </div>
    <!-- devider start -->
    <div class="border border-gray-400 border-t-1 m:border-t-0 sm:border-r-1 sm:my-2">
    </div>
    <!-- devider end -->
    <div class="stat py-2 px-8 sm:px-0">
        <div class="stat-figure text-secondary pr-4 xl:hidden">
            <i class="fa-solid fa-eye text-2xl"></i>
        </div>
        <div class="stat-title">Views</div>
        <div class="stat-value text-secondary text-xl">${news.total_view}</div>
    </div>
</div>
<div class="card-actions flex items-center justify-around sm:justify-between">
    <div class="rating rating-md rating-half">
        <input type="radio" name="rating-${news._id}" class="rating-hidden" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-1" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-2" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-1" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-2" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-1" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-2" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-1" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-2" />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-1"
            checked />
        <input disabled type="radio" name="rating-${news._id}" class="bg-orange-400 mask mask-star-2 mask-half-2" />
        </div>
        <span class="mt-1">${news.rating.number}</span>
    <label onclick="detailsModal('${news._id}')" for="details-modal"
        class="btn btn-info btn-outline btn-circle fa-solid fa-arrow-right text-lg"></label>
</div>
</div>
            `;
        document.getElementById('specific-news-container').appendChild(newsArticle);
    });

    document.getElementById('news-container-child-count').innerText = document.getElementById('specific-news-container').childElementCount;


    const selectSorting = document.getElementById('select-sorting');
    selectSorting.addEventListener('click', function (event) {
        sortAndFilter.sortData = selectSorting.value;
        specificNewsDisplayEach(categoryId);
    })

    // const selectFilterList = document.getElementsByClassName('filter-btn');
    // for (const selectFilter of selectFilterList) {
    //     selectFilter.addEventListener('click', function (event) {
    //         const btnId = selectFilter.classList[0];
    //         console.log(btnId);
    //         // sortAndFilter.filterData = selectSorting.value;
    //         // specificNewsDisplayEach(categoryId);
    //     })
    // }
}

