<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");%>
<%
    if (user != null) {
        String us = user.getLogin();
        String usuario = us.substring(0, 1).toUpperCase() + us.substring(1);
        String level = user.getObj_tipousuario().getDescripcion();
%>

<%-- 
<a href="#"> <i class="icon-user">Estás logueado como <%=usuario%> / <%=user.getTipoUsuario()%></i></a>
--%>
<p> <i class="glyphicon glyphicon-user"></i> <%=usuario%><a href="jsp?ob=usuario&op=logout"> Cerrar Sesión</a></p>
<%} else {%>
<a href="jsp?op=login01&ob=usuario" style="color: white !important;">Iniciar Sesión</a>
<%}%>