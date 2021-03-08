// Позволяет комфортно работать с путями
const path = require('path')
// Позволяет взаимодействовать с HTML
const HTMLWebpackPlugin = require('html-webpack-plugin')
// Очистка папки dist от устарелых файлов-данных
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// Дает возможность просто копировать файлы в папке src и переносить в папку dist
const CopyPlugin = require('copy-webpack-plugin')
// Аналогичный обработчик обычному loader-css, только с возможностью хешить название файлов и другое
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// Оптимизация (сжатие) файлов CSS на выходе в папке dist
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// Оптимизация (сжатие) файлов на выходе в папке dist
const TerserWebpackPlugin = require('terser-webpack-plugin')

// проверка какая сейчас среда (разработка или продакшн)
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

// Функция для оптимизации
const optimization = () => {

    // импортируя библиотеки в разных файлах она создает огромный JS код для всех файлов
    // где используется эта библиотека - сокращает методом указание библиотеки в отдельном файле с
    // префиксом vendors для всех файлов которые используют эту библиотеку на выходе в папке dist)
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    // при сборке в режиме production минимизирует код на выходе в папку dist
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(), // сжатие CSS файлов
            new TerserWebpackPlugin() // сжатие
        ]
    }

    return config
}

// Формирование название файлов в зависимоси от сборки dev/prod - использование HASH
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

// Универсальный css-loader для всех возможных стилей (css, less, scss, sass) принимая различный extra
const cssLoaders = extra => {
    // с плагином MiniCssExtractPlugin()
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            /*hmr: isDev, // когда будет происходить изменение без перезагрузки стр. (в режиме разработки)
            reloadAll: true*/
        }
    }, 'css-loader']

    if (extra) loaders.push(extra)

    return loaders
}

// Сокращаем дублирование кода options для js / ts / jsx
const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) opts.presets.push(preset)

    return opts
}

module.exports = {
    // Инфо где лежат все исходники нашего приложения (заменяет использование ./src на ./)
    context: path.resolve(__dirname, 'src'), // absolute path

    // В каком режиме собрать
    mode: 'development', // в режиме разработки

    // Откуда начать (точки входа)
    entry: {
        main: ['@babel/polyfill', './index.js'], // главная точка входа,  polyfill - для ( async await )
        analytics: './analytics.js', // точка входа для стороннего скрипта
        analyticsTypeScript: './analyticsTypeScript.ts' // точка входа для стороннего скрипта
    },

    // Куда и как сложить
    output: {
        // В какой файл сложить (по-умолчанию)
        // filename: bundle.js - стандартное название (его не используем)
        // [name] - паттерн для динамического создание названия файла
        // [contenthash] - паттерн динамического хеша для файла
        filename: filename('js'),

        // Куда сложить
        path: path.resolve(__dirname, 'dist') // __dirname - текущая директория, в папку dist
    },

    // Дает возможность не прописывать разширение импортных файлов
    resolve: {
        // По умолчанию умеет искать 'js' и 'json'
        /*extensions: ['js', 'json', 'css', 'png']*/

        // сокращает введение пути к файлам заменяя на сокращенные например @model = 'src/model'
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },

    // Оптимизация кода
    optimization: optimization(),

    // указывает где именно произошла ошибка (указывает файл js) который с остальными файлами компил в bundle.js
    devtool: isDev ? 'source-map' : '',

    // webpack-dev-server (Самостоятельно обновляет страничку после внесение изменений)
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 3000
    },

    // Добавление плагинов
    plugins: [
        // подключаем ./src/index.html который превратится в ./dist/index.html
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        // очистка папки dist
        new CleanWebpackPlugin(),
        // Копирование файла с src в папку dist при каждой сборке
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],

    // Обьявление лоудеров для считывание различных файлов кроме (js и json которые станд для webpack)
    module: {
        rules: [

            /*{ // Вместо него будем использовать с плагином MiniCssExtractPlugin() подключаем ниже
                test: /\.css$/, // для всех файлов с расширением .css применять use:[]
                use: ['style-loader', 'css-loader'] // считывание начинается с права на лево (важен порядок)
            },*/

            // с плагином MiniCssExtractPlugin(), но все ровно будет применять по другому с исп. cssLoaders()
            /*{
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        /!*hmr: isDev, // когда будет происходить изменение без перезагрузки стр. (в режиме разработки)
                        reloadAll: true*!/}
                }, 'css-loader']
            },*/

            // cssLoaders() являеться универсальным для css, less, sass, scss
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.(sass|scss)$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/, // для всех расширений применять use:[]
                use: ['file-loader'] // использование плагина file-loader
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'] // использование плагина file-loader
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }
}