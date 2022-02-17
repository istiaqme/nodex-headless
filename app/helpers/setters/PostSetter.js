function postObject (data) {
    return {
        title : data.title,
        details : data.details
    }
}

function newPostList(list) {
    let newList = [];
    for(let i = 0; i < list.length; i++){
        newList.push(postObject(list[i]))
    }
    return newList;
}

module.exports = {
    newPostList
}