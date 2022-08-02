function asyncOperation(callback) {
    setTimeout(function () {
        let result = Math.floor(Math.random() * 5001);
        if (callback) callback(result);
    }, 2000)
}

document.querySelector("button").addEventListener("click", function () {
    asyncOperation(result => alert(result));
});