
/*
 * GET home page.
 */

exports.index = function ( req, res ){ 
  res.render('index'); };
  
exports.contacto = function ( req, res ){
  res.render('contacto'); };

exports.caler = function ( req, res ){
  res.render('caler'); };

exports.servicios = function ( req, res ){
  res.render('servicios'); };

exports.capacitaciones = function ( req, res ){
  res.render('capacitaciones'); };

exports.inscripcion = function ( req, res ){
  res.render('capacitaciones/inscripcion'); };

exports.asesoriasISO17025 = function ( req, res ){
  res.render('asesorias/ISO17025'); };

exports.asesoriasISO15189 = function ( req, res ){
  res.render('asesorias/ISO15189'); };

exports.asesoriasISO9001 = function ( req, res ){
  res.render('asesorias/ISO9001'); };

exports.cursosISO17025 = function ( req, res ){
  res.render('cursos/ISO17025'); };

exports.cursosISO15189 = function ( req, res ){
  res.render('cursos/ISO15189'); };

exports.auditoriasISO17025 = function ( req, res ){
  res.render('auditorias/ISO17025'); };

exports.auditoriasISO15189 = function ( req, res ){
  res.render('auditorias/ISO15189'); };