<template>
        <el-container>
            <!-- barra lateral -->
            <el-aside width="200px">
              <el-row class="tac">
                <el-col :span="24">
                  <el-menu class="el-menu-vertical-demo"
                        default-active="1"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1" @click="menu(1)">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by set</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="menu(2)">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by class</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="menu(3)">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by faction</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="menu(4)">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by quality</span>
                    </el-menu-item>
                    <el-menu-item index="5" @click="menu(5)">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by race</span>
                    </el-menu-item>
                    <el-menu-item index="6" @click="menu(6)">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by type</span>
                    </el-menu-item>
                    <el-menu-item index="7" @click="menu(7)">
                     <i class="el-icon-star-off"></i>
                     <span>Cards backs</span>
                    </el-menu-item>       
                </el-menu>
                </el-col>
              </el-row>
            </el-aside>
            <!-- fin barra lateral -->

            <el-container>
                <!-- cabecera -->
                <el-header>
                  <el-input placeholder="Nombre de la carta" v-model="NombreCarta"></el-input>
                  <el-button type="primary" icon="el-icon-search">Search</el-button>
                  <el-button @click="logout" type="danger">Logout</el-button>
                </el-header>
                <!-- fin cabecera -->

                <!-- principal -->
                <el-main>
                  <!-- vistas hijas de home -->
                  <router-view/>
                </el-main>
                <!-- fin principal -->
                <el-footer>Pie de página</el-footer>
            </el-container>
        </el-container>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {
          NombreCarta: '',
        }
    },
    beforeMount() {
        this.rutaDefault();
    },
    methods: {
          logout(){
            this.$store.commit('removeToken');
            this.$router.push('/');
          },

          rutaDefault(){
            this.$router.push('home/cardsBySet');
          },

          menu(opcion){
            switch(opcion){
              case 1: this.$router.push('cardsBySet');      break;
              case 2: this.$router.push('cardsByClass');    break;
              case 3: this.$router.push('cardsByFaction');  break;
              case 4: this.$router.push('cardsByQuality');  break;
              case 5: this.$router.push('cardsByRace');     break;
              case 6: this.$router.push('cardsByType');     break;
              case 7: this.$router.push('cardsBacks');      break;
            }
          }
    }
}
</script>

<style scoped>
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-header {
    background-color: #545c64;
    color: #333;
    text-align: right;
    line-height: 60px;
  }
  
  .el-aside {
    text-align: left;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-input {
    max-width: 200px;
    margin: 5px;
  }
</style>
