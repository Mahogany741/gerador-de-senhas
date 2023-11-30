input = document.querySelector('#senha')

// Armazenando os valores digitados no input em um array

function stringToArray(){
    let input = document.querySelector("#senha");

    senha = input.value;
    // console.log(senha)
}

// Validando se as condições foram atendidas

// Função para contar caracteres


function contador(nomeArray){
    
    let size = false

    if(nomeArray.length >= 8){
        size = 'Sim'
    }
    
    return size
    
}

// Função para testar se existem valores repetidos na senha (array)
function verificaRepetido(nomearray){
    let equal = false
    
    for (let k = 0; k < nomearray.length; k++){
        
        for (let j = k+1; j < nomearray.length; j++){
            // console.log(nomearray[k],' ', nomearray[j])
            if(nomearray[k] == nomearray[j]){
                // console.log(nomearray[k],'É repetido')
                equal = 'Sim'   
            }
        }
    }

    return equal
}

//Verificando se a senha possui alguma letra Maiúscula
function verificaMaiuscula(nomeArray){

    let upperGroup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let upper = false
    
    for (let j = 0; j < nomeArray.length; j++){
  
        if (upperGroup.includes(nomeArray[j])) {
            upper = 'Sim'
        }

    }
    
    return upper
}

//Verificando se a senha possui algum Número
function verificaNumero(nomeArray){
    let numericGroup = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let number = false
    
    for (let j = 0; j < nomeArray.length; j++){
  
        if (numericGroup.includes(nomeArray[j])) {
            number = 'Sim'
        }
    }
    
    return number
}



// Resposta final

function validador(){
    let conseguimos = false
    var resultado = document.querySelector("#text")

    console.log('String para Array: ', stringToArray())
    console.log('Possui no mínimo 8 caracteres: ', (contador(senha)))
    console.log('Possui Maiúscula: ', (verificaMaiuscula(senha)))
    console.log('Possui Repetido: ', (verificaRepetido(senha)))
    console.log('Possui Número: ', (verificaNumero(senha)))

    

    if(contador(senha) == false || verificaMaiuscula(senha) == false || verificaRepetido(senha) == 'Sim'|| verificaNumero(senha) == false) {
        resultado.innerHTML = (`Possui no mínimo 8 caracteres: ${contador(senha)}\nPossui Maiúscula: ${verificaMaiuscula(senha)}\nPossui Repetido: ${verificaRepetido(senha)}\nPossui Número: ${verificaNumero(senha)}\n\nInfelizmente você não atendeu todos os critérios, clique em gerar e receba nossa sugestão de senha`)
        console.log('falhamos')
    }else{
        resultado.innerHTML = (`Possui no mínimo 8 caracteres: ${contador(senha)}\nPossui Maiúscula: ${verificaMaiuscula(senha)}\nPossui Repetido: ${verificaRepetido(senha)}\nPossui Número: ${verificaNumero(senha)}`)
        console.log('conseguimos')

        conseguimos = 'Sim'
    }
}


// Populando o Array

function gerar(){
    senhaValida = false
    var senhafinal = ''


    while(senhaValida == false){

        // Conjunto de letras 
        var alphanumeric = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        //Zerando o array e o input
        senhaGerada = []
        const tamanho = 8
        // Populando o Array
        for (let i = 0; i < tamanho; i++){
            // Gerar um índice aleatório dentro do intervalo do comprimento do array
            const randomIndex = Math.floor(Math.random() * alphanumeric.length);
            //Atribuir no array senha
            senhaGerada.push(alphanumeric[randomIndex])
            senhafinal += senhaGerada[i]
        
        }
        console.log(senhafinal)
        
        // Verificando se a gerada atendeu os critérios
        if(contador(senhaGerada) == false || verificaMaiuscula(senhaGerada) == false || verificaRepetido(senhaGerada) == 'Sim' || verificaNumero(senhaGerada) == false){
            console.log('Não conseguimos')
           
        }else{
            senhaValida = true
            input.value = senhafinal 
            console.log('Conseguimos')
        }
        senhafinal = ''
        // senhaGerada = 0
        // senhaValida = false
    }
    

    // console.log('Contador: ',contador(senhaGerada))
    // console.log('Maiúscula: ', verificaMaiuscula(senhaGerada))
    // console.log('Retido: ', verificaRepetido(senhaGerada))
    // console.log('Número: ', verificaNumero(senhaGerada))
    
    return senhaValida
}

// console.log(validador(gerar()))