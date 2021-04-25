module.exports = {
    plugin: {
        autoprefixer: {
            // browsers: [
            //     'Android >= 4.0',
            //     'iOS >= 8'
            // ]
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: [
                '*'
            ]
        },
        'postcss-px2rem': {
            remUnit: 37.5
        }
    }
}