/* 
 * Copyright (C) 2014 raznara
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */


var proyectoView = function (strClase) {
    this.clase = strClase;
};
proyectoView.prototype = new view('proyecto');
proyectoView.prototype.getClassNameProyecto = function () {
    return this.getClassName() + "Vista";
};
var oProyectoView = new proyectoView('proyecto');

proyectoView.prototype.loadFormValues = function (valores, campos) {
    this.doFillForm(valores, campos);
};
proyectoView.prototype.getFormValues = function () {
    var valores = [];
    var disabled = $('#proyectoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#proyectoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};
proyectoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#proyectoForm #obj_alumno_button').unbind('click');
    $("#proyectoForm #obj_alumno_button").click(function () {
        var oControl = oAlumnoControl; //para probar dejar proyecto
        //vista('proyecto').cargaModalBuscarClaveAjena('#modal01', "proyecto");

        $("#proyectoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de alumno'), "", thisObject.getFormFooter(), true);
        $('#proyectoForm').append(thisObject.getEmptyModal());
        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oAlumnoModel, oAlumnoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_alumno_id').val(id).change();
            $('#obj_alumno_desc').text(decodeURIComponent(oAlumnoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');
        }, oAlumnoModel, oAlumnoView);
        return false;
    });
    $('#proyectoForm #obj_tipoproyecto_button').unbind('click');
    $("#proyectoForm #obj_tipoproyecto_button").click(function () {
        var oControl = oTipoproyectoControl;
        $("#proyectoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de proyecto'), "", thisObject.getFormFooter(), true);
        $('#proyectoForm').append(thisObject.getEmptyModal());
        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipoproyectoModel, oTipoproyectoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipoproyecto_id').val(id).change();
            $('#obj_tipoproyecto_desc').text(decodeURIComponent(oTipoproyectoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');
        }, oTipoproyectoModel, oTipoproyectoView);
        return false;
    });
    $('#contenido_button').unbind('click');
    $('#contenido_button').click(function () {
        //cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
        cabecera = thisObject.getFormHeader('Edición de contenidos');
        //pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';                        
        pie = '<a class="btn btn-primary" href="http://creoleparser.googlecode.com/svn/trunk/creoleparser/test_pages/CheatSheetPlus.html">Sintaxis</a>';
        pie += thisObject.getFormFooter();
        contenido = '<div class="row"><div class="col-md-6">';
        contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
        contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
        contenido += '</div>';
        $('#proyectoForm').append(thisObject.getEmptyModal());
        util().loadForm('#modal01', cabecera, contenido, pie, true);
        var texto = $('#contenido').val();
        $('#contenidomodal').val(texto);
        util().creoleParse(texto, $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
        $('#contenidomodal').keyup(function () {
            util().creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
        });
        return false;
    });
};
proyectoView.prototype.okValidation = function (f) {
    $('#proyectoForm').on('success.form.bv', f);
};
/*MOSTRAR PROYECTOS*/
proyectoView.prototype.getProyectosList = function (json) {

    var long = json.list.length;
    listado = "<div class=' main proyectos col-md-12'>";
    /*listado +="<div class='separador'>Proyectos de DAW</div>";*/
    contador = 0;
    for (i = 0; i < long; i++) {
        id = json.list[i].id;
        titulo = json.list[i].titulo;
        image = json.list[i].portada;
        nombre = json.list[i].obj_alumno.nombre;
        apellidos = json.list[i].obj_alumno.apellidos;
        descripcion = json.list[i].descripcion;
        tags = json.list[i].tags;
        fecha = json.list[i].fecha;
        imageeen = json.list[i].imagen;


        /*listado +="<div class='caja-proyecto col-sm-4'>";
         listado +="<div class='image-proyecto'>";
         listado +="<a id='" + id + "'  href='jsp#/" + this.clase + "/mostrar/" + id + "'><img class='img-responsive' src='"+image+"'/></a>";
         listado +="</div>";
         listado +="</div>";*/


        listado += "<div class='proyecto col-md-5 col-xs-12'>";
        listado += "<div class='row'>";
        listado += "<div class='logo col-md-5 col-xs-12'>";
        listado += "<img src='"+image+"'></div>";
        listado += "<div class='informaProd col-md-7 col-xs-12'>";
        listado += "<span> " + fecha + "</span>";
        listado += "<div class='titulo'>";
        listado += "<h3>" + titulo + "</h3>";
        listado += "<p>" + nombre + " " + apellidos + "</p>";
        listado += "</div>";
       /* listado += "<div class='desc hidden-xs'>";
       listado += "<p>" + descripcion + "</p>";
        listado += "</div>";*/
        listado += "<div class='irProyect'>";
        listado += '<a class="btn" id="' + id + '"  href="jsp#/' + this.clase + '/mostrar/' + id + '">Leer mar</a>';
        listado += "</div>";
        listado += "</div>";
        listado += "</div>";
        listado += "</div>";

    }


    listado += "</div>";


    return listado;

};

proyectoView.prototype.getProyectosContenido = function (json) {



    listado = "<div class='single-proyecto row'>";


    id = json.id;
    titulo = json.titulo;
    imagen = json.portada;
    memoria = json.memoria;
    nombreA = json.obj_alumno.nombre;
    apellidosA = json.obj_alumno.apellidos;
    nombreT = json.obj_alumno.obj_tutor.nombre;
    apellidosT = json.obj_alumno.obj_tutor.apellidos;
    descripcion = json.descripcion;
    tags = json.tags;
    fecha = json.fecha;
    ciclo = json.obj_alumno.obj_ciclo.nombre;
    
    listado = "<div class='row contenido-single'>";
    listado += "<div class='col-md-4 single-titulo'><h1>"+titulo+"</h1></div>";
    listado += "<div class='single-titulo-extra col-md-8'></div>";
    listado += "<div class='row single-columnas'>";
    listado += "<div class='col-md-8 single-infor'>";
    listado += "<img src='"+imagen+"'><br/>";
    listado += "<div class='descripcion-single'>";
    listado += "<h3>Descripción</h3>";
    listado += "<p>"+descripcion+"</p>";
    listado += "</div>";


    listado += "</div>";
    listado += "<div class='col-md-4 single-extra-inf'>";
    listado += "<h3>Información</h3>";
    listado += "<div class='caja-extra-inf'>";
    listado += "<p><span>Autor:</span><br/>"+nombreA +" "+ apellidosA+"</p>";
    listado += "<p><span>Ciclo:</span><br/>"+ciclo+"</p>";
    listado += "<p><span>Tutor de proyecto:</span><br/>"+nombreT +" "+ apellidosT+"</p>";
    listado += "<p><span>Fecha:</span><br/>"+fecha+"</p>";
    listado += "</div>";
    listado += "<div class='seccion-memoria'>";
    listado += "<h3>Memoria del proyecto</h3>";
    listado += "<a href='"+memoria+"' target='_blank'><div class='single-memoria'>Descargar Memoria en .PDF <span class='glyphicon glyphicon-download-alt'></span></div></a>";
    listado += "</div>";
    listado += "</div>";
    listado += "</div>";



    listado += "</div>";
    return listado;

};

