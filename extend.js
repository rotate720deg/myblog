function extend (obj, isDeep) {
    var object = {};
    for (let i in obj) {
        object[obj[i]] = obj[i]
        if (isDeep) {

        }
    }
}

var a = {
    b: {
        c: 1
    }
}
