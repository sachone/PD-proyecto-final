/*
 * Copyright (C) July 2014 Rafael Aznar
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

var view = function (strClase) {
    this.clase = strClase;
};
view.prototype.getClassName = function () {
    return this.clase;
};
view.prototype.printValue = function (value, valor, recortar) {
    var thisObject = this;
    var strResult = "";
    if (/obj_/.test(valor)) {
        if (value[valor].id > 0) {
            strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
        } else {
            strResult = '???';
        }
    } else {
        switch (value[valor]) {
            case true:
                strResult = '<i class="glyphicon glyphicon-ok"></i>';
                break;
            case false:
                strResult = '<i class="glyphicon glyphicon-remove"></i>';
                break;
            default:
                strResult = decodeURIComponent(value[valor]);
                //if (typeof fieldContent == "string") {
                if (recortar)
                    if (strResult.length > 50) //don't show too long fields
                        strResult = strResult.substr(0, 20) + " ...";
                //}
        }
        ;
    }
    ;
    return strResult;
};

view.prototype.getSpinner = function () {
    return '<img src="images/ajax-loading.gif" alt="cargando..." />';
}
view.prototype.getEmptyModal = function () {
    var modal = '<div id="modal01" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
    modal += '<div class="modal-dialog modal-lg">';
    modal += '<div class="modal-content">';
    modal += '<div class="modal-header" id="modal-header"></div>';
    modal += '<div class="modal-body" id="modal-body"></div>';
    modal += '<div class="modal-footer" id="modal-footer"></div>';
    modal += '</div>';
    modal += '</div>';
    modal += '</div>';
    return modal;
};
view.prototype.getFormHeader = function (title) {
    cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    cabecera += '<h1 id="myModalLabel">' + title + '</h1>';
    return cabecera;
};
view.prototype.getFormFooter = function () {
    return pie = '<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Cerrar</button>';
};
view.prototype.getPageLinks = function (url, page_number, total_pages, neighborhood) {
    vector = "<ul class=\"pagination\">";
    if (page_number > 1)
        vector += ('<li><a class="pagination_link" id="' + (page_number - 1) + '" href="' + url + '&page=' + (page_number - 1) + '">prev</a></li>');
    if (page_number > neighborhood + 1)
        vector += ('<li><a class="pagination_link" id="1" href="' + url + '&page=1">1</a></li>');
    if (page_number > neighborhood + 2)
        vector += ('<li>' + '<a href="#">...</a>' + '</li>');
    for (i = (page_number - neighborhood); i <= (page_number + neighborhood); i++) {
        if (i >= 1 && i <= total_pages) {
            if (page_number === i) {
                vector += ('<li class="active"><a class="pagination_link" id="' + i + '" href="' + url + '&page=' + i + '">' + i + '</a></li>');
            }
            else
                vector += ('<li><a class="pagination_link" id="' + i + '" href="' + url + '&page=' + i + '">' + i + '</a></li>');
        }
    }
    if (page_number < total_pages - (neighborhood + 1))
        vector += ('<li>' + '<a href="#">...</a>' + '</li>');
    if (page_number < total_pages - (neighborhood))
        vector += ('<li><a class="pagination_link" id="' + total_pages + '" href="' + url + '&page=' + total_pages + '">' + total_pages + '</a></li>');
    if (page_number < total_pages)
        vector += ('<li><a class="pagination_link"  id="' + (page_number + 1) + '" href="' + url + '&page=' + (page_number + 1) + '">next</a></li>');
    vector += "</ul>";
    return vector;
};
view.prototype.getPanel = function (titulo, contenido) {
    return '<div class="panel panel-default margen-superior"><div class="panel-heading"><h1>'+ titulo +'</h1></div><div class="panel-body">' + contenido + '</div></div>';
};
view.prototype.getEmptyForm = function () {
    $.when(ajax().ajaxCallSync(path + '/jsp?ob=' + this.clase + '&op=form&mode=1', 'GET', '')).done(function (data) {
        form = data;
    });
    return form;
};
view.prototype.getEmptyList = function () {
    $.when(ajax().ajaxCallSync(path + '/jsp?ob=' + this.clase + '&op=list&mode=1', 'GET', '')).done(function (data) {
        form = data;
    });
    return form;
};
view.prototype.getEmptyView = function (operacion, mode) {
    $.when(ajax().ajaxCallSync(path + '/jsp?ob=' + this.clase + '&op=' + operacion + '&mode=' + mode, 'GET', '')).done(function (data) {
        form = data;
    });
    return form;
};
//        getEmptyDiv: function() {
//            return '<div id="content"></div>';
//        },
view.prototype.getObjectTable = function (nombresCamposBonitos, valoresRegistro, nombresCampos) {
    var thisObject = this;
    var tabla = "<table class=\"table table table-bordered table-condensed\">";
    $.each(nombresCampos, function (index, nombreDeCampo) {
        tabla += '<tr><td><strong>' + nombresCamposBonitos[index] + '</strong></td>';
        tabla += '<td>' + thisObject.printValue(valoresRegistro, nombreDeCampo, false) + '</td>';
    });
    tabla += '</table>';
    return tabla;
};
view.prototype.populateSelectVisibleFieldsBox = function (place, numFields) {
    place.populateSelectBox(util().getIntegerArray(1, numFields));
};
view.prototype.doFillForm = function (datos, campos) {
    var thisObject = this;
    $.each(campos, function (index, valor) {
        if (/obj_/.test(valor)) {
            $('#' + campos[index] + "_id").val(decodeURIComponent(datos[campos[index]].id));
            $('#' + campos[index] + "_desc").text(decodeURIComponent(util().getForeign(datos[campos[index]])));
            //$('#' + campos[index] + "_desc").text(decodeURIComponent(thisObject.getForeign(datos[campos[index]])));
        } else {
            switch (datos[campos[index]]) {
                case true:
                    $('#' + campos[index]).attr("checked", "checked");
                    break;
                case false:
                    $('#' + campos[index]).attr("checked", "");
                    break;
                default:
                    //$('#' + campos[index]).val(decodeURIComponent(datos[campos[index]]));
                    $('#' + campos[index]).val(decodeURIComponent(thisObject.printValue(datos, valor, false)));
            }
            ;
        }
        ;

    });
};
view.prototype.getRegistersInfo = function (regs) {
    return "<p>Mostrando una consulta de " + regs + " registros.</p>";
};
view.prototype.getOrderInfo = function (objParams) {
    if (objParams['order']) {
        strOrder = "<p><small>Contenido ordenado por " + objParams["order"] + " (" + objParams["ordervalue"] + ') <a href="jsp#/' + this.clase + '/list/' + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["order", "ordervalue"])) + '" id="linkQuitarOrden">(Quitar orden)</a></small></p>';
    } else {
        strOrder = "<p>Contenido no ordenado</p>";
    }
    ;
    return strOrder;
};
view.prototype.getFilterInfo = function (objParams) {
    if (objParams['filter']) {
        strFilter = "<p><small>Contenido filtrado (" + objParams ['filter'] + " " + objParams['filteroperator'] + " " + objParams['filtervalue'] + ') <a href="jsp#/' + this.clase + '/list/' + param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["filter", "filteroperator", "filtervalue"])) + '" id="linkQuitarFiltro">(Quitar filtro)</small></a></p>';
    } else {
        strFilter = "<p>Contenido no filtrado</p>";
    }
    return strFilter;
};
view.prototype.getRppLinks = function (objParams) {
    var UrlFromParamsWithoutRpp = param().getUrlStringFromParamsObject(param().getUrlObjectFromParamsWithoutParamArray(objParams, ["rpp"]));
    var botonera = '<div id="pagination"><ul class="pagination">';
    if (objParams['rpp'] == 10)
        botonera += '<li class="active">';
    else
        botonera += '<li>';
    botonera += '<a class="rpp_link" id="10" href="jsp#/' + this.clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=10">10</a></li>';
    if (objParams['rpp'] == 50)
        botonera += '<li class="active">';
    else
        botonera += '<li>';
    botonera += '<a class="rpp_link" id="50" href="jsp#/' + this.clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=50">50</a></li>';
    if (objParams['rpp'] == 100)
        botonera += '<li class="active">';
    else
        botonera += '<li>';
    botonera += '<a class="rpp_link" id="100" href="jsp#/' + this.clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=100">100</a></li>';
//    if (objParams['rpp'] == 100)
//        botonera += '<li class="active">';
//    else
//        botonera += '<li>';
//    botonera += '<a class="rpp_link" id="50" href="jsp#/' + this.clase + '/list/' + UrlFromParamsWithoutRpp + '&rpp=50">50</a></li>';
    botonera += '</ul></div>';
    return botonera;
};
view.prototype.doResultOperationNotifyToUser = function (place, resultadoStatus, resultadoMessage, id, mostrar) {
    var strNombreClase = this.clase;
    if (resultadoStatus == "200") {
        mensaje = "<h3>La operacion se ha ejecutado con éxito</h3>";
    } else {
        mensaje = "<h3>ERROR</h3>";
    }
    mensaje += "<h5>Código: " + resultadoStatus + "</h5><h5>" + resultadoMessage + "</h5>";
    $(place).append(this.getEmptyModal());
    util().loadForm('#modal01', this.getFormHeader('Respuesta del servidor'), mensaje, this.getFormFooter(), true);
    $('#modal01').css({
        'right': '20px',
        'left': '20px',
        'width': 'auto',
        'margin': '10px',
        'display': 'block'
    });
    if (mostrar && resultadoStatus == "200") {
        $('#modal01').on('hidden.bs.modal', function () {
            window.location.href = "jsp#/" + strNombreClase + "/view/" + id;
        })
    } else {
        $('#modal01').on('hidden.bs.modal', function () {
            $(place).empty();
        });
    }
    ;
};
view.prototype.getHeaderPageTable = function (prettyFieldNames, fieldNames, visibleFields, UrlFromParamsWithoutOrder) {
    var strNombreClase = this.clase;
    var numField = 0; //visible field counter
    var tabla = "";
    if (prettyFieldNames !== null) {
        tabla += '<tr>';
        $.each(prettyFieldNames, function (index, value) {
            numField++; //field counter
            if (numField <= visibleFields) {
//                        if (value === "acciones") {
//                            tabla += '<th class="col-md-2">' + value;
//                            tabla += '</th>';
//                        } else {
                if (fieldNames[numField - 1] === "id") {
                    tabla += '<th class="col-md-1">' + value;
                } else {
                    tabla += '<th>' + value;
                }
                ;
                if (fieldNames[numField - 1].substr(0, 4) == "obj_") {
                    fieldName = fieldNames[numField - 1].substring(4);
                    fieldName = "id_" + fieldName;
                } else {
                    fieldName = fieldNames[numField - 1];
                }
                ;
                tabla += '<br />';
                tabla += '<a class="orderAsc" id="' + fieldName + '" href="jsp#/' + strNombreClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=asc"><i class="glyphicon glyphicon-arrow-up"></i></a>';
                tabla += '<a class="orderDesc" id="' + fieldName + '" href="jsp#/' + strNombreClase + '/list/' + UrlFromParamsWithoutOrder + '&order=' + fieldName + '&ordervalue=desc"><i class="glyphicon glyphicon-arrow-down"></i></a>';
                tabla += '</th>';
            }
        });
        tabla += '<th class="col-md-2">Acciones</th>';
        tabla += '</tr>';
    }
    ;
    return tabla;
};
view.prototype.getBodyPageTable = function (page, fieldNames, visibleFields, tdbuttons) {
    var thisObject = this;
    var tabla = "";
    $.each(page, function (index, value) {
        tabla += '<tr>';
        var numField = 0;
        var id;
        var strClaveAjena;
        $.each(fieldNames, function (index, valor) {
            if ("id" == valor) {
                id = value[valor];
            }
            ;
            numField++;
            if (numField <= visibleFields) {
                tabla += '<td>' + thisObject.printValue(value, valor, true) + '</td>';
            }
        });
        tabla += '<td>';
        tabla += tdbuttons(id);
        tabla += '</td>';
        tabla += '</tr>';
    });
    return tabla;
};

view.prototype.loadButtons = function (id) {
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-md">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-trash"></i></a>';
    botonera += '</div></div>';
    return botonera;
};

view.prototype.loadFormValues = function (valores, campos) {
    this.doFillForm(valores, campos);
};
view.prototype.getFormValues = function () {
    var valores = [];
    var disabled = $('#' + this.clase + 'Form').find(':input:disabled').removeAttr('disabled');
    valores = $('#' + this.clase + 'Form').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;

};

view.prototype.doEventsLoading = function () {

};

view.prototype.okValidation = function (f) {
    $('#' + this.clase + 'Form').on('success.form.bv', f);
};


  