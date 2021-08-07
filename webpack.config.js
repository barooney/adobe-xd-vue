const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
	entry: "./src/main.js",
	output: {
		path: __dirname,
		filename: 'main.js',
		libraryTarget: "commonjs2",
		publicPath: ""
	},
	devtool: 'inline-source-map',
	mode: 'development',
	externals: {
		application: "application",
		commands: "commands",
		interactions: "interactions",
		scenegraph: "scenegraph",
		uxp: "uxp",
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img',
						}
					},
				],
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};