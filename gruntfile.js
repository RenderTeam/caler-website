module.exports = function ( grunt ) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "render/index.html": ["views/index.jade"],
          "render/contacto.html": ["views/contacto.jade"],
          "render/caler.html": ["views/caler.jade"],
          "render/servicios.html": ["views/servicios.jade"],
          "render/capacitaciones.html": ["views/capacitaciones.jade"],
          "render/inscripcion.html": ["views/capacitaciones/inscripcion.jade"]
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jade');
};