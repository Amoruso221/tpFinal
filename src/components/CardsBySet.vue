<template>
  <el-row>
      <!-- select -->
    <el-row>
        <el-select v-model="value" placeholder="Set Name"> 
            <el-option
                v-for="item in names"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
        </el-select>
         
        <el-button @click="cardsBySet(value)" type="primary">Search</el-button>
        <el-alert
           v-if="error"
           :closable="false"
           title="Debe seleccionar una opcion"
           type="error"
           show-icon>
        </el-alert>
    </el-row>

    <!-- spinner -->
        <el-row :gutter="20" class="spinnerRow" v-if="loading">
            <el-col :span="6" :offset="6">
                <i class="el-icon-loading"></i>
            </el-col>
        </el-row>
    <!-- fin spinner -->

    <!-- tarjetas -->
        <el-row :gutter="20">
                <el-col :span="5" v-for="(item, key) in cards" :key="key">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 14px;">
                            <b>{{item.name}}</b>
                            <div class="bottom clearfix">
                                <span>Player Class: {{item.playerClass}}</span>
                                <span>Type: {{item.type}}</span>
                                <div v-if = "item.img">
                                    <a :href="item.img" target="_blank">Image</a>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
        </el-row>
    <!-- fin tarjetas -->
          
  </el-row>
</template>

<script>
import ApiService from '@/services/ApiService'

export default {
    name: 'cardsBySet',
    data () {
        return {
            cards: [],
            names: [],
            value: '',
            error: false,
            loading: false
        }
    },
    beforeMount(){
        this.setNames();
    },
    methods: {
        cardsBySet: async function(){
            if(this.value != null && this.value.length > 0){
                this.error = false;
                this.loading = true;
                this.cards = [];
                let info = await ApiService.cardsBySet(this.value);
                this.cards = info;
                this.loading = false;                
            } else {
                this.error = true;
            }
          },

        setNames: async function(){
            let info = await ApiService.Names();
            this.names = info.data.sets;
        },
    }
}
</script>

<style scoped>
    .el-select {
        margin: 5px;
    }

    .el-alert {
      margin: 5px;
      max-width: 300px;
      display: inline;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  a {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  span {
      margin: 5px;
      display: block;
      font-family: Arial, Helvetica, sans-serif;
  }

   .el-col {
       margin: 5px;
   }

   .el-card {
       height: 120px;
   }
</style>

