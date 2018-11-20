<template>
    <div class="register">
     <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content"></div></el-col>
        <el-col :span="8">
            <div class="alinear">
                <img src="../assets/images/RegisterLogo.png" alt="Register">
                <el-input type="text" placeholder="Usuario" v-model="usuario"></el-input>
                <el-input type="password" placeholder="Clave" v-model="clave"></el-input>
                <el-button @click="registrar" type="primary">Register</el-button>
            </div>
        </el-col>

        <!-- columna para mostrar error -->
        <el-col :span="8">
            <div class="error">
                  <el-alert
                  v-if="error"
                    title="Ningun campo puede estar vacio"
                    type="error"
                    show-icon>
                </el-alert>
                <br>
                <el-alert
                    v-if="errorExiste"
                    title="El usuario ya existe"
                    type="error"
                    show-icon>
                </el-alert>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import RegisterService from '@/services/RegisterService'

export default {
    name :'register',
    data (){
        return{
            usuario: '',
            clave: '',
            error: false,
            errorExiste: false
        }
    },
     methods: {
         registrar(){
             if(this.usuario != null &&
                this.clave != null &&
                this.usuario.length > 0 &&
                this.clave.length > 0)
            {
                if(!RegisterService.verificaExistenciaNombre(this.usuario)){
                   RegisterService.guardarUsuario(this.usuario, this.clave);
                   this.$store.commit('setToken', 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4');
                   this.$router.push({name:'home'});    
                }
                else{
                  this.errorExiste = true;
                }
            } else {
                this.error = true;
            }
         }
     }
}
</script>


<style>
    input, .el-alert {
        max-width: 300px;
        margin: 5px;
    }

    .alinear {
        text-align: center;
    }

    html {
        background-image: url('../assets/images/RegisterBackground2.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        min-height: 100%;
    }

    .error {
        margin-top: 100%;
    }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
