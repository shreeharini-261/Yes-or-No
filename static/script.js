document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('moveButton');

    document.addEventListener('mousemove', function(event) {
        moveButton(event, noButton);
    });

    function moveButton(event, button) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        var buttonRect = button.getBoundingClientRect();
        var buttonX = buttonRect.left + buttonRect.width / 2;
        var buttonY = buttonRect.top + buttonRect.height / 2;

        var distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));

        if (distance < 100) {
            moveButtonToRandomPosition(button);
        }
    }

    function moveButtonToRandomPosition(button) {
        var randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
        var randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));

        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }
});
function handleYes() {
    window.location.href = "/date";
}