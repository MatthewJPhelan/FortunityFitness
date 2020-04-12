const path = require("path");

module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    lintOnSave: true,
    chainWebpack: config => {
        config
            .entry("app")
            .clear()
            .add("./Project/main.ts")
            .end();
        config.resolve.alias
            .set("@", path.join(__dirname, "./Project"))
    },

    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import '@/Styles/colours.scss';
                    @import '@/Styles/variables.scss';
                    @import '@/Styles/mixins.scss';
                    @import '@/Styles/animations.scss';
                    @import '@/Styles/main.scss';
                    @import '@/Styles/icons.scss';
                `
            }
        }
    }
};