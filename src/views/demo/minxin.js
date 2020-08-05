export const commonMixin = {
    data(){
        return {
            tableList : [],
            flagAjax : false,
            remainsecond:1588832747,
        }
    },
    methods:{
        init(){
            this.tableList = [
                {
                    name : 'hdhd',
                    age : 21
                },
                {
                    name : 'syq',
                    age : 18
                }
            ]
        },
    }
}