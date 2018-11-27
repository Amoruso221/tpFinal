<template> 
        <el-container>
            <el-header>
                <router-link to="/register">
                    <el-button type="danger">Register</el-button>
                </router-link>
            </el-header>
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content"></div></el-col>
                    <el-col :span="12">
                        <div class="alinear">
                            <img src="../assets/images/HS_logo.png" alt="Logo HS">
                        </div>
                    </el-col>
                    <el-col :span="6"><div class="grid-content"></div></el-col>    
                </el-row>

                <el-row>
                    <el-col :span="8"><div class="grid-content"></div></el-col>
                    <el-col :span="8">
                        <section class="alinear">
                            <el-input placeholder="Usuario" v-model="usuario"></el-input>
                        </section>
                        <section class="alinear">
                            <el-input type="password" placeholder="Clave" v-model="clave"></el-input>
                        </section>
                        <section class="alinear">
                            <el-button @click="login" type="primary">Login</el-button>
                        </section>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                              <section class="alinear">
                                <el-alert
                                    v-if="errorCampos"
                                    :closable="false"
                                    title="Ningun campo puede estar vacio"
                                    type="error"
                                    show-icon>
                                </el-alert>
                              </section>
                              <section class="alinear">
                                <el-alert
                                    v-if="errorVerificacion"
                                    :closable="false"
                                    title="El usuario y/o clave es incorrecto"
                                    type="error"
                                    show-icon>
                                </el-alert>  
                              </section>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
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

<style scoped>
    .el-input {
        max-width: 300px;
        margin: 5px;
    }

    .alinear {
        text-align: center;
    }

    img {
        max-width: 100%;
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

  .el-alert {
      margin: 5px;
      max-width: 300px;
  }
</style>

