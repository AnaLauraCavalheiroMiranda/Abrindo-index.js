async function chama_back(){
    const campoTexto = document.getElementById('resposta');
    campoTexto.innertText = "Carregando";

    try{
        const respostaServidor = await fetch('127.0.0.1:3001');
        const dados = await respostaServidor.json();
        campoTexto.innerText = dados.messagem
    } catch (erro) {
        campoTexto.innerText = "Erro ao tentar carregar...";
        console.error(erro);
    }
}