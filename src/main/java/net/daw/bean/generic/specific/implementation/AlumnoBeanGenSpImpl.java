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
package net.daw.bean.generic.specific.implementation;

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;

public class AlumnoBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    @Expose
    private String nombre;
    @Expose
    private String apellidos = "";
    @Expose(serialize = false)
    private Integer id_ciclo = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private CicloBeanGenSpImpl obj_ciclo = null;
    @Expose(serialize = false)
    private Integer id_tutor = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private TutorBeanGenSpImpl obj_tutor = null;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public Integer getId_ciclo() {
        return id_ciclo;
    }

    public void setId_ciclo(Integer id_ciclo) {
        this.id_ciclo = id_ciclo;
    }

    public CicloBeanGenSpImpl getObj_ciclo() {
        return obj_ciclo;
    }

    public void setObj_ciclo(CicloBeanGenSpImpl obj_ciclo) {
        this.obj_ciclo = obj_ciclo;
    }

    public Integer getId_tutor() {
        return id_tutor;
    }

    public void setId_tutor(Integer id_tutor) {
        this.id_tutor = id_tutor;
    }

    public TutorBeanGenSpImpl getObj_tutor() {
        return obj_tutor;
    }

    public void setObj_tutor(TutorBeanGenSpImpl obj_tutor) {
        this.obj_tutor = obj_tutor;
    }

  
  
    
}
