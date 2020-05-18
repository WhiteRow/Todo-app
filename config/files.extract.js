module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(woff|woff2|ttf|otf|eot)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: './fonts/[name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(ico)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: './favicon.ico'
							}
						}
					]
				}
			]
		}
	};
};
