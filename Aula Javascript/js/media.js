function  calculaMedia (){
    // entrada de dados -- valoers sendo referenciados 
    //aos Ids dos inputs do Formulario 

    var valor1= Number(document.getElementById("n1").value)
    
    var valor2= Number(document.getElementById("n2").value)
    
    var valor3= Number(document.getElementById("n3").value)

    // processo - calculo de media 

    var media =(valor1+valor2+valor3)/3


    // saida de dados - valor da media  sendo atribuido
    // a propridade value do campo de texto com Id  "resultado"

    document.getElementById("resultado").value=media 
}