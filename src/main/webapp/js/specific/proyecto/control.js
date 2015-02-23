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
    data = oProyectoModel.setGenericOperation("getpage&rpp=1000","");
    listadoProyectos = oProyectoView.getProyectosList(data);
    $("#indexContenido").html(listadoProyectos);
};


/*proyectos*/
var filename='http://tympanus.net/codrops/adpacks/demoadpacks.css?' + new Date().getTime();		
var fileref=document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", filename);
document.getElementsByTagName("head")[0].appendChild(fileref);

var demoad = document.createElement('div');
demoad.id = 'cdawrap';
demoad.innerHTML = '<span id="cda-remove"></span>';
document.getElementsByTagName('body')[0].appendChild(demoad);

document.getElementById('cda-remove').addEventListener('click',function(e){
	demoad.style.display = 'none';
	e.preventDefault();
});

var bsa = document.createElement('script');
bsa.type = 'text/javascript';
bsa.async = true;
bsa.id = '_carbonads_js';
bsa.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=codrops';
demoad.appendChild(bsa);


  var thumb = $('img#thumb');        

  new AjaxUpload('imageUpload', {
    action: $('form#newHotnessForm').attr('action'),
    name: 'image',
    onSubmit: function(file, extension) {
      $('div.preview').addClass('loading');
    },
    onComplete: function(file, response) {
      thumb.load(function(){
        $('div.preview').removeClass('loading');
        thumb.unbind();
      });
      thumb.attr('src', response);
    }
  });
  
