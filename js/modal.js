const detailsModal = (newsId) => {
    const detailsModalContainer = document.getElementById('details-modal-container');
    fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
        .then()
        .then()
    detailsModalContainer.innerHTML = `
        <label for="details-modal" class="btn btn-sm btn-circle bg-tomato absolute right-2 top-2">✕</label>
        <figure class="px-0 pt-0">
            <img src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body text-justify">
            <div class="flex flex-row gap-2">
                <b class="row-span-2 font-berkshire text-5xl">"</b>
                <h2 class="row-span-8 card-title text-base text-white">Biden Pledges
                    Nearly $3 Billion To
                    Ukraine In Largest U.S.
                    Military Aid Package
                    Yet !</h2>
                <b class="row-span-2 font-berkshire text-5xl">"</b>
            </div>
            <hr>
            <p class="text-sm"><u class="text-white font-bold">Details</u> : Wednesday, August 24, 2022 | Tag
                Cloud Tags:
                Biden, EU, Euro, Europe,
                Joe Biden,
                Military, News,
                Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) - U.S. President Joe Biden
                has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence
                day six months after Russia invaded the country.'The United States of America is committed to
                supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of
                that commitment, I am proud to announce our biggest tranche of security assistance to date:
                approximately $2.</p>
            <hr>
            <p class="text-sm"><u class="text-white font-bold">Total View</u> : <span class="text-orange-300">488</span></p>
            <p class="text-sm"><u class="text-white font-bold">Ratings</u> : <span class="text-orange-300">4.5</span></p>
            <p class="text-sm"><u class="text-white font-bold">Badge</u> : <span class="text-orange-300">Excellent</span></p>
        </div>
`;
}