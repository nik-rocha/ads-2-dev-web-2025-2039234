let i = 0

function exibirCarrinho() {
    document.getElementById("alertMessage").innerHTML = `Você possui ${i} qtd no carrinho`
    document.getElementById("customAlert").style.display
}

function adicionarCarrinho() {
    i+=1
    alert(`Sa quantidade atual no carrinho é: ${i}`)
}