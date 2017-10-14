$(function() {
    $(document).on('click touchend', '.dropdown-toggle', function(e) {
        e.preventDefault();

        $header = $(this).parent();
        $dropdown = $header.find('.dropdown');

        if ($dropdown.hasClass('closed')) {
            $header.find('.arrow-down')
                   .removeClass('arrow-down')
                   .addClass('arrow-up');

            $dropdown.removeClass('closed');
        } else {
            $header.find('.arrow-up')
                   .removeClass('arrow-up')
                   .addClass('arrow-down');

            $dropdown.addClass('closed');
        }
    });
});
