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


function fTutorRoutes() {

    Path.map("#/tutor").to(function () {
        $('#indexContenidoJsp').spinner();
        oTutorControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTutorModel, oTutorView);
        //tutorControl.modalListEventsLoading(tutorObject, tutorView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTutorControl.getClassNameTutor());
        return false;
    });

    Path.map("#/tutor/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTutorControl.list($('#indexContenido'), paramsObject, null, oTutorModel, oTutorView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tutor/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTutorControl.view($('#indexContenido'), paramsObject['id'], oTutorModel, oTutorView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tutor/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTutorControl.edit($('#indexContenido'), paramsObject['id'], oTutorModel, oTutorView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/tutor/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTutorControl.new($('#indexContenido'), null, oTutorModel, oTutorView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tutor/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTutorControl.new($('#indexContenido'), paramsObject, oTutorModel, oTutorView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tutor/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTutorControl.remove($('#indexContenido'), paramsObject['id'], oTutorModel, oTutorView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}