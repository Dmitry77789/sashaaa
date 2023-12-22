const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const button = item.querySelector('.accordion-button');

    button.addEventListener('click', () => {
        const isOpen = button.classList.contains('is-open');

        // Закрыть все элементы аккордеона
        accordionItems.forEach((i) => {
            i.querySelector('.accordion-button').classList.remove('is-open');
            i.querySelector('.accordion-content').style.maxHeight = null;
            i.querySelector('.toggle-icon').textContent = '+';
        });

        // Если элемент был закрыт - открываем его
        if (!isOpen) {
            button.classList.add('is-open');
            const accordionContent = button.nextElementSibling;
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            button.querySelector('.toggle-icon').textContent = '×';
        }
    });
});
