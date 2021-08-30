// const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = {
    distDir: 'build',
};
// module.exports = withSass();
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
