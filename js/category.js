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
        <div id="news-container-child-count" class="my-5 p-4 w-full bg-slate-700 rounded-xl text-sm md:text-base"></div>
        <!-- sorting section -->
        <section class="my-5 p-4 w-full bg-slate-700 rounded-xl text-sm md:text-base flex justify-between">
            <!-- sorting option using select-option, does not work in phone browser -->
            <!--
            <select id="select-sorting" class="select select-info">
            <option value="latest" selected class="hidden">Sort By</option>
            <option value="latest">Latest</option>
            <option value="views">Views</option>
            <option value="ratings">Ratings</option>
            </select>
            -->
            <!-- sorting option using btn -->
            <div class="dropdown">
                <label tabindex="0" class="bg-slate-900 hover:bg-slate-900 border-info hover:border-info btn m-1">Sort By&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></label>
                <div tabindex="0" class="bg-slate-900 border-2 border-opacity-75 border-info dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                    <button id="latest" class="select-sorting btn btn-ghost">Latest</button>
                    <button id="views" class="select-sorting btn btn-ghost">Views</button>
                    <button id="ratings" class="select-sorting btn btn-ghost">Ratings</button>
                </div>
            </div>
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
            <button id="loading" class="xl:col-span-2 btn btn-lg bg-transparent loading">loading</button>
        </div>
    `;

    // sorting option using select-option, does not work in phone browser
    // const selectSortingA = document.getElementById('select-sorting');
    // selectSortingA.addEventListener('click', function (event) {
    //     sortAndFilter.sortData = selectSortingA.value;
    //     specificNewsDisplayEach(categoryId);
    // })

    const selectSortingBtnList = document.getElementsByClassName('select-sorting');
    for (const selectSortingBtn of selectSortingBtnList) {
        selectSortingBtn.addEventListener('click', function () {
            sortAndFilter.sortData = selectSortingBtn.getAttribute('id');
            specificNewsDisplayEach(categoryId);
        })
    }

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
        error();
    }

}

const displayNewsFunction = (dataArray, categoryId) => {
    document.getElementById('specific-news-container').innerHTML = '<button id="loading" class="xl:col-span-2 btn btn-lg bg-transparent loading">loading</button>';
    dataArray.forEach(news => {
        const newsArticle = document.createElement('article');
        newsArticle.classList.add('card', 'md:card-side', 'bg-base-100', 'shadow-xl');
        newsArticle.innerHTML = `
<figure class="p-2 pb-0 md:p-6 md:pr-0"><img class="rounded-xl"
src="${news.thumbnail_url}" alt="${news.title}">
</figure>
<div class="card-body p-4 text-left">
<h2 class="card-title text-orange-300">${news.title}</h2>
<p class="text-defaultcolor">
${news.details.slice(0, 100)}... <label onclick="detailsModal('${news._id}')" for="details-modal" class="text-white cursor-pointer underline"><i>See More</i></label>
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
            <div class="stat-title">${news.author.name && news.author.name.split(' ').length > 2 ? news.author.name.split(' ').slice(0, 2).join(' ') : news.author.name === null || news.author.name === '' ? 'No Name' : news.author.name}</div>
            <div class="stat-desc text-secondary">${news.author.published_date === null ? 'No Date' : news.author.published_date}</div>
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
        <div class="stat-value text-secondary text-xl">${news.total_view === null ? '0' : news.total_view}</div>
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

    document.getElementById('loading').classList.add('hidden');

    document.getElementById('news-container-child-count').innerText = `${document.getElementById('specific-news-container').childElementCount - 1} items found for this news category`;

    if (document.getElementById('specific-news-container').childElementCount === 1) {
        document.getElementById('news-container-child-count').innerHTML = `<span class="sm:text-2xl">Sorry, no item found for this news category <i class="fa-regular fa-face-frown"></i></span>`;
        document.getElementById('specific-news-container').classList.add('hidden');
    }
    else {
        document.getElementById('specific-news-container').classList.remove('hidden');
    }
}

