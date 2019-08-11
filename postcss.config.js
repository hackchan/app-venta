// assets/postcss.config.js
module.exports = {
    plugins: {
     
      "postcss-import": {},
     /* "stylelint": {},*/
      "postcss-font-magician": {},
      //'postcss-custom-properties': {preserve: true},
      'postcss-preset-env':{
        
        stage: 4,
        browsers: [
          '> 1%',
          'Android >= 4.4',
          'IOS >= 7',
          'ie >= 9'
        ],
        features: {
          'nesting-rules': true,
          'color-mod-function': true,
          'alpha-hex-colors': true
         },
        autoprefixer: {
          grid: true,
          flexbox: true
      },
      preserve: false, 
      //Valor por defecto de "true". Se asemeja a customProperties en cssnext.
      //cambiar a false para notar el cambio.
      calc: true,
      },
      'postcss-apply':{},
      'postcss-custom-media':{
        preserve: true,
      },
      'postcss-custom-selectors':{},
      'css-mqpacker':{},
      'cssnano':{}

    }
  }

