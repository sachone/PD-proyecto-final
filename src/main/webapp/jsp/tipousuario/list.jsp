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

<%@page import="java.sql.Connection"%>
<%@page import="net.daw.dao.generic.specific.implementation.UsuarioDaoGenSpImpl"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Iterator"%>
<%
    ArrayList<String> alColumnsNames;
    Iterator<String> oIterador;
    String strNombreMantenimiento = "tipousuario";
    Connection connection = (Connection) request.getAttribute("connection");
%>
<div class="row">
    
    <div class="col-md-4 col-md-offset-8">
        <div id="filter"></div>   
    </div>
</div>
<div class="botonera-superior-list row ">
    <a class="boton-nuevo col-md-2" href='jsp#/<%=strNombreMantenimiento%>/new'><i class="glyphicon glyphicon-plus"></i> Nuevo <%=strNombreMantenimiento%></a> 
    
    <form class=" col-md-4 navbar-form navbar-right" role="form" action="Controller" method="post" id="proyectoForm">
        <select id="selectFilter" class="form-control" name="filter" style="width: 160px">
        </select>
        <select id="selectFilteroperator" class="form-control" name="filteroperator" style="width: 200px">
            <option value="like">contiene</option>
        </select>
        <input id="inputFiltervalue" class="form-control" name="filtervalue" type="text" size="20" maxlength="50" value="" style="width: 140px" placeholder="Valor"/>
        <input type="submit" class="btn" id="btnFiltrar" name="btnFiltrar" value="Filtrar" />
    </form>
</div>

<div class="row">
    <div class="col-md-12 col-xs-12" id="menuLateralList">
        <table class="table table-responsive table-hover table-striped table-condensed">
            <thead id="tableHeaders"></thead>
            <tbody id="tableBody"></tbody>
        </table>
        <div id="datos"></div>
        <div id="datos2"></div>
    </div> 
</div> 

<div class="row">
    <div class="col-md-4 col-md-offset-4">

        <div class="panel-body">
            <div class="text-center">
                <div id="pagination"></div>
            </div>

        </div>
    </div>                           
    <!-- Modals -->
    <div id="modal01" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header" id="modal-header"></div>
                <div class="modal-body" id="modal-body"></div>
                <div class="modal-footer" id="modal-footer"></div>
            </div>
        </div>
    </div>
    <div id="modal02" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header"></div>
                <div class="modal-body"></div>
                <div class="modal-footer"></div>
            </div>                
        </div>
    </div> 