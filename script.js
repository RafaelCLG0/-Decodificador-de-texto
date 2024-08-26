const input = document.querySelector("#texto-entrada");
const btnCriptografar = document.querySelector("#botao-criptografar");
const btnDescriptografar = document.querySelector("#botao-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#botao-copiar");

document.getElementById("conteudo-aparece").style.display = 'none';
inputverificar();

document.getElementById('botao-criptografar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensagem.value = textoEncriptado;
  input.value = "";
  aparece()
}

document.getElementById('botao-descriptografar').onclick = (e) => {
  e.preventDefault();
  const textoDecriptado = decodificar(input.value);
  mensagem.value = textoDecriptado;
  input.value = "";
  aparece()
}

document.getElementById('botao-copiar').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
}

function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}

function decodificar(stringDecriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDecriptada = stringDecriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDecriptada.includes(matrixCode[i][1])) {
      stringDecriptada = stringDecriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDecriptada
}

function aparece() {
  document.getElementById("conteudo-desaparece").style.display = 'none';
  document.getElementById("conteudo-aparece").style.display = 'block';
}

function home() {
  document.getElementById("conteudo-aparece").style.display = 'none';
  document.getElementById("conteudo-desaparece").style.display = 'block';
}


function inputverificar() {
  var inputPalavra = document.querySelector("#texto-entrada");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}
