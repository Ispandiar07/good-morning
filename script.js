document.addEventListener('DOMContentLoaded', function() {
    const poemElement = document.getElementById('poem');
    const poemText = `
        Поцеловать бы нежно-нежно,<br>
        Прижать покрепче бы к себе...<br>
        С тобою рядом безмятежно,<br>
        Я так хочу сейчас к тебе.<br><br>
        Тебя с днем новым поздравляю,<br>
        Привет я шлю тебе большой.<br>
        Я утра доброго желаю<br>
        И так скучаю всей душой.
    `;

    let index = 0;
    const speed = 50; // Скорость печати (в миллисекундах на символ)

    function typeWriter() {
        if (index < poemText.length) {
            poemElement.innerHTML += poemText.charAt(index); // Используем innerHTML для обработки <br>
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
