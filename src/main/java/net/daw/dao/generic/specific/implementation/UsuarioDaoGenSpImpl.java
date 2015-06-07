/*
 * Copyright (C) July 2014 Rafael Aznar
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
package net.daw.dao.generic.specific.implementation;

import net.daw.dao.generic.implementation.TableDaoGenImpl;
import java.sql.Connection;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.helper.AppConfigurationHelper;

public class UsuarioDaoGenSpImpl extends TableDaoGenImpl<UsuarioBeanGenSpImpl> {

    public UsuarioDaoGenSpImpl(String strFuente, Connection pooledConnection) throws Exception {
        super(strFuente, "usuario", pooledConnection);
    }

    public UsuarioBeanGenSpImpl getFromLogin(UsuarioBeanGenSpImpl oUsuario) throws Exception {
        try {

            String strId = oMysql.getId("Usuario", "login", oUsuario.getLogin());
            if (strId == null) {
                oUsuario.setId(0);
            } else {
                Integer intId = Integer.parseInt(strId);
                oUsuario.setId(intId);
                String pass = oUsuario.getPassword();
                oUsuario.setPassword(oMysql.getOne("Usuario", "password", oUsuario.getId()));
                if (!pass.equals(oUsuario.getPassword())) {
                    oUsuario.setId(0);
                }
                oUsuario = this.get(oUsuario, AppConfigurationHelper.getJsonDepth());
            }

            return oUsuario;
        } catch (Exception e) {
            throw new Exception("UsuarioDao.getFromLogin: Error: " + e.getMessage());
        }
    }
}
