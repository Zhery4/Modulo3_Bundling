import path from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js",".ts",".jsx", ".tsx"]
    },
    entry: {
        app: './index.tsx',
    },
    output: {
        filename: '[name].[chunkhash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|jsx|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            scriptLoading: 'blocking',
            favicon: './assets/favicon.ico'
        }),
    ],

}