const enderecoUsuario = {
  rua: document.querySelector("#rua"),
  bairro: document.querySelector("#bairro"),
  cidade: document.querySelector("#cidade"),
  estado: document.querySelector("#estado"),
  cep: "06433160",
};

console.log(enderecoUsuario);
async function consultaCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();

  const dadosdoCEP = {
    rua: resposta.logradouro,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    estado: resposta.estado,
    uf: resposta.uf,
  }
inserirdados(dadosdoCEP)
console.log(dadosdoCEP)


  
}
consultaCEP(enderecoUsuario.cep);


function inserirdados(dadosdoCEP){

  enderecoUsuario.rua.innerText = dadosdoCEP.rua;
  enderecoUsuario.bairro.innerText = dadosdoCEP.bairro;
  enderecoUsuario.cidade.innerText = dadosdoCEP.cidade;
  enderecoUsuario.estado.innerText = dadosdoCEP.estado;


}       