module.exports = {
    mode: "production",
    configureWebpack: config => {
        config.optimization = {
            concatenateModules: false,
            providedExports: false,
            usedExports: false
        };
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            hash: 'sha512',
                            digest: 'hex',
                            name: '[hash].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            optimizationLevel: 7,
                            interlaced: false
                        }
                    }
                ]
            }
        ]
    }
}
