const writeHomeInsideMainContainer = () => {
    main.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- Today's Pick section -->
            <section
                class="p-4 flex flex-col gap-4 w-full bg-transparent rounded-xl text-sm md:text-base lg:col-span-2">
                <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Today's</b> Pick</h1>
                <div class="card w-full bg-base-100 shadow-2xl image-full cursor-pointer">
                    <figure class="bg-slate-800"><img src="https://i.ibb.co/WNrB5d7/unsplash-Eh-Tc-C9s-YXsw-9.png"
                            alt="Shoes" /></figure>
                    <div class="card-body bg-gradient-to-t from-[#0009] flex items-center justify-center">
                        <br>
                        <br>
                        <br>
                        <br>
                        <h2
                            class="card-title p-2 rounded-lg text-white text-base md:text-text-2xl lg:text-3xl text-center">
                            Shaquille
                            O'Neal
                            auctions a 1000 size
                            22
                            Reeboks for
                            $999.32 each!</h2>
                    </div>
                </div>
            </section>
            <!-- Trending section -->
            <section class="p-4 flex flex-col gap-4 w-full rounded-xl text-sm md:text-base lg:row-span-2">
                <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Trending</b> News</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4">
                    <!--  -->
                    <div
                        class="card card-compact bg-slate-700 w-full hover:w-[97%] mx-auto hover:h-[97%] bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-between">
                                <p><b class="text-orange-300 grow-0">Editor</b> : Editor Name</p>
                                <p><b class="text-orange-300 grow-0">Publish Date</b> : date</p>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div
                        class="card card-compact bg-slate-700 w-full hover:w-[97%] mx-auto hover:h-[97%] bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-between">
                                <p><b class="text-orange-300 grow-0">Editor</b> : Editor Name</p>
                                <p><b class="text-orange-300 grow-0">Publish Date</b> : date</p>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div
                        class="card card-compact bg-slate-700 w-full hover:w-[97%] mx-auto hover:h-[97%] bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-between">
                                <p><b class="text-orange-300 grow-0">Editor</b> : Editor Name</p>
                                <p><b class="text-orange-300 grow-0">Publish Date</b> : date</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="self-center btn btn-info">See all&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-arrow-right"></i></button>
            </section>
            <!-- Latest News section -->
            <section class="p-4 flex flex-col gap-4 w-full rounded-xl text-sm md:text-base lg:col-span-2">
                <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Latest</b> News</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 md:gap-4">
                    <!--  -->
                    <div
                        class="card card-compact bg-slate-700 w-full hover:w-[97%] mx-auto hover:h-[97%] bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-between">
                                <p><b class="text-orange-300 grow-0">Editor</b> : Editor Name</p>
                                <p><b class="text-orange-300 grow-0">Publish Date</b> : date</p>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div
                        class="card card-compact bg-slate-700 w-full hover:w-[97%] mx-auto hover:h-[97%] bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-between">
                                <p><b class="text-orange-300 grow-0">Editor</b> : Editor Name</p>
                                <p><b class="text-orange-300 grow-0">Publish Date</b> : date</p>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div
                        class="card card-compact bg-slate-700 w-full hover:w-[97%] mx-auto hover:h-[97%] bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-between">
                                <p><b class="text-orange-300 grow-0">Editor</b> : Editor Name</p>
                                <p><b class="text-orange-300 grow-0">Publish Date</b> : date</p>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div
                        class="card card-compact bg-slate-700 w-full hover:w-[97%] mx-auto hover:h-[97%] bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-between">
                                <p><b class="text-orange-300 grow-0">Editor</b> : Editor Name</p>
                                <p><b class="text-orange-300 grow-0">Publish Date</b> : date</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="self-center btn btn-info">See all&nbsp;&nbsp;&nbsp;<i
                        class="fa-solid fa-arrow-right"></i></button>
            </section>
        </div>
        <!-- World News section -->
        <section class="p-4 flex flex-col gap-4 w-full rounded-xl text-sm md:text-base">
            <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">World</b> News</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!--  -->
                <div class="card w-full hover:w-[95%] hover:h-[95%] mx-auto bg-base-100 shadow-2xl image-full">
                    <figure><img src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png" alt="Shoes" />
                    </figure>
                    <div class="card-body bg-gradient-to-b from-[#0006] absolute">
                        <div class="card-actions  text-orange-50">
                            <h2 class="card-title p-2 rounded-lg text-sm md:text-base lg:text-lg">Shaquille
                                O'Neal
                                auctions a 1000 size
                                22
                                Reeboks for
                                $999.32 each!</h2>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="card w-full hover:w-[95%] hover:h-[95%] mx-auto bg-base-100 shadow-2xl image-full">
                    <figure><img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="Shoes" />
                    </figure>
                    <div class="card-body bg-gradient-to-b from-[#0006] absolute">
                        <div class="card-actions  text-orange-50">
                            <h2 class="card-title p-2 rounded-lg text-sm md:text-base lg:text-lg">Shaquille
                                O'Neal
                                auctions a 1000 size
                                22
                                Reeboks for
                                $999.32 each!</h2>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="card w-full hover:w-[95%] hover:h-[95%] mx-auto bg-base-100 shadow-2xl image-full">
                    <figure><img src="https://i.ibb.co/xh57pkr/unsplash-Eh-Tc-C9s-YXsw-1.png" alt="Shoes" />
                    </figure>
                    <div class="card-body bg-gradient-to-b from-[#0006] absolute">
                        <div class="card-actions  text-orange-50">
                            <h2 class="card-title p-2 rounded-lg text-sm md:text-base lg:text-lg">Shaquille
                                O'Neal
                                auctions a 1000 size
                                22
                                Reeboks for
                                $999.32 each!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <button class="self-center btn btn-info">See all&nbsp;&nbsp;&nbsp;<i
                    class="fa-solid fa-arrow-right"></i></button>
        </section>
        <!-- Entertainment section -->
        <section class="p-4 w-full rounded-xl text-sm md:text-base flex flex-col gap-4">
            <h1 class="text-white text-2xl md:text-3xl"><b class="font-berkshire text-tomato">Entertainment</b></h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <!-- Entertainment card 1 article -->
                <article
                    class="p-4 w-full bg-slate-700 shadow-2xl rounded-xl text-sm md:text-base lg:col-span-2 card md:card-side bg-base-100 flex-col-reverse md:flex-row">
                    <!-- article -->
                    <div class="card-body text-justify">
                        <h2 class="card-title text-orange-300 text-base md:text-2xl">New album is released!</h2>
                        <p class="text-defaultcolor text-xs md:text-sm">Wednesday, August 24, 2022 | Tag Cloud Tags:
                            Biden, EU,
                            Euro,
                            Europe,
                            Joe Biden, Military, News,
                            Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) - U.S. President
                            Joe...
                        </p>
                        <div class="card-actions">
                            <div class="stat flex items-center py-0 px-0">
                                <div class="text-secondary">
                                    <div class="avatar mt-2">
                                        <div
                                            class="w-10 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                            <img src="https://placeimg.com/128/128/people" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="stat-title">Tasks done</div>
                                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure class="p-2 pb-0 md:p-6 md:pl-0"><img class="rounded-xl lg:w-[150px]"
                            src="https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png" alt="Album">
                    </figure>
                </article>
                <!-- Entertainment card 2 article -->
                <article
                    class="p-4 w-full bg-slate-700 shadow-2xl rounded-xl text-sm md:text-base lg:row-span-2 card md:card-side bg-base-100 flex-col md:flex-row lg:flex-col">
                    <!-- article -->
                    <figure class="p-2 pb-0 md:p-6 md:pr-0 lg:p-6 lg:pb-0"><img class="rounded-xl"
                            src="https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png" alt="Album">
                    </figure>
                    <div class="card-body text-justify">
                        <h2 class="card-title text-orange-300 text-base md:text-2xl">New album is released!</h2>
                        <p class="text-defaultcolor text-xs md:text-sm">Wednesday, August 24, 2022 | Tag Cloud Tags:
                            Biden, EU,
                            Euro,
                            Europe, Joe Biden...
                        </p>
                        <div class="card-actions">
                            <div class="stat flex items-center py-0 px-0">
                                <div class="text-secondary">
                                    <div class="avatar mt-2">
                                        <div
                                            class="w-10 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                            <img src="https://placeimg.com/128/128/people" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="stat-title">Tasks done</div>
                                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <!-- Entertainment card 3 article -->
                <article
                    class="p-4 w-full bg-slate-700 shadow-2xl rounded-xl text-sm md:text-base lg:col-span-2 card md:card-side bg-base-100 flex-col-reverse md:flex-row">
                    <!-- article -->
                    <div class="card-body text-justify">
                        <h2 class="card-title text-orange-300 text-base md:text-2xl">New album is released!</h2>
                        <p class="text-defaultcolor text-xs md:text-sm">Wednesday, August 24, 2022 | Tag Cloud Tags:
                            Biden, EU,
                            Euro,
                            Europe,
                            Joe Biden, Military, News,
                            Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) - U.S. President
                            Joe...
                        </p>
                        <div class="card-actions">
                            <div class="stat flex items-center py-0 px-0">
                                <div class="text-secondary">
                                    <div class="avatar mt-2">
                                        <div
                                            class="w-10 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                                            <img src="https://placeimg.com/128/128/people" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="stat-title">Tasks done</div>
                                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure class="p-2 pb-0 md:p-6 md:pl-0"><img class="rounded-xl lg:w-[150px]"
                            src="https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png" alt="Album">
                    </figure>
                </article>
            </div>
            <button class="self-center btn btn-info">See all&nbsp;&nbsp;&nbsp;<i
                    class="fa-solid fa-arrow-right"></i></button>
        </section>
    `;
}

writeHomeInsideMainContainer();
