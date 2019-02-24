const path = require(`path`);

module.exports = {
  mode: `development`, // Режим сборки
  entry: `./src/main.js`, // Точка входа приложения
  output: {
    // Настройка выходного файла
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  }
};

// Подключаем sourcemaps
module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  // output: { ...},
  devtool: `source-map`
};

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  // output: { ...},
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.js$/, // Проверка типов файлов, над которыми будет работать лоадерами
        use: `babel-loader` // Лоадер, который будет применен
      }
    ]
  }
};
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  // output: { ...},
  devtool: `source-map`,
  // module: { ...},
  plugins: [
    // Расширяем функциональность плагинами
    new HtmlWebpackPlugin({
      // Создаем инстанс плагина
      template: `./src/index.html` // ...передав в него необходимые ему параметры
    })
  ]
};
// server

module.exports = {
  entry: `./src/main.js`,
  // output: { ...},
  // module: { ...},
  // plugins: [...],
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`), // Где искать сборку
    publicPath: "http: //localhost:/3030/", // Веб адрес сборки
    hot: true, // Автоматическая перезагрузка страницы
    compress: true // Сжатие
  }
};
