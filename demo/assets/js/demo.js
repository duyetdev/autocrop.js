var img = $('img')[0];

AutoCrop.crop(img, {debug: true}, function(result) {
    console.log(img.src, result);
});