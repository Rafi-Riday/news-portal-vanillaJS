const writeCategoryInsideMainContainer = (thisParameter) => {
    main.innerHTML = `
        <div class="my-5 p-4 w-full bg-slate-700 rounded-xl text-sm md:text-base">4 items found for category
            Entertainment
        </div>
        <!-- sorting section -->
        <section class="my-5 p-4 w-full bg-slate-700 rounded-xl text-sm md:text-base flex justify-between">
            <!-- sorting option -->
            <select class="select select-info">
                <option selected class="hidden">Sort By</option>
                <option>Views</option>
                <option>Latest</option>
                <option>Ratings</option>
            </select>
            <!-- todays pick vs trading -->
            <div class="flex flex-col sm:flex-row gap-2">
                <button onclick="sortBoolianBtn(this, 'boolian-btn')"
                    class="boolian-btn btn btn-info text-xs md:text-base lg:text-xs 2lg:text-sm"><i
                        class="fa-solid fa-retweet"></i></button>
                <button onclick="sortBoolianBtn(this, 'boolian-btn')"
                    class="boolian-btn btn btn-info btn-outline text-xs md:text-base lg:text-xs 2lg:text-sm">Today's
                    Pick</button>
                <button onclick="sortBoolianBtn(this, 'boolian-btn')"
                    class="boolian-btn btn btn-info btn-outline text-xs md:text-base lg:text-xs 2lg:text-sm">Trending</button>
            </div>
        </section>
        <div
            class="max-w-3xl xl:max-w-7xl mx-auto my-5 p-4 w-full bg-slate-700 rounded-2xl text-sm md:text-base flex flex-col xl:flex-row gap-4">
            <!-- article -->
            <article class="card md:card-side bg-base-100 shadow-xl">
                <figure class="p-2 pb-0 md:p-6 md:pr-0"><img class="rounded-xl"
                        src="https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png" alt="Album">
                </figure>
                <div class="card-body p-4 text-justify">
                    <h2 class="card-title text-orange-300">New album is released!</h2>
                    <p class="text-defaultcolor">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
                        Joe Biden, Military, News,
                        Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) - U.S. President Joe...
                    </p>
                    <div class="flex flex-col sm:flex-row gap-2 bg-slate-700 shadow-inner shadow-slate-800 rounded-xl">
                        <div class="stat flex gap-2 items-center py-2 px-0 pl-2">
                            <div class="text-secondary">
                                <div class="avatar mt-2">
                                    <div class="w-14 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/128/128/people" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="stat-title">Tasks done</div>
                                <div class="stat-desc text-secondary">31 tasks remaining</div>
                            </div>
                        </div>
                        <!-- devider start -->
                        <div class="border border-gray-400 border-t-1 m:border-t-0 sm:border-r-1 sm:my-2">
                        </div>
                        <!-- devider end -->
                        <div class="stat py-2 px-0">
                            <div class="stat-figure text-secondary hidden">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <div class="stat-figure text-secondary pr-4 xl:hidden">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <div class="stat-title">Page Views</div>
                            <div class="stat-value text-secondary text-xl">2.6M</div>
                        </div>
                    </div>
                    <div class="card-actions flex items-center justify-around sm:justify-between">
                        <div class="rating rating-md rating-half">
                            <input type="radio" name="rating-{id}" class="rating-hidden" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                        </div>
                        <label for="details-modal"
                            class="btn btn-info btn-outline btn-circle fa-solid fa-arrow-right text-lg"></label>
                    </div>
                </div>
            </article>
            <!-- article -->
            <article class="card md:card-side bg-base-100 shadow-xl">
                <figure class="p-2 pb-0 md:p-6 md:pr-0"><img class="rounded-xl"
                        src="https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png" alt="Album">
                </figure>
                <div class="card-body p-4 text-justify">
                    <h2 class="card-title text-orange-300">New album is released!</h2>
                    <p class="text-defaultcolor">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
                        Joe Biden, Military, News,
                        Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) - U.S. President Joe...
                    </p>
                    <div class="flex flex-col sm:flex-row gap-2 bg-slate-700 shadow-inner shadow-slate-800 rounded-xl">
                        <div class="stat flex gap-2 items-center py-2 px-0 pl-2">
                            <div class="text-secondary">
                                <div class="avatar mt-2">
                                    <div class="w-14 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/128/128/people" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="stat-title">Tasks done</div>
                                <div class="stat-desc text-secondary">31 tasks remaining</div>
                            </div>
                        </div>
                        <!-- devider start -->
                        <div class="border border-gray-400 border-t-1 m:border-t-0 sm:border-r-1 sm:my-2">
                        </div>
                        <!-- devider end -->
                        <div class="stat py-2 px-0">
                            <div class="stat-figure text-secondary hidden">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <div class="stat-figure text-secondary pr-4 xl:hidden">
                                <i class="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <div class="stat-title">Page Views</div>
                            <div class="stat-value text-secondary text-xl">2.6M</div>
                        </div>
                    </div>
                    <div class="card-actions flex items-center justify-around sm:justify-between">
                        <div class="rating rating-md rating-half">
                            <input type="radio" name="rating-{id}" class="rating-hidden" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                            <input disabled type="radio" name="rating-{id}"
                                class="bg-orange-400 mask mask-star-2 mask-half-2" />
                        </div>
                        <label for="details-modal"
                            class="btn btn-info btn-outline btn-circle fa-solid fa-arrow-right text-lg"></label>
                    </div>
                </div>
            </article>
        </div>
    `;
}


