

const calcular = document.getElementById('calc')



calcular.onclick = function () {

    const Name = document.getElementById('name').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value;
    const result = document.getElementById('result')

    const valueImc = (peso / (altura * altura)).toFixed(1)

    if (Name.length == 0 || altura.length == 0 || peso.length == 0) {
        alert('Preencha todos os campos')
    } else {
        let classification;

        if (valueImc < 18.5) {
            classification = 'abaixo do peso'
        } else if (valueImc < 25) {
            classification = 'com peso ideal'
        } else if (valueImc < 30) {
            classification = 'levemente acima do peso'
        } else if (valueImc < 35) {
            classification = 'com obesidade grau I'
        } else if (valueImc < 40) {
            classification = 'com obsidade grau II'
        } else {
            classification = 'com obesidade grau III. [CUIDADO]'
        }

        result.textContent = `${Name} seu IMC é de ${valueImc.replace('.', ',')} 
        e você está ${classification}.`
    }
}