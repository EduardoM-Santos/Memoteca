import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
 ui.renderizarPensamentos()

 const FormularoPensamento = document.getElementById("pensamento-form")
 FormularoPensamento.addEventListener("submit", manipularSubmissaoFormulario)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try{
        if(id) {
            await api.editarPensamento({id, conteudo, autoria})
        }else{
            await api.SalvarPensamento({ conteudo, autoria})
        }
        ui.renderizarPensamentos()
    }
    catch{
        alert("Erro ao salvar pensamentos")
    }
}

const buttonCancelar = document.getElementById("botao-cancelar")
const conteudopensado = document.getElementById('pensamento-conteudo')
const autoriaconteudo = document.getElementById('pensamento-autoria')

buttonCancelar.addEventListener("click", () => {
    conteudopensado.value =''
    autoriaconteudo.value =''
    
} )