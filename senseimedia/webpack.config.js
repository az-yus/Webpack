let path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

let mode = 'development';

// console.log(process.env.NODE_ENV); - проверка в какой режиме работает(dev или prod)

if(process.env.NODE_ENV === 'production'){
	mode = 'production';
}
module.exports = {
	mode: mode,
	entry: { // - откуда взять главый js файл
		index: path.resolve(__dirname, 'src/index.js') // метод склеивает dirname(возвращает абсол путь) и нужный файл
	},
	output: { // - куда положить
		filename: 'js/[name].[contenthash].js', // - создает папку js и кладет туда главный js файл
		clean: false, // - очищает папку дист от старых js файлов
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		hot: true,
		static: {
			directory: path.join(__dirname, '/dist/')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.pug'),
			inject: 'body'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name][contenthash].css'
		}),
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
			  	{ 
					from: path.resolve(__dirname, 'src/favicon.jpg'), 
					to: path.resolve(__dirname, 'dist')
				},
			],
		}),
	],
	module: {
		rules: [ // - объект правил лоадеров, лоадеры нужны чтобы раболи импорты в главный js файл
		  {
			test: /\.html$/i,
			loader: "html-loader",
		  },
		  {
			test: /\.(sass|scss|css)$/i,
			use: [
				(mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
				"css-loader",
				"postcss-loader",
				"sass-loader"
			]
		  },
		  {
			test: /\.(png|jpeg|jpg|gif|svg)$/i,
			type: 'asset/resource',
			generator: {
				filename: 'images/[hash][ext]'
			}
		  },
		  {
			test: /\.(woff|woff2|ttf|eot|otf)$/i,
			type: 'asset/resource',
			generator: {
				filename: 'fonts/[hash][ext]'
			}
		  },
		  {
			test: /\.pug$/i,
			loader: "pug-loader",
			exclude: /node_modules/,
		  },
		  {
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
			  loader: "babel-loader",
			  options: {
				presets: ['@babel/preset-env']
			  }
			}
		  }
		],
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["mozjpeg", {quality: 85}],
							["pngquant", [50, 100]],
							["svgo", [50, 100]]
						]
					}
				},
				generator: [
					{
						preset: 'webp',
						implementation: ImageMinimizerPlugin.imageminGenerate,
						options: {
							plugins: ["imagemin-webp"]
						}
					}
				]
			})
		],
	}	
}