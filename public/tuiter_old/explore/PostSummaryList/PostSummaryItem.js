const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
        <a class="row align-items-center" href="">
            <div class="col-6">
                <span class="text-muted">${post.topic}</span><br>
                <b class="">${post.userName} <i class="fas fa-check-circle"></i></b><span class="text-muted">-
                    ${post.time}</span>
                </br>
                <b class="">${post.title}
                </b>
            </div>
            <div class="col-6">
                <img class="img-fluid rounded-2 float-end"
                    style="width: 100px; height:100px; object-fit: cover;"
                    src="${post.image}">
            </div>
        </a>
    </li>
    `);
}
export default PostSummaryItem;