import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from 'webpack'
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const {isDevMode} = options

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ],
    }

    const cssLoader = {
        test: /\.module.css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isDevMode ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                },
            },
        ],
    }

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        }
    }

    return [
        assetLoader,
        cssLoader,
        babelLoader,
        svgrLoader
    ]
}
