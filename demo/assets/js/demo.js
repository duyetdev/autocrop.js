var img = $('img');
var t = performance.now();
AutoCrop.crop(img, {}, function(result) {
    console.log(img.src, result);
    var crop = result.topCrop,
        canvas = $('<canvas>')[0],
        ctx = canvas.getContext('2d');
    canvas.width = options.width;
    canvas.height = options.height;
    ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
    $(img)
        .after(canvas)
        .parent()
        .append($('<p>').text(JSON.stringify(crop.score)));
});
