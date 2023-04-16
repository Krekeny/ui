const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
	entry: './web/test6styled.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css'],
		alias: {
			components: path.resolve(__dirname, '/components/'),
			'react-native$': 'react-native-web',
		},
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: [
					path.resolve(__dirname, 'web'),
					path.resolve(__dirname, 'components'),
				],
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										targets: 'defaults',
									},
								],
								'@babel/preset-react',
							],
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Krui Web Components',
			template: './web/index.html',
		}),
	],
};
