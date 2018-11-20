export default {

    traerTodos(){
        return JSON.parse(localStorage.getItem("usuarios")) || [];
      },

    guardarListaUsuarios(lista){
        localStorage.setItem("usuarios", JSON.stringify(lista));
      },

    guardarUsuario(usuario, clave){
        let lista = this.traerTodos();
        let idx = 0;
        for (let usuario of lista) {
            idx = usuario.id ++;
          }

          let user = {
            id: idx,
            usuario: usuario,
            clave: clave,
          } 
          lista.push(user);
          this.guardarListaUsuarios(lista);
    },

    verificaExistenciaNombre(nombre){
      let lista = this.traerTodos();
      
      for (let user of lista) {
        if(user.usuario == nombre){
          return true;
        }
      }
      return false;
    },

    verificaUsuario(nombre, pass){
      let lista = this.traerTodos();
      
      for (let user of lista) {
        if(user.usuario == nombre && user.clave == pass){
          return true;
        }
      }
      return false;
    }
}