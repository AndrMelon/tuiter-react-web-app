import PostSummaryList from "./PostSummaryList/index.js";
import exploreItems from "./PostSummaryList/posts.js";

const ExploreComponent = () => {
    return (`
            <div class="row align-items-center">
                    <div class="col-11 pb-2">
                        <i class="fas fa-search ps-3 position-absolute" style="padding-top:12px;"></i>
                        <input type="text" placeholder="Search Twitter" name="search" id="search"
                            class="form-control rounded-pill ps-5">
                    </div>
                    <div class="col-1 ps-0 ">
                        <i class="fas fa-cog fa-2x align-top " style="color: blue"></i>
                    </div>
                </div>
                <ul class="nav mb-2 nav-tabs">
                    <li class="nav-item"><a class="nav-link active" href="">For you</a></li>
                    <li class="nav-item"><a class="nav-link" href="">Trending</a></li>
                    <li class="nav-item"><a class="nav-link" href="">COVID-19</a></li>
                    <li class="nav-item"><a class="nav-link" href="">News</a></li>
                    <li class="nav-item d-sm-none d-xs-none d-md-block"><a class="nav-link" href="">Sports</a></li>
                </ul>

                <div class="bg-image position-relative">
                    <img class="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
                    <div class="position-absolute bottom-0 text-light w-100">
                        <h1 class="p-2 m-0">SpaceX's Starship</h1>
                    </div>
                </div>
           ${PostSummaryList(exploreItems)}
    `);
}
export default ExploreComponent;
