const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

module.exports = {
	context: srcDir,
	entry: "./index.jsx",
	output: {
		path: distDir,
		filename: "bundle.js",
		publicPath: "/"
	},
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom": "preact/compat"
		},
		modules: [
			path.resolve(__dirname, "node_modules/"),
			path.resolve(__dirname, "src/"),
			path.resolve(__dirname, "./")
		],
		extensions: [
			".js",
			".jsx",
			".html",
			".jpg",
			".jpeg",
			".svg",
			".png",
			".woff2",
			".woff"
		]
	},
	devServer: {
		// https: true,
		historyApiFallback: true,
		contentBase: srcDir,
		publicPath: "/",
		hot: true,
		host: "0.0.0.0"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext]",
							emitFile: false
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				],
				exclude: /node_modules/
			}
		]
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: "all"
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([
			"crossdomain.xml",
			"favicon.ico",
			"manifest.webmanifest",
			"robots.txt",
			"sitemap.xml",
			{
				from: `${srcDir}/assets/`,
				to: `${distDir}/assets/` // Ugly as shit, but is a fix until we manage to get paths to work correctly again
			}
		]),
		new HtmlWebpackPlugin({
			template: path.join(srcDir, "index.html"),
			path: distDir,
			filename: "index.html",
			minify: {
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		new PreloadWebpackPlugin({
			rel: "preload",
			include: "allChunks"
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: "defer",
			preload: /\.js$/
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		// new webpack.optimize.LimitChunkCountPlugin({
		//	maxChunks: 1
		// }),
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			directoryIndex: "index.html",
			navigateFallback: "index.html",
			skipWaiting: true,
			swDest: "sw.js",
			runtimeCaching: [
				{
					urlPattern: /\.jpg$/,
					handler: "CacheFirst"
				}
			]
		}),
		new LodashModuleReplacementPlugin({})
		// new BundleAnalyzerPlugin()
	],
	performance: {
		maxEntrypointSize: 256000,
		maxAssetSize: 256000,
		hints: "warning"
	}
};
