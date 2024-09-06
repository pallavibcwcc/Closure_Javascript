//Closures 

var sum = function(a,b,c){

    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }

    }

}

 var store = sum(1,6,3);//calling
 console.log(store.getSumTwo());
 console.log(store.getSumThree());