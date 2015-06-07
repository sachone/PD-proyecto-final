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


function fProyectoRoutes() {

//    Path.map("#/proyecto").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('proyecto').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //proyectoControl.modalListEventsLoading(proyectoObject, proyectoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/proyecto").to(function () {
        $('#indexContenidoJsp').spinner();
        oProyectoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oProyectoModel, oProyectoView);
        //proyectoControl.modalListEventsLoading(proyectoObject, proyectoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oProyectoControl.getClassNameProyecto());
        return false;
    });

    Path.map("#/proyecto/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProyectoControl.list($('#indexContenido'), paramsObject, null, oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/proyecto/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProyectoControl.view($('#indexContenido'), paramsObject['id'], oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/proyecto/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProyectoControl.edit($('#indexContenido'), paramsObject['id'], oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/proyecto/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProyectoControl.new($('#indexContenido'), null, oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/proyecto/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProyectoControl.new($('#indexContenido'), paramsObject, oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/proyecto/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProyectoControl.remove($('#indexContenido'), paramsObject['id'], oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    
    
    //Para mosrar los proyectos de la gente en el menu-----
    Path.map("#/proyecto/mostrar").to(function () {
        $('#indexContenidoJsp').spinner();
        oProyectoControl.listaProyectos($('#indexContenido'), oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    
    Path.map("#/proyecto/mostrar/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oProyectoControl.contenidoProyectos($('#indexContenido'), paramsObject['id'], oProyectoModel, oProyectoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}