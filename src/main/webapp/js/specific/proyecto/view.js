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
proyectoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-th-list"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-file"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-trash"></i></a>';
    botonera += '</div></div>';
    return botonera;
};
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
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de proyecto'), "", thisObject.getFormFooter(), true);
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
    listado = "<div class=' main proyectosMostrar col-md-12'>";
    imagen = "'css/images/maintenance.jpg'";
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
        listado += "<div class='proyectosCaja ver view-third col-md-4'>";
        listado += "<img src='" + image + "'>";
        listado += "<div class='mask'>";
        listado += "<h2>" + titulo + "</h2>";
        listado += "<p>" + descripcion + "</p>";
        listado += '<a class="info" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '">Leer mar</a>';;
        listado += "</div></div>";
    }

    listado += "</div>";
    return listado;
  
};

