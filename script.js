document.addEventListener('DOMContentLoaded', function() {
    const poemElement = document.getElementById('poem');
    const poemText = `
        Поцеловать бы нежно-нежно,
        Прижать покрепче бы к себе...
        С тобою рядом безмятежно,
        Я так хочу сейчас к тебе.

        Тебя с днем новым поздравляю,
        Привет я шлю тебе большой.
        Я утра доброго желаю
        И так скучаю всей душой.
    `; // Обязательно замени этот текст на свой стих

    let index = 0;
    const speed = 50; // Скорость печати (в миллисекундах на символ)

    function typeWriter() {
        if (index < poemText.length) {
            poemElement.textContent += poemText.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
