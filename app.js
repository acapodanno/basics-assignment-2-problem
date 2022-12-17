 const {createApp} = Vue;

 const app = createApp({
    data(){
        return{
            stringAlert:"Show Alert",
            outputKeydown:"",
            outputEnter:""
        }
    },
    methods:{
        onClickShowAlertButton(){
            alert(this.stringAlert);
        },
        eventKeydownEvent(event){
            const {target} = event;
            this.outputKeydown = target.value;
        },
        eventEnterEvent(event){
            const {target} = event;
            this.outputEnter = target.value;
        }
    }
 });

 app.mount("#assignment");