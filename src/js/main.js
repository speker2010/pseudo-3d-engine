function Engine() {
    console.log('engine')
}

Engine.prototype.cl = function () {
    var argumentsLength = arguments.length;
    for (var i = 0; i < argumentsLength; i++) {
        console.log(arguments[i]);
    }
    console.log(arguments);
};
$(document).ready(function () {
    var container = document.querySelector('#display-container');
});
