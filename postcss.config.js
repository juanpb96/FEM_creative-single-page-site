module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({ stage: 1 }),
        // This doesn't support future css, enable once everything is ready to be deployed
        // require('cssnano'), 
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}