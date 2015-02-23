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
<div class="container margen-superior">
    <div class="row">
        <div class=" col-sm-6 col-md-4 col-md-offset-4">
            <div class="formLogueo">
                <form class="form-signin" id="loginForm" action="jsp" role="form" method="post">                                    
                    <input type="hidden" name="ob" value="usuario" />
                    <input type="hidden" name="op" value="login02" />

                    <div class="parteUsu">
                        <label class="control-label" for="inputLogin" style="margin-top: 15px">Usuario:</label>
                        <input value="" class="form-control"  id="inputLogin" type="text" placeholder="nombre de usuario" required="" autofocus="" name="login" />                                                    
                    </div>

                    <div class="partePass">
                        <label class="control-label" for="password" style="margin-top: 15px">Contraseña:</label>
                        <input value="" class="form-control" type="password" id="inputPassword" placeholder="contraseña"  required="" name="password" />                                                               
                    </div>

                    <div class="botonesLogin">
                        <button class=" entrar btn btn-md btn-default " type="submit"  style="margin-top: 15px">Acceder</button>   
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


