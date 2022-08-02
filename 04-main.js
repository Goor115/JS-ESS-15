function download() {
    return new Promise(function (resolve, reject) {
        let random = Math.floor(Math.random() * 5001);
        setTimeout(() => resolve("downloaded data"), random);
    });
}

document.querySelector("button").addEventListener("click", function () {
    let promises = [];
    let parallelOperationCount = 5;

    for (let i = 0; i < parallelOperationCount; i++) {
        promises.push(download());
    }

    Promise.all(promises).then(() => alert("Всей файлы скачаны"));
});