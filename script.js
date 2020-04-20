
    let arra = [];
    function oneParameter(x){
        for (let i=1; i<=x; i++){
    
            if(i%2==0 && i%3==0 && i%5==0){
                let i= "yu-gi-oh";
                
                arra.push(i) ;
            }
            else if(i%2==0 && i%3==0){
                let i= "yu-gi";
                
                arra.push(i);
            }

            else if(i%2==0 && i%5==0){
                let i= "yu-oh";
                
                arra.push(i);
            }
            else if(i%3==0 && i%5==0){
                let  i= "gi-oh";
                
                arra.push(i);
            }
            else if(i%2==0 ){
                let i= "yu";
                
                arra.push(i);
            }
            else if(i%3==0){
                let i= "gi";
                
                arra.push(i);
            }
            else if(i%5==0 ){
                let i= "oh";
                
                arra.push(i);
            }
            else{
              
                arra.push(i);
            }
            
        }
        console.log(arra);
    }

    oneParameter(100);

    oneParameter(39);


   
    
