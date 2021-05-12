const withTM = require("next-transpile-modules")(["next-slicezone"]);
const withCSS = require('@zeit/next-css');
module.exports = withCSS({/* my next config */})
module.exports = withTM();
