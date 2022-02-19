function randomSort() {
    var linkItems = $('.card').toArray();
    var linkItemsHTML = new Array();
    for (var i in linkItems) {
        linkItemsHTML.push(linkItems[i].innerHTML);
    }

    var arr = new Array();
    for (var i = 0; i < linkItems.length; ++i) {
        arr.push(i)
    }
    for (var i = 1; i < arr.length; ++i) {
        rand = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }

    $('.card').html(function (index) { return linkItemsHTML[arr[index]]; });
}
