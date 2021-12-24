module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Raleway': ['Raleway', 'sans-serif'],
        'OpenSans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'AzulEscuro': '#070439',
        'AzulDesaturado': '#585989',
        'AzulBrilho': '#3065F8',
        'CianoModerado': '#3C9F8F',
        'CinzaAzulado': '#F6F6FE',
        'CinzClaro': '#BFBFBF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
