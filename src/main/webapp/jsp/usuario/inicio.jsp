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

<%@page import="net.daw.helper.AppInformationHelper"%>
<%@page import="net.daw.helper.EstadoHelper"%>
<!--<div class="jumbotron">
    <h1>Bienvenidos a <%=AppInformationHelper.getAppName()%> <%=EstadoHelper.getAnyo()%></h1>
    <h3>Versi�n (v.<%=EstadoHelper.getVersion()%>) de <%=EstadoHelper.getFecha()%></h3>
    <h5>Desarrollo de aplicaciones web. CPIFP Ausi�s March. Curso <%=EstadoHelper.getCurso()%></h5>   
<%
    if (EstadoHelper.getTipo_estado() == EstadoHelper.getTipo_estado().Debug) {
        out.print("<h5>Modo debug</h5>");
    }
%>
</div>-->


<div class="intro">
    
</div>

<div class="infoInicio row">
    <!-- <h3 class="col-md-12">Proyectos con mejor nota</h3>
    <div id="bestProyects" class="col-md-4"></div> -->
    <div class="parte1 col-md-4">
        <div class="caja">
            <h4 class="caja-titulo">�Que es proyectos DAW?</h4>
            <p>Es una aplicaci�n desarrollada en Java y javaScript que utiliza AJAX parw la comunicaci�n entre cliente
             y servidor y cuenta con una licencia <%=EstadoHelper.getLicenciaLink()%></p>
        </div>
        
    </div>
    <div class="parte2 col-md-4">
        <div class="caja">
            <h4 class="caja-titulo">�Que hace?</h4>
            <p>Las principales caracter�sticas de Proyectos Daw es poder tener una gesti�n facil y sencilla de los proyectos
             que los alumnos han hecho y adem�s permitir a todo el que quiera poder ver informaci�n basica del proyecto 
            as� como su memoria.</p>
        </div>
        
    </div>
    <div class="parte3 col-md-4">
        <div class="caja">
            <h4 class="caja-titulo">�Cuales son sus carecter�sticas?</h4>
            <ul>
            <li>Servidor escrito en Java (servlets y jsp)</li>  
            <li>Dos controladores, uno para servir jsp y otro para servir json</li>               
            <li>Cliente desarrollado sobre Bootstrap responsivo</li>
            <li>Acceso a datos (base de datos MySQL) mediante clases de negocio y DAO</li>
            <li>Mantenimientos paginados</li>
            <li>Soporta Relaciones 1:M y M:M</li>

        </ul>
        </div>
       
    </div>
</div>


<script type="text/javascript">

            

           
        </script>
