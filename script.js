function alertMessage(obj){
    let objeto = obj.innerHTML;
    alert(`Cargando el clima de ${objeto} ...`);

    
}

function hide(obj){
    let objeto = obj.parentNode.parentNode;
    objeto.remove();

}

function Convert(obj){
    let tipoTemp = obj.value;
    let tempMax;
    let tempMin;

    if (tipoTemp == "C"){
        tempMin = document.getElementsByClassName('tempMin');
        tempMax = document.getElementsByClassName('tempMax');

        for(let i=0; i<tempMax.length ; i++){
            let valorTemp = parseInt(tempMax[i].innerHTML);
            let resultado = (valorTemp -32 ) * (5/9);            
            tempMax[i].innerHTML = resultado.toFixed(0);
        }   

        for(let i=0; i<tempMin.length ; i++){
            let valorTemp = parseInt(tempMin[i].innerHTML);
            let resultado = (valorTemp -32 ) * (5/9);            
            tempMin[i].innerHTML = resultado.toFixed(0);
        }
    }

    else if(tipoTemp =="F"){
        tempMin = document.getElementsByClassName('tempMin');
        tempMax = document.getElementsByClassName('tempMax');
        for(let i=0; i<tempMax.length ; i++){
            let valorTemp = parseInt(tempMax[i].innerHTML);
            let resultado = (valorTemp * (9/5)) + 32;            
            tempMax[i].innerHTML = resultado.toFixed(0);
        }

        for(let i=0; i<tempMin.length ; i++){
            let valorTemp = parseInt(tempMin[i].innerHTML);
            let resultado = (valorTemp * (9/5)) + 32;
            tempMin[i].innerHTML = resultado.toFixed(0);
        }
    }

    console.log(tempMax[0].innerHTML);
    console.log(tempMin[0].innerHTML);
    console.log(tempMax.length);
    console.log(tempMin.length);
    console.log(tipoTemp);
}