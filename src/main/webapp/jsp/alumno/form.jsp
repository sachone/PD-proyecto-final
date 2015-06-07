<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>



<form class="form-horizontal" role="form" action="#" id="alumnoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="nombre">Nombre</label>
        <div class="col-sm-4">
            <input type="text" id="nombre" class="form-control"  name="nombre" size="15" placeholder="Nombre del alumno" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="apellidos">Apellidos</label>
        <div class="col-sm-4">
            <input type="text" id="apellidos" class="form-control"  name="apellidos" size="15" placeholder="Apellidos del alumno" />
        </div>
    </div>

     <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_ciclo_id">Ciclo: </label> 
        <div class="col-sm-2">              
            <input readonly  class="form-control input-mini"  id="obj_ciclo_id"  name="id_ciclo" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_ciclo_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_ciclo_desc" id="obj_ciclo_desc"></label>                     
    </div>

     <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tutor_id">Tutor: </label> 
        <div class="col-sm-2">              
            <input readonly  class="form-control input-mini"  id="obj_tutor_id"  name="id_tutor" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tutor_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_tutor_desc" id="obj_tutor_desc"></label>                     
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>


<script type="text/javascript">

    $(document).ready(function () {
        
    
        $('#alumnoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nombre: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        apellidos: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir los apellidoss del alumno'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'Los apellidos deben tener como máximo 255 caracteres'
                                }
                            }
                        },
                        id_ciclo: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un ciclo'
                                },
                                integer: {
                                    message: 'El identificador de ciclo debe ser un entero'
                                }
                            }
                        },
                        id_tutor: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tutor'
                                },
                                integer: {
                                    message: 'El identificador de tutor debe ser un entero'
                                }
                            }
                        }
                    }
                }),
                
        $('#fecha').on('dp.change dp.show', function (e) {
            // Revalidate the date when user change it
            $('#proyectoForm').bootstrapValidator('revalidateField', 'fecha');
        });
    });



</script>
