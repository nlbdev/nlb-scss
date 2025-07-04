module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('autoprefixer'),
    env === 'production' ? require('cssnano')({ preset: 'default' }) : false
  ].filter(Boolean)
}); 