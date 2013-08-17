
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Caler' });
};

exports.contacto = function(req, res){
  res.render('contacto',{ title: 'Caler'});
};

exports.caler = function(req, res){
  res.render('caler', 
    { 
      title: 'Caler',
      data_slide_1: 'Misión',
      data_slide_2: 'Visión',
      data_slide_3: 'Valores',
      data_slide_4: 'Logo',
      firstDescription : 'Proporcionar de forma personalizada servicios especializados de capacitación, auditorías,  asesoría e implementación de sistemas de gestión,  a los organismos de evaluación de la conformidad, con el fin de lograr una relación mutuamente beneficiosa, en la que CALER Consultoría sea coparticipe en el logro de  sus objetivos.',
      firstExtendedDescription: '',
      firstPunchline   : '',
      fourthDescription : 'Descripción del logo',
      fourthExtendedDescription: '',
      fourthPunchline   : '',
      secondDescription : 'Llegar a ser en México y Centro América',
      secondExtendedDescription: '',
      secondPunchline   : '“Su solución en sistemas de gestión”',
      thirdDescription : 'descripción de el stuff',
      thirdExtendedDescription: 'extensión de la descripción',
      thirdPunchline   : '“Prepárate hoy, actúa mañana, revisa tu resultados y cambia la forma de hacer las cosas”.'
    }
  );
};

exports.servicios = function(req, res){
  res.render('servicios', { title: 'Caler' });
};

exports.capacitaciones = function(req, res){
  res.render('capacitaciones', { title: 'Caler' });
};

exports.calendario = function(req, res){
  res.render('calendario', { title: 'Caler' });
};

exports.calendario = function(req, res){
  res.render('calendario', { title: 'Caler' });
};

exports.asesoriasISO17025 = function(req, res){
  res.render('asesorias/ISO17025', {title: 'Caler'});
};

exports.asesoriasISO15189 = function(req, res){
  res.render('asesorias/ISO15189', {title: 'Caler'});
};

exports.asesoriasISO9001 = function(req, res){
  res.render('asesorias/ISO9001', {title: 'Caler'});
};

exports.cursosISO17025 = function(req, res){
  res.render('cursos/ISO17025', {title: 'Caler'});
};

exports.cursosISO15189 = function(req, res){
  res.render('cursos/ISO15189', {title: 'Caler'});
};

exports.auditoriasISO17025 = function(req, res){
  res.render('auditorias/ISO17025', {title: 'Caler'});
};

exports.auditoriasISO15189 = function(req, res){
  res.render('auditorias/ISO15189', {title: 'Caler'});
};

exports.inscripcion = function(req, res){
  res.render('capacitaciones/inscripcion', {title: 'Caler'});
};

