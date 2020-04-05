const path = require("path");

module.exports = {
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
                    @import "@/Project/Styles/index.scss";
                `
            }
        }
    }
};