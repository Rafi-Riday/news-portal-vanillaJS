const homeDisplay = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/08`);
        const data = await res.json();
        writeHomeInsideMainContainer(data.data);
    } catch (error) {
        console.log(error);
        error();
    }
}

homeDisplay();

const writeHomeInsideMainContainer = (dataArray) => {
    sortNewsByLatest(dataArray);
    const todaysPick = dataArray.find(data => data.others_info.is_todays_pick === true);
    const trendingList = dataArray.filter(data => data.others_info.is_trending === true);
    const worldNewsList = dataArray.filter(data => data.category_id === "03");
    const entertainmentList = dataArray.filter(data => data.category_id === "05");
    main.innerHTML = `
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <!-- Today's Pick section -->
    <section class="p-4 flex flex-col gap-4 w-full bg-transparent rounded-xl text-sm md:text-base lg:col-span-2">
        <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Today's</b> Pick</h1>
        <label class="card w-full bg-base-100 shadow-2xl image-full cursor-pointer" id="${todaysPick._id}" onclick="detailsModal('${todaysPick._id}')" for="details-modal"">
            <figure class="bg-slate-800"><img src="${todaysPick.image_url}"
                    alt="Shoes" /></figure>
            <div class="card-body bg-gradient-to-t from-[#0009] flex items-center justify-center">
                <br>
                <br>
                <br>
                <br>
                <h2 class="card-title p-2 rounded-lg text-white text-base md:text-text-2xl lg:text-3xl text-center">
                    ${todaysPick.title}
                </h2>
            </div>
        </label>
    </section>
    <!-- Trending section -->
    <section class="p-4 flex flex-col gap-4 w-full rounded-xl text-sm md:text-base lg:row-span-2">
        <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Trending</b> News</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4">
            <!--  -->
            <label
                class="card card-compact bg-slate-700 w-full bg-base-100 shadow-xl cursor-pointer" id="${trendingList[8]._id}" onclick="detailsModal('${trendingList[8]._id}')" for="details-modal"">
                <figure><img src="${trendingList[8].image_url}" alt="${trendingList[8].title}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${trendingList[8].title}</h2>
                    <p>${trendingList[8].details.slice(0, 100)}...</p>
                    <div class="card-actions justify-between">
                        <p><b class="text-orange-300 grow-0">Editor</b> : ${trendingList[8].author.name}</p>
                        <p><b class="text-orange-300 grow-0">Published</b> : ${trendingList[8].author.published_date}</p>
                    </div>
                </div>
            </label>
            <!--  -->
            <label
                class="card card-compact bg-slate-700 w-full bg-base-100 shadow-xl cursor-pointer" id="${trendingList[10]._id}" onclick="detailsModal('${trendingList[10]._id}')" for="details-modal"">
                <figure><img src="${trendingList[10].image_url}" alt="${trendingList[10].title}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${trendingList[10].title}</h2>
                    <p>${trendingList[10].details.slice(0, 100)}...</p>
                    <div class="card-actions justify-between">
                        <p><b class="text-orange-300 grow-0">Editor</b> : ${trendingList[10].author.name}</p>
                        <p><b class="text-orange-300 grow-0">Published</b> : ${trendingList[10].author.published_date}</p>
                    </div>
                </div>
            </label>
            <!--  -->
            <label
                class="card card-compact bg-slate-700 w-full bg-base-100 shadow-xl cursor-pointer" id="${trendingList[15]._id}" onclick="detailsModal('${trendingList[15]._id}')" for="details-modal"">
                <figure><img src="${trendingList[15].image_url}" alt="${trendingList[11].title}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${trendingList[15].title}</h2>
                    <p>${trendingList[15].details.slice(0, 100)}...</p>
                    <div class="card-actions justify-between">
                        <p><b class="text-orange-300 grow-0">Editor</b> : ${trendingList[15].author.name}</p>
                        <p><b class="text-orange-300 grow-0">Published</b> : ${trendingList[15].author.published_date}</p>
                    </div>
                </div>
            </label>
        </div>
    </section>
    <!-- Latest News section -->
    <section class="p-4 flex flex-col gap-4 w-full rounded-xl text-sm md:text-base lg:col-span-2">
        <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Latest</b> News</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 md:gap-4">
            <!--  -->
            <label
                class="card card-compact bg-slate-700 w-full bg-base-100 shadow-xl cursor-pointer" id="${trendingList[0]._id}" onclick="detailsModal('${trendingList[0]._id}')" for="details-modal"">
                <figure><img src="${trendingList[0].image_url}" alt="${trendingList[0].title}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${trendingList[0].title}</h2>
                    <p>${trendingList[0].details.slice(0, 100)}...</p>
                    <div class="card-actions justify-between">
                        <p><b class="text-orange-300 grow-0">Editor</b> : ${trendingList[0].author.name}</p>
                        <p><b class="text-orange-300 grow-0">Published</b> : ${trendingList[0].author.published_date}</p>
                    </div>
                </div>
            </label>
            <!--  -->
            <label
                class="card card-compact bg-slate-700 w-full bg-base-100 shadow-xl cursor-pointer" id="${trendingList[1]._id}" onclick="detailsModal('${trendingList[1]._id}')" for="details-modal"">
                <figure><img src="${trendingList[1].image_url}" alt="${trendingList[10].title}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${trendingList[1].title}</h2>
                    <p>${trendingList[1].details.slice(0, 100)}...</p>
                    <div class="card-actions justify-between">
                        <p><b class="text-orange-300 grow-0">Editor</b> : ${trendingList[1].author.name}</p>
                        <p><b class="text-orange-300 grow-0">Published</b> : ${trendingList[1].author.published_date}</p>
                    </div>
                </div>
            </label>
            <!--  -->
            <label
                class="card card-compact bg-slate-700 w-full bg-base-100 shadow-xl cursor-pointer" id="${trendingList[2]._id}" onclick="detailsModal('${trendingList[2]._id}')" for="details-modal"">
                <figure><img src="${trendingList[2].image_url}" alt="${trendingList[10].title}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${trendingList[2].title}</h2>
                    <p>${trendingList[2].details.slice(0, 100)}...</p>
                    <div class="card-actions justify-between">
                        <p><b class="text-orange-300 grow-0">Editor</b> : ${trendingList[2].author.name}</p>
                        <p><b class="text-orange-300 grow-0">Published</b> : ${trendingList[2].author.published_date}</p>
                    </div>
                </div>
            </label>
            <!--  -->
            <label
                class="card card-compact bg-slate-700 w-full bg-base-100 shadow-xl cursor-pointer" id="${trendingList[3]._id}" onclick="detailsModal('${trendingList[3]._id}')" for="details-modal"">
                <figure><img src="${trendingList[3].image_url}" alt="${trendingList[10].title}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${trendingList[3].title}</h2>
                    <p>${trendingList[3].details.slice(0, 100)}...</p>
                    <div class="card-actions justify-between">
                        <p><b class="text-orange-300 grow-0">Editor</b> : ${trendingList[3].author.name}</p>
                        <p><b class="text-orange-300 grow-0">Published</b> : ${trendingList[3].author.published_date}</p>
                    </div>
                </div>
            </label>
        </div>
    </section>
</div>
<!-- World News section -->
<section class="p-4 flex flex-col gap-4 w-full rounded-xl text-sm md:text-base">
    <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">World</b> News</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!--  -->
        <label class="card w-full hover:w-[95%] hover:h-[95%] mx-auto bg-base-100 shadow-2xl image-full cursor-pointer" id="${worldNewsList[0]._id}" onclick="detailsModal('${worldNewsList[0]._id}')" for="details-modal"">
            <figure><img src="${worldNewsList[0].image_url}" alt="${worldNewsList[0].title}" />
            </figure>
            <div class="card-body bg-gradient-to-b from-[#0006] absolute">
                <div class="card-actions  text-orange-50">
                    <h2 class="card-title p-2 rounded-lg text-sm md:text-base lg:text-lg">Shaquille
                        ${worldNewsList[0].title}
                    </h2>
                </div>
            </div>
        </label>
        <!--  -->
        <label class="card w-full hover:w-[95%] hover:h-[95%] mx-auto bg-base-100 shadow-2xl image-full cursor-pointer" id="${worldNewsList[1]._id}" onclick="detailsModal('${worldNewsList[1]._id}')" for="details-modal"">
            <figure><img src="${worldNewsList[1].image_url}" alt="${worldNewsList[1].title}" />
            </figure>
            <div class="card-body bg-gradient-to-b from-[#0006] absolute">
                <div class="card-actions  text-orange-50">
                    <h2 class="card-title p-2 rounded-lg text-sm md:text-base lg:text-lg">Shaquille
                        ${worldNewsList[1].title}
                    </h2>
                </div>
            </div>
        </label>
        <!--  -->
        <label class="card w-full hover:w-[95%] hover:h-[95%] mx-auto bg-base-100 shadow-2xl image-full cursor-pointer" id="${worldNewsList[3]._id}" onclick="detailsModal('${worldNewsList[3]._id}')" for="details-modal"">
            <figure><img src="${worldNewsList[3].image_url}" alt="${worldNewsList[3].title}" />
            </figure>
            <div class="card-body bg-gradient-to-b from-[#0006] absolute">
                <div class="card-actions  text-orange-50">
                    <h2 class="card-title p-2 rounded-lg text-sm md:text-base lg:text-lg">Shaquille
                        ${worldNewsList[3].title}
                    </h2>
                </div>
            </div>
        </label>
    </div>
    <button id="03" onclick="pageBtnActivate(this)" class="self-center btn btn-info">View
        All&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></button>
</section>
<!-- Entertainment section -->
<section class="p-4 w-full rounded-xl text-sm md:text-base flex flex-col gap-4">
    <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Entertainment</b></h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- Entertainment card 1 article -->
        <label
            class="p-4 w-full bg-slate-700 shadow-2xl rounded-xl text-sm md:text-base lg:col-span-2 card md:card-side bg-base-100 flex-col-reverse md:flex-row cursor-pointer" id="${entertainmentList[0]._id}" onclick="detailsModal('${entertainmentList[0]._id}')" for="details-modal"">
            <!-- article -->
            <div class="card-body text-justify">
                <h2 class="card-title text-orange-300 text-base md:text-2xl">${entertainmentList[0].title}</h2>
                <p class="text-defaultcolor text-xs md:text-sm">
                    ${entertainmentList[0].details.slice(0, 100)}
                </p>
                <div class="card-actions">
                    <div class="stat flex items-center py-0 px-0">
                        <div class="text-secondary">
                            <div class="avatar mt-2">
                                <div class="w-10 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                    <img src="${entertainmentList[0].author.img}" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="stat-title">${entertainmentList[0].author.name}</div>
                            <div class="stat-desc text-secondary">${entertainmentList[0].author.published_date}</div>
                        </div>
                    </div>
                </div>
            </div>
            <figure class="p-2 pb-0 md:p-6 md:pl-0"><img class="rounded-xl lg:w-[150px]"
                    src="${entertainmentList[0].thumbnail_url}" alt="${entertainmentList[0].title}">
            </figure>
        </label>
        <!-- Entertainment card 2 article -->
        <label
            class="p-4 w-full bg-slate-700 shadow-2xl rounded-xl text-sm md:text-base lg:row-span-2 card md:card-side bg-base-100 flex-col md:flex-row lg:flex-col cursor-pointer" id="${entertainmentList[1]._id}" onclick="detailsModal('${entertainmentList[1]._id}')" for="details-modal"">
            <!-- article -->
            <figure class="p-2 pb-0 md:p-6 md:pr-0 lg:p-6 lg:pb-0"><img class="rounded-xl"
                    src="${entertainmentList[1].thumbnail_url}" alt="${entertainmentList[1].title}">
            </figure>
            <div class="card-body text-justify">
                <h2 class="card-title text-orange-300 text-base md:text-2xl">${entertainmentList[1].title}</h2>
                <p class="text-defaultcolor text-xs md:text-sm">
                    ${entertainmentList[1].details.slice(0, 100)}
                </p>
                <div class="card-actions">
                    <div class="stat flex items-center py-0 px-0">
                        <div class="text-secondary">
                            <div class="avatar mt-2">
                                <div class="w-10 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                    <img src="${entertainmentList[1].author.img}" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="stat-title">${entertainmentList[1].author.name}</div>
                            <div class="stat-desc text-secondary">${entertainmentList[1].author.published_date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
        <!-- Entertainment card 3 article -->
        <label
            class="p-4 w-full bg-slate-700 shadow-2xl rounded-xl text-sm md:text-base lg:col-span-2 card md:card-side bg-base-100 flex-col-reverse md:flex-row cursor-pointer" id="${entertainmentList[2]._id}" onclick="detailsModal('${entertainmentList[2]._id}')" for="details-modal"">
            <!-- article -->
            <div class="card-body text-justify">
                <h2 class="card-title text-orange-300 text-base md:text-2xl">${entertainmentList[2].title}</h2>
                <p class="text-defaultcolor text-xs md:text-sm">
                    ${entertainmentList[2].details.slice(0, 100)}
                </p>
                <div class="card-actions">
                    <div class="stat flex items-center py-0 px-0">
                        <div class="text-secondary">
                            <div class="avatar mt-2">
                                <div class="w-10 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                    <img src="${entertainmentList[2].author.img}" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="stat-title">${entertainmentList[2].author.name}</div>
                            <div class="stat-desc text-secondary">${entertainmentList[2].author.published_date}</div>
                        </div>
                    </div>
                </div>
            </div>
            <figure class="p-2 pb-0 md:p-6 md:pl-0"><img class="rounded-xl lg:w-[150px]"
                    src="${entertainmentList[2].thumbnail_url}" alt="${entertainmentList[2].title}">
            </figure>
        </label>
    </div>
    <button id="05" onclick="pageBtnActivate(this)" class="self-center btn btn-info">View
        All&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></button>
</section>
`;
    document.getElementById('loading-home').classList.add('hidden');
}

