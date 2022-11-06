import WhoToFollowListItem from "./WhoToFollowListItem.js";


const WhoToFollowList = (whoList) => {
    var output = "";
    for (var i in whoList) {
        output += WhoToFollowListItem(whoList[i]);
    }
    return (`<ul class="list-group">
        ${output}
    </ul>`);
}
export default WhoToFollowList;