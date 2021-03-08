const scripts = {
    // сборка в режиме разработке (обычный режим)
    "dev": "webpack --mode develpent",

    // сборка продакшн версии (минифицированый)
    "build": "webpack --mode production",

    // Следит за изминением файлов (не завершая процесс зборки)
    "watch": "webpack --mode development --watch"
}


const devDependencies = {
    // Очистка всех старых файлов которые сформировал webpack в папке dist
    "clean-webpack-plugin": "^3.0.0",

    // Дает возможность работать с различными файлами (типа .png и т.д.)
    "file-loader": "^6.2.0",

    // Соединяет webpack с нашим текущим ./src/index.html и создает новый в ./dist/index.html
    "html-webpack-plugin": "^5.2.0",

    // Использование webpack
    "webpack": "^5.24.3",

    // Возможность использование терминала для команд webpack
    "webpack-cli": "^4.5.0"
}

const dependencies = {
    // Нормальзирует базовые стили под различные браузеры
    "normalize.css": "^8.0.1"
}