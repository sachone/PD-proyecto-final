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


function fCicloRoutes() {

    Path.map("#/ciclo").to(function () {
        $('#indexContenidoJsp').spinner();
        oCicloControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oCicloModel, oCicloView);
        //cicloControl.modalListEventsLoading(cicloObject, cicloView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oCicloControl.getClassNameCiclo());
        return false;
    });

    Path.map("#/ciclo/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCicloControl.list($('#indexContenido'), paramsObject, null, oCicloModel, oCicloView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/ciclo/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCicloControl.view($('#indexContenido'), paramsObject['id'], oCicloModel, oCicloView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/ciclo/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCicloControl.edit($('#indexContenido'), paramsObject['id'], oCicloModel, oCicloView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/ciclo/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCicloControl.new($('#indexContenido'), null, oCicloModel, oCicloView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/ciclo/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCicloControl.new($('#indexContenido'), paramsObject, oCicloModel, oCicloView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/ciclo/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oCicloControl.remove($('#indexContenido'), paramsObject['id'], oCicloModel, oCicloView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}