const single=(function(){
    var unique
    function getInstance(){
        if(unique===undefined){
            console.log(1)
            unique=new Construct()
        }
        return unique
    }
    function Construct(){
        this.names=1
    }
    return {
        getInstance
    }
})()
const s=single.getInstance()
s.names=222
const s2=single.getInstance()
console.log(s2.names)