document.querySelector("button").addEventListener("click", function () {
    let url1 = "https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg";
    let url2 = "https://images-assets.nasa.gov/image/PIA22312/PIA22312~orig.jpg";
    let url3 = "https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg-Ошибка";


    downloadImage(url1)
        .then(image => {
            document.body.append(image);
            return downloadImage(url2);
        })
        .then(image => {
            document.body.append(image);
            return downloadImage(url3);
        })
        .then(image => {
            document.body.append(image);
        })
        .catch(error => alert(error.message));

});

function downloadImage(url) {
    let promise = new Promise(function (resolve, reject) {
        let image = new Image(500);
        image.src = url;

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function (e) {
            reject(new Error("Не удалось загрузить изображение " + this.src));
        }
    });

    return promise;
}