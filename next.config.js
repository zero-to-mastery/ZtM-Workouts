// module.exports = {
//   webpack: (config) => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }
//
//     return config
//   }
// }

// Took this example from their docs about putting it on gh
// https://github.com/zeit/next.js/blob/canary/examples/gh-pages/next.config.js

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    },
    assetPrefix: !debug ? '/ZtM-Workouts/' : ''
}
