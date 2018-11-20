<template> 
    <div class="login">
        <el-container>
            <el-header>
                <router-link to="/register">
                    <el-button type="danger">Register</el-button>
                </router-link>
            </el-header>
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content"></div></el-col>
                    <el-col :span="8">
                        <div class="alinear">
                            <img src="../assets/images/HS_logo.png" alt="Logo HS">
                            <el-input placeholder="Usuario" v-model="usuario"></el-input>
                            <el-input type="password" placeholder="Clave" v-model="clave"></el-input>
                            <el-button @click="login" type="primary">Login</el-button>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="error">
                            <el-alert
                                v-if="errorCampos"
                                :closable="false"
                                title="Error"
                                type="error"
                                description="Ningun campo puede estar vacio"
                                show-icon>
                            </el-alert>
                            <el-alert
                                v-if="errorVerificacion"
                                :closable="false"
                                title="Error"
                                type="error"
                                description="Usuario y/o clave incorrecta"
                                show-icon>
                            </el-alert>
                        </div>    
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import RegisterService from '@/services/RegisterService'

export default {
    name: 'login',
    data (){
        return {
            usuario: '',
            clave: '',
            errorCampos: false,
            errorVerificacion: false
        }
    },
    methods: {
       login(){
           if(this.usuario != null &&
                this.clave != null &&
                this.usuario.length > 0 &&
                this.clave.length > 0)
                {
                  if(RegisterService.verificaUsuario(this.usuario, this.clave)){
                      this.$store.commit('setToken', 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4');
                      this.$router.push({name:'home'});
                  } else{
                      this.errorVerificacion = true;
                  }   
                } else {
                    this.errorCampos = true;
                }
       } 
    }
}
</script>

<style>
input {
        max-width: 300px;
        margin: 5px;
    }

    .alinear {
        text-align: center;
    }

    img {
        max-width: 100%;
    }

    html {
        background-image: url('../assets/images/LoginBackground.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        min-height: 100%;
    }

    .el-header {
    text-align: right;
    }
        .error {
        margin-top: 85%;
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
</style>

