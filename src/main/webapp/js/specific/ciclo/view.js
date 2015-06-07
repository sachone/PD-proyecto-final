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


var cicloView = function (strClase) {
    this.clase = strClase;
};
cicloView.prototype = new view('ciclo');
cicloView.prototype.getClassNameCiclo = function () {
    return this.getClassName() + "Vista";
};
var oCicloView = new cicloView('ciclo');



cicloView.prototype.loadFormValues = function (valores, campos) {
    this.doFillForm(valores, campos);
};

cicloView.prototype.getFormValues = function () {
    var valores = [];
    var disabled = $('#cicloForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#cicloForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

cicloView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#cicloForm #obj_estado_button').unbind('click');
    $("#cicloForm #obj_estado_button").click(function () {
        var oControl = oEstadoControl;  //para probar dejar ciclo
        //vista('ciclo').cargaModalBuscarClaveAjena('#modal01', "ciclo");

        $("#cicloForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de ciclo'), "", thisObject.getFormFooter(), true);

        $('#cicloForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oEstadoModel, oEstadoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_estado_id').val(id).change();
            $('#obj_estado_desc').text(decodeURIComponent(oEstadoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oEstadoModel, oEstadoView);
        return false;
    });
    $('#cicloForm #obj_tipociclo_button').unbind('click');
    $("#cicloForm #obj_tipociclo_button").click(function () {
        var oControl = oTipocicloControl;

        $("#cicloForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de ciclo'), "", thisObject.getFormFooter(), true);

        $('#cicloForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipocicloModel, oTipocicloView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipociclo_id').val(id).change();
            $('#obj_tipociclo_desc').text(decodeURIComponent(oTipocicloModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipocicloModel, oTipocicloView);
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

        $('#cicloForm').append(thisObject.getEmptyModal());

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

cicloView.prototype.okValidation = function (f) {
    $('#cicloForm').on('success.form.bv', f);
};