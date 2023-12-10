document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.querySelectorAll('.left_list');
    var previouslySelectedImg = null;

    radioButtons.forEach(function (radioButton) {
        var imgElement = radioButton.querySelector('img');

        radioButton.addEventListener('click', function () {
            radioButtons.forEach(function (btn) {
                btn.querySelector('img').classList.remove('selected');
            });

            imgElement.classList.add('selected');
            previouslySelectedImg = imgElement;
        });
    });

    document.addEventListener('click', function (event) {
        var clickedElement = event.target;
        if (!clickedElement.closest('.left_list')) {
            radioButtons.forEach(function (btn) {
                btn.querySelector('img').classList.remove('selected');
            });
            if (previouslySelectedImg) {
                previouslySelectedImg.classList.add('selected');
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var labels = document.querySelectorAll('.left_list');

    labels.forEach(function (label) {
        label.addEventListener('click', function () {
            labels.forEach(function (l) {
                l.querySelector('.label-text').classList.remove('moved');
            });

            label.querySelector('.label-text').classList.add('moved');
        });
    });

    document.addEventListener('click', function (event) {
        var clickedElement = event.target;
        if (!clickedElement.closest('.left_list')) {
            labels.forEach(function (l) {
                l.querySelector('.label-text').classList.remove('moved');
            });
        }
    });
});
