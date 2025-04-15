document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const poemElement = document.getElementById('poem');
    const now = new Date();
    const hour = now.getHours();

    let greetingText = '';
    if (hour >= 5 && hour < 12) {
        greetingText = 'С добрым утром, моя любимая!';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Добрый день, солнышко!';
    } else if (hour >= 18 && hour < 23) {
        greetingText = 'Добрый вечер, моя радость!';
    } else {
        greetingText = 'Доброй ночи, ангел мой!';
    }

    greetingElement.textContent = greetingText;

    // Красивый стих (можешь заменить на свой)
    const poemText = `
        Лучи рассвета нежно будят мир,
        И птицы песней утро начинают.
        Пусть этот день подарит много сил,
        И сердце счастьем берега омывает.

        Твоя улыбка — солнца яркий свет,
        Что разгоняет утреннюю тень.
        Прекрасней в мире девушки нет,
        Ты мой восторг, ты мой счастливый день!
    `;

    poemElement.textContent = poemText;
});
