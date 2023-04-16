module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			['babel-preset-expo', { jsxRuntime: 'automatic' }],
			['@babel/preset-react', { runtime: 'automatic' }],
		],
		plugins: [
			['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
		],
	};
};
