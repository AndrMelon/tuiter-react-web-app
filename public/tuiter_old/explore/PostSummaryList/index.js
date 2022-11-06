import PostSummaryItem from "./PostSummaryItem.js";


const PostSummaryList = (postList) => {
    var output = "";
    for (var i in postList) {
        output += PostSummaryItem(postList[i]);
    }
    return (`<ul class="list-group">
        ${output}
    </ul>`);
}
export default PostSummaryList;