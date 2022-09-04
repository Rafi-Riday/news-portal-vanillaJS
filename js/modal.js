const detailsModalContainer = document.getElementById('details-modal-container');
const detailsModal = (newsId) => {
    fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
        .then(res => res.json())
        .then(news => {
            detailsModalContainer.innerHTML = `
                <label onclick="detailsModalContainer.textContent = ''" for="details-modal" class="btn btn-sm btn-circle bg-tomato absolute right-2 top-2">✕</label>
                <figure class="px-0 pt-0">
                    <img src="${news.data[0].image_url}" alt="${news.data[0].title}" class="rounded-xl" />
                </figure>
                <div class="card-body text-justify">
                    <div class="flex flex-row gap-2">
                        <b class="row-span-2 font-berkshire text-5xl">"</b>
                        <h2 class="row-span-8 card-title text-base text-white">
                            ${news.data[0].title}
                        </h2>
                        <b class="row-span-2 font-berkshire text-5xl">"</b>
                    </div>
                    <hr>
                    <p class="text-sm"><u class="text-white font-bold">Details</u> : 
                        ${news.data[0].details}
                    </p>
                    <hr>
                    <p class="text-sm"><u class="text-white font-bold">Total View</u> : <span class="text-orange-300">${news.data[0].total_view}</span></p>
                    <p class="text-sm"><u class="text-white font-bold">Ratings</u> : <span class="text-orange-300">${news.data[0].rating.number}</span></p>
                    <p class="text-sm"><u class="text-white font-bold">Badge</u> : <span class="text-orange-300">${news.data[0].rating.badge}</span></p>
                </div>
        `;
        })
}