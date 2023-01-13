import {createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp({
    data(){
       return {
           symbols:[],
           toConvert:'',
           fromConvert:'',
           amountConvert:0,
           convertResult:'',

       }
    },	 
    mounted: function(){
       axios.get("https://api.apilayer.com/exchangerates_data/symbols",
       {
           headers:{
               'apikey':'yULIWt9XvPV89FOfAuHh0prFjV6OeCPB'
           }
       }).then((response)=>{
           console.log(response.data.symbols);
           this.symbols = response.data.symbols;
           console.log(this.symbols);
       })
       
    },
    methods: {
        calculateResult(){
            console.log(this.toConvert);
            console.log(this.fromConvert);
            console.log(this.amountConvert)
            axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${this.toConvert}&from=${this.fromConvert}&amount=${this.amountConvert}`,
            {
                headers:{
                    'apikey':'yULIWt9XvPV89FOfAuHh0prFjV6OeCPB'
                }
            }).then((response)=>{
                console.log(response.data);
                this.convertResult=response.data.result;

            })
        }
    },
 
}).mount('#app');