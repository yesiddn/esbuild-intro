require('esbuild').build({ // se le pasa un objecto con la configuración del proyecto
  entryPoints: ['src/index.tsx'], // archivo de entrada
  bundle: true, // se le indica que se va a generar un archivo de salida
  minify: true, // se le indica que se va a minificar el archivo de salida
  sourcemap: true, // se le indica que se va a generar un archivo de sourcemap
  outfile: 'dist/bundle.js', // archivo de salida
}).catch(() => process.exit(1)) // si hay un error se cierra el proceso