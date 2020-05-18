const stylelint = require('stylelint');
const stylelintConfig = require('../.stylelintrc.json');
const postcssBrowserReporter = require('postcss-browser-reporter');

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
									stylelint(stylelintConfig),
									postcssBrowserReporter
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
		}
	};
};
