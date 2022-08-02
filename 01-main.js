document.querySelector("button").addEventListener("click", function (){
    let url1 = "https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg";

    downloadImage(url1, image => output.append(image),error => alert(error.message));
});

function downloadImage(url, success, error) {
    let image = new Image(500);
    image.src = url;

    image.onload = function () {
        // Запускаем callback функцию success в случае успешной загрузки изображения
        if (success && typeof success == "function")
            success(image);
    };

    image.onerror = function (e) {
        // Запускаем callback функцию error в случае успешной загрузки изображения
        if (error && typeof error == "function")
            error(new Error("Не удалось загрузить изображение " + this.src));
    }
}

