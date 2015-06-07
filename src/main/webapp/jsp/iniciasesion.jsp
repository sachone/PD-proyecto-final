<%-- 
    Document   : iniciasesion
    Created on : 07-jun-2015, 15:58:39
    Author     : worten
--%>
<%@page import="net.daw.helper.EstadoHelper"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html >
    <head>
        <meta charset="UTF-8">
        <title>Login</title> 
        <link rel="stylesheet" href="../css/skin/login.css">

    </head>

    <body>
    <body class="align">
        <div class="site__container">
            <img src="../images/logopd.png">
            <div class="grid__container">

                <form action="jsp" method="post" role="form" class="form form--login">
                    <input type="hidden" name="ob" value="usuario" />
                    <input type="hidden" name="op" value="login02" />

                    <div class="form__field">
                        <label class="fontawesome-user" for="login__username"><span class="hidden">Usuario</span></label>
                        <input id="login__username" type="text" class="form__input" id="inputLogin" placeholder="Usuario" required>
                    </div>

                    <div class="form__field">
                        <label class="fontawesome-lock" for="login__password"><span class="hidden">Contraseña</span></label>
                        <input id="login__password" type="password" class="form__input" id="inputPassword" placeholder="Contraseña" required>
                    </div>
                    <div class="form__field">
                        <input type="submit" value="Iniciar Sesión">
                    </div>
                </form>
            </div>
        </div>
    </body>





</body>
</html>
