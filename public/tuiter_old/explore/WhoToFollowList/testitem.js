import WhoToFollowList from "./index.js";
import who from "./who.js";

function exploreComponent() {

    $('#wd-explore').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${WhoToFollowList(who)}
   `);
}
$(exploreComponent);