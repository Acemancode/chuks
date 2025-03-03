document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        document.querySelectorAll('.dropdown-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('show');
            }
        });

        content.classList.toggle('show');
    });
});
