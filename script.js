document.addEventListener("DOMContentLoaded", function() {
    const stickers = document.querySelectorAll('.sticker');
    stickers.forEach(sticker => {
        // Генерация случайных значений для наклона и позиции
        const randomX = Math.random() * 100; // Случайная позиция по оси X
        const randomY = Math.random() * 100; // Случайная позиция по оси Y
        const randomRotation = Math.random() * 30 - 15; // Случайный угол от -15 до 15 градусов

        // Применение стилей
        sticker.style.left = `${randomX}vw`;
        sticker.style.top = `${randomY}vh`;
        sticker.style.transform = `rotate(${randomRotation}deg)`;
    });
});
