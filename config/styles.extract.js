const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(sc|sa)ss$/,
					use: [
						{
							loader: 'style-loader'
						},
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('cssnano'),
									require('autoprefixer'),
								]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								implementation: require('sass'),
								sourceMap: true
							}
						}
					]
				}
			]
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles/[name].css'
			})
		]
	};
};
