/* 
 * Copyright (C) 2014 rafa
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

var proyectoControl = function (strClase) {
    this.clase = strClase;
};
proyectoControl.prototype = new control('proyecto');
proyectoControl.prototype.getClassNameProyecto = function () {
    return this.getClassName() + "Control";
};
var oProyectoControl = new proyectoControl('proyecto');

proyectoControl.prototype.listaProyectos = function (place, oModel, oView) {
    $(place).empty();
    var oProyectoModel = oModel;
    var oProyectoView = oView;
    data = oProyectoModel.setGenericOperation("getpage&rpp=1000&order=fecha&ordervalue=desc","");
    listadoProyectos = oProyectoView.getProyectosList(data);
    $("#indexContenido").html(listadoProyectos);
};

proyectoControl.prototype.contenidoProyectos = function (place,id,oModel, oView) {
    $(place).empty();
    var oProyectoModel = oModel;
    var oProyectoView = oView;
    data = oProyectoModel.setGenericOperation("get&id="+id,"");
    contenidoProyectos = oProyectoView.getProyectosContenido(data);
    $("#indexContenido").html(contenidoProyectos);
};

  
