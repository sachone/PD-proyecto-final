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


<%@page import="net.daw.helper.EstadoHelper"%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%@page import="net.daw.helper.AppInformationHelper"%>
<%UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");%>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Proyectos DAW</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css">

        <!-- <link rel="stylesheet" href="css/jquery-ui.css"> -->
        <link rel="stylesheet" href="css/bootstrapValidator.min.css">
        <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"  />
        <link rel="stylesheet" href="css/skin/main.css">
        <link rel="stylesheet" href="css/skin/proyectos.css">
        <link rel="stylesheet" href="css/skin/single.css"


        <!-- Google fonts -->
        <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'>
        <!-- font awesome -->
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <!-- animate.css -->
        <link rel="stylesheet" href="assets/animate/animate.css" />
        <!-- favicon -->




    </head>
    <body>
        <!--[if lt IE 7]>
        <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->

        <!-- Fixed navbar -->

        <div class="row top-menu hidden-xs">
            <div class="col-md-4 ensanchador "></div>
            
            <a href="jsp?ob=usuario&op=inicio"><div class="col-md-1  seccion">Inicio</div></a>
            <div class="col-md-1  brand">
                <a href="jsp?ob=usuario&op=inicio"><img src="images/logopd.png"></a>
            </div>
             <a href="jsp#/proyecto/mostrar"><div class="col-md-1  seccion">Proyectos</div></a> 
            
            <div class="col-md-2 col-md-offset-2 seccion-log">
                <jsp:include page="jsp/usuario/loguear.jsp" />
            </div>
                       
        </div>
       
       <nav class="navbar navbar-inverse navbar-fixed-top hidden-md hidden-sm hidden-lg">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="jsp?ob=usuario&op=inicio">Proyectos <span style="color: red">Daw</span></a>
                    </div>


                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li><a href="jsp?ob=usuario&op=inicio">Inicio <span class="sr-only">(current)</span></a></li>
                            <li><a href="jsp#/proyecto/mostrar">Proyectos<span class="sr-only">(current)</span></a></li>

                        </ul>

                        <%if (user != null) {%>
                        <ul class="nav navbar-nav navbar-left">
                            <jsp:include page="jsp/menuSuperior.jsp" />

                        </ul>

                        <%}%>
                        <ul class="nav navbar-nav navbar-right">
                            <jsp:include page="jsp/usuario/infologin.jsp" />
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>     
            
            

        <% if (user != null) {%>




        <div class="row">
            <div class="menu-izquierda col-md-2 hidden-xs">
                <h3>Menú de Administración</h3>
                <ul>
                    <a href="jsp#/proyecto"><li><span class="glyphicon glyphicon-list-alt"></span>   Proyecto</li></a> 
                    <a href="jsp#/alumno"><li><span class="glyphicon glyphicon-star-empty"></span>   Alumno</li></a>
                    <a href="jsp#/ciclo"><li><span class="glyphicon glyphicon-bullhorn"></span>   Ciclo</li></a>
                    <a href="jsp#/tutor"><li><span class="glyphicon glyphicon-briefcase"></span>   Tutor</li></a>
                    <a href="jsp#/usuario"><li><span class="glyphicon glyphicon-user"></span>   Usuario </li></a>
                    <a href="jsp#/tipousuario"><li><span class="glyphicon glyphicon-lock"></span>   Tipo Usuario</li></a>
                </ul>
            </div>

            <div class="col-md-10 col-xs-12 contenido-derecha">
                <div id="indexContenido"></div>
                <div id="indexContenidoJsp">
                    <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                </div>

            </div>

        </div>
                <div class="col-md-12 col-xs-12 contenido-derecha" style="margin-top: 80px !important;">
            <div id="indexContenido"></div>
            </div>
                
        <div class="row">
            <div class="col-md-12" id="contenidoParseado"></div>   
        </div>

        <div class="row">        
            <footer class="col-md-11">
                <p class="pull-right">Proyectos Daw | PD &copy; <%=EstadoHelper.getAnyo()%>| Diseñado por:<%=EstadoHelper.getAutor()%>:</p>
            </footer>
        </div>    



        <% } else {%>


        <div class="row">
            <div class="col-md-12 contenido">
                <div id="indexContenidoJsp">
                    <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                </div>
            </div>
        </div>
        <div class="col-md-12 col-xs-12 contenido-derecha">
            <div id="indexContenido"></div>


        </div>
        <div class="row">
            <div class="col-md-12" id="contenidoParseado"></div>   
        </div>
        <div class="row">
            <div class="footer">
                <p class="">Proyectos Daw&copy; <%=EstadoHelper.getAnyo()%> | Designed by <%=EstadoHelper.getAutor()%></p>
            </div>
        </div>



        <% }%>


        <!-- carga de javascript   -->


        <script type="text/javascript"  src="./js/vendor/jquery-1.11.1.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/bootstrap.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

        <script type="text/javascript"  src="./js/vendor/moment.js"></script>
        <script type="text/javascript"  src="./js/vendor/moment.locale.es.js"></script>
        <script type="text/javascript"  src="./js/vendor/bootstrap-datetimepicker.min.js"></script>

        <script type="text/javascript"  src="./js/vendor/path.min.js"></script> 
        <script type="text/javascript"  src="./js/vendor/bootstrapValidator.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/language/es_ES.js"></script>
        <script type="text/javascript"  src="./js/vendor/creole-parser.js"></script>



        <!-- boostrap -->
        <script src="assets/bootstrap/js/bootstrap.js" type="text/javascript" ></script>
        <!-- jquery mobile -->
        <script src="assets/mobile/touchSwipe.min.js"></script>
        <!-- jquery mobile -->
        <script src="assets/respond/respond.js"></script>







        <script src="js/generic/view.js" charset="UTF-8"></script>    
        <script src="js/generic/param.js" charset="UTF-8"></script>
        <script src="js/generic/ajax.js" charset="UTF-8"></script>
        <script src="js/generic/util.js" charset="UTF-8"></script>
        <script src="js/generic/model.js" charset="UTF-8"></script>        
        <script src="js/generic/control.js" charset="UTF-8"></script> 
        <script src="js/generic/initialization.js" charset="UTF-8"></script>

        <script type="text/javascript">
            var path = '<%=request.getContextPath()%>';
        </script>

        <script src="js/specific/usuario/control.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/model.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/view.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/routes.js" charset="UTF-8"></script>

        <script src="js/specific/tipousuario/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/routes.js" charset="UTF-8"></script>

        <script src="js/specific/proyecto/control.js" charset="UTF-8"></script>
        <script src="js/specific/proyecto/model.js" charset="UTF-8"></script>
        <script src="js/specific/proyecto/view.js" charset="UTF-8"></script>
        <script src="js/specific/proyecto/routes.js" charset="UTF-8"></script>

        <script src="js/specific/alumno/control.js" charset="UTF-8"></script>
        <script src="js/specific/alumno/model.js" charset="UTF-8"></script>
        <script src="js/specific/alumno/view.js" charset="UTF-8"></script>
        <script src="js/specific/alumno/routes.js" charset="UTF-8"></script>

        <script src="js/specific/tutor/control.js" charset="UTF-8"></script>
        <script src="js/specific/tutor/model.js" charset="UTF-8"></script>
        <script src="js/specific/tutor/view.js" charset="UTF-8"></script>
        <script src="js/specific/tutor/routes.js" charset="UTF-8"></script>

        <script src="js/specific/ciclo/control.js" charset="UTF-8"></script>
        <script src="js/specific/ciclo/model.js" charset="UTF-8"></script>
        <script src="js/specific/ciclo/view.js" charset="UTF-8"></script>
        <script src="js/specific/ciclo/routes.js" charset="UTF-8"></script>

        <script type="text/javascript">

            //path = '<%=request.getContextPath()%>';

            $(document).ready(function () {

                //$('#indexContenidoJsp').addClass('animated slideInDown');
                //$('#menuSuperior').addClass('animated slideInLeft');
                //$('#menuLateral').addClass('animated slideInRight');

                inicializacion();

                fUsuarioRoutes();
                fTipousuarioRoutes();
                fProyectoRoutes();
                fAlumnoRoutes();
                fTutorRoutes();
                fCicloRoutes();

                Path.listen();


               
                /*mejores proyectos*/
                $.ajax({
                    url: "http://localhost:8081/proyectosDAW/json?ob=proyecto&op=getpage&order=id",
                    /*url: "http://proyectosdaw-vlopez.rhcloud.com/proyectosdaw/json?ob=proyecto&op=getpage&order=id",*/
                    type: "GET",
                    dataType: "json",
                    success: function (data) {
                        mejores = "<table>";
                       /* mejores += "<tr>";
                        mejores += "<td> Proyectos con mejor nota </td>";
                        mejores += "</tr>"*/
                        long = data.list.length;
                        for (i = 1; i < long; i++) {
                            titulo = data.list[i].titulo;
                            id = data.list[i].id;
                            nota = data.list[i].nota;
                            if (nota > 6 ) {
                                mejores += "<tr>";
                                mejores += "<td> <a href ='jsp#/proyecto/mostrar/" + id + "'>" + titulo + "</a></td>";
                                mejores += "<td>" + nota + "</td>";
                                mejores += "</tr>"
                            }
                        }
                        ultimos += "</table>";
                        $("#bestProyects").html(mejores);
                    }});

            });

        </script>

    </body>
</html>

