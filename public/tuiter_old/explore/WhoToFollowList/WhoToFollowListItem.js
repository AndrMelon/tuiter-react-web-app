const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
    <a href="explore/index.html" class="row align-items-center">
        <div class="col-3">
            <img class="img-fluid rounded-circle" style="object-fit: cover;"
                src="${who.avatarIcon}">
        </div>
        <div class="col-4 p-0 text-nowrap position-relative" style="z-index: 2000;">
            <span>${who.userName} <i class="fas fa-check-circle"></i> </span></br>
            <span>${who.handle}</span>
        </div>
        <div class="col-5 ">
            <button class="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
    </a>
</li>
    `);
}
export default WhoToFollowListItem;