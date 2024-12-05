function changebutton(value) {
    let image = document.getElementById('on'); // Get the image element
    let imageSrc;

    if (value === 'ON') {
        imageSrc = "vaizdai/on.png";
    } else if (value === 'OFF') {
        imageSrc = "vaizdai/off.png";
    }

    image.src = imageSrc; // Update the image source
}
