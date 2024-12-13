module.exports = {
    filenameHashing: false,
    configureWebpack: config => {
        optimization = {
            concatenateModules: false,
            providedExports: false,
            usedExports: false
        }
    }
}