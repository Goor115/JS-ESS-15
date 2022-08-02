function asyncOperation() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let result = Math.floor(Math.random() * 5001);
            resolve(result);
        }, 2000);
    });
}

    document.querySelector("button").addEventListener("click", function () {
        asyncOperation()
            .then(result => alert(result));
    });