const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
    filter.addEventListener("click", async () => {

        const category = filter.dataset.category;

        const response = await fetch(
            `/listings/filter/${category}`
        );

        const listings = await response.json();

        let html = "";

        listings.forEach((listing) => {

            html += `
            <div class="col">
                <a href="/listings/${listing._id}"
                   class="listing-link">

                    <div class="card listing-card">

                        <img
                        src="${listing.image.url}"
                        class="card-img-top">

                        <div class="card-body">

                            <h5 class="card-title">
                                ${listing.title}
                            </h5>

                            <span>
                                ₹${listing.price.toLocaleString("en-IN")}
                            </span>

                            <span class="text-muted">
                                / night
                            </span>

                        </div>
                    </div>

                </a>
            </div>
            `;
        });

        document.getElementById(
            "listings-container"
        ).innerHTML = html;
    });
});