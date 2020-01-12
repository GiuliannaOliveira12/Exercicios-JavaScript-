var valor;	

function conversao(){
    var dolarAmericano = 4.10;
    
    var euro = 5.10;
   
    var iene = 0.03; //deve-se multiplicar e não dividir
    var pesoArgentino = 0.07;
   
    
    valor = parseFloat(document.getElementById("text2").value);
    var opcao = document.getElementById("opções").value;
        
    
    if(isNaN(valor)){
        alert("Apenas numeros devem ser informados");				
    }	
    
    if(opcao==1){
        document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano).toFixed(2);			
        
    }
    
    
    
    
    
    if(opcao==2){
        document.getElementById("valorFinal").innerHTML = (valor/euro).toFixed(2);			
        
    }

    

    if(opcao==3){
        document.getElementById("valorFinal").innerHTML = (valor*iene).toFixed(2);			
        
    }

    if(opcao==4){
        document.getElementById("valorFinal").innerHTML = (valor/pesoArgentino).toFixed(2);			
        
    }

    
            
}

