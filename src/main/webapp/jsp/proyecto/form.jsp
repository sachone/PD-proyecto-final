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



<form class="form-horizontal" role="form" action="#" id="proyectoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Titulo</label>
        <div class="col-sm-4">
            <input type="text" id="titulo" class="form-control"  name="titulo" size="15" placeholder="Nombre de proyecto" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_alumno_id">Autor: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_alumno_id" class="input-mini" name="id_alumno" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_alumno_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_alumno_desc" id="obj_alumno_desc"></label>                     
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="descripcion">Descripción: </label> 
        <div class="col-sm-6">              
            <textarea rows="5" cols="1000" id="descripcion" class="form-control" name="descripcion"></textarea>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="nota">Nota: </label> 
        <div class="col-sm-4">              
            <input type="text" id="nota" class="form-control"  name="nota" size="15" placeholder="Nota del proyecto" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="Tags">Tags: </label> 
        <div class="col-sm-4">              
            <input type="text" id="tags" class="form-control"  name="tags" size="15" placeholder="Pon etiquetas separadas por comas" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="fecha">Fecha:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="fecha" name="fecha" size="15" placeholder="Fecha del alta" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="portada">Portada:</label>
        <div class="col-sm-5">
            <input type="text"  class="form-control"  id="portada" name="portada" size="15" placeholder="url de la portada" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="memoria">Memoria:</label>
        <div class="col-sm-5">
            <input type="text"  class="form-control"  id="memoria" name="memoria" size="15" placeholder="url de la memoria" />
        </div>
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
        $('#fecha').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#proyectoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        titulo: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un título'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El título debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        id_alumno: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un alumno'
                                },
                                integer: {
                                    message: 'El identificador de usuario debe ser un entero'
                                }
                            }
                        },
                        descripcion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una descripcion'
                                }
                                
                            }
                        },
                        nota: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una nota'
                                },
                                integer: {
                                    message: 'La  nota debe ser un entero'
                                }
                            }
                        },
                        tags: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir etiquetas'
                                }
                            }

                        },
                        fecha: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una fecha de alta'
                                },
                                date: {
                                    format: 'DD/MM/YYYY',
                                    message: 'La fecha de alta no tiene formato DD/MM/YYYY'
                                }
                            }
                        },
                        portada: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una Url de la imagen'
                                }
                            }

                        },
                        memoria: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una Url de la memoria'
                                }
                            }

                        }
                    }
                })
                .on('change', '[name="id_alumno"]', function () {
                    $('#documentoForm').bootstrapValidator('revalidateField', 'id_alumno');
                });
        $('#fecha').on('dp.change dp.show', function (e) {
            $('#proyectoForm').bootstrapValidator('revalidateField', 'fecha');
        });
    });



</script>
