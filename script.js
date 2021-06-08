function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/menino.jpg')
            }else if(idade >= 10 && idade <= 18){
                img.setAttribute('src', 'img/adolescente-h.jpg')
            }else if(idade > 18 && idade < 60){
                img.setAttribute('src', 'img/homem.jpg')
            }else{
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/menina.jpg')
            }else if(idade >= 10 && idade <= 18){
                img.setAttribute('src', 'img/adolescente-m.jpg')
            }else if(idade > 18 && idade < 60){
                img.setAttribute('src', 'img/mulher.jpg')
            }else{
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}