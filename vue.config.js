const path = require('path')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

function resolve(dir) {
	return path.join(__dirname, dir)
}

const name = 'vue Admin'

const port = process.env.port || process.env.npm_config_port || 9527

module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',
	// lintOnSave: false,
	lintOnSave: process.env.NODE_ENV === 'development',
	productionSourceMap: false,

	devServer: {
		port: port,
		overlay: {
			warning: false,
			error: true
		}
	},

	css: {
		loaderOptions: {
			sass: {
				prependData: ``
			}
		}
	},

	configureWebpack: {
		name: name,

		resolve: {
			alias: {
				'@': resolve('src'),
				_v: resolve('src/views'),
				_c: resolve('src/components'),
				_a: resolve('src/assets')
			}
		},

		plugins: [
			AutoImport({
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			})
		]
	}
}
