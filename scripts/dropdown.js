$(function() {
    var header = document.querySelector('.mobile-header');
    if (header === null) {
        console.error('Could not find mobile header.');
        return;
    }

    header.addEventListener('click', function(e) {
        e.preventDefault();

        if (header.classList.contains('closed'))
            header.classList.remove('closed');
        else
            header.classList.add('closed');
    });
});
