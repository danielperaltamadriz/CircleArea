(function () {
    function calculateRadio() {
        var radio = Number(prompt('Please, write the radio for the circle: '));
        area = Math.PI * (Math.pow(radio, 2));
        console.log('The area is: ', area);
    }
    return calculateRadio();
})()