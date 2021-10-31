sr.reveal('.image', {
    origin: 'bottom',
    distance: '100px',
    duration: 800,
    easing: 'ease',
    mobile: true,
    reset: true,
    viewFactor: 0.2,
});

function preload(imageArray, index) {
        index = index || 0;
        if (imageArray && imageArray.length > index) {
            var img = new Image ();
            img.onload = function() {
                preload(imageArray, index + 1);
            }
            img.src = images[index][‘serving_url’];
}

preload(images);
