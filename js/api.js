const api = {
    async BuscarPensamentos() {
        try{
         const response = await fetch(`http://localhost:3000/pensamentos`)
         return response.json()
        }
        catch{
            alert('Erro ao buscar pensamentos')
        }
    },

    async SalvarPensamento(pensamento) {
        try{
         const response = await fetch(`http://localhost:3000/pensamentos`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pensamento)
         })
         return response.json()
        }
        catch{
            alert('Erro ao buscar pensamentos')
        }
    },

    async BuscarPensamentoPorId(id) {
        try{
         const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
         return response.json()
        }
        catch{
            alert('Erro ao buscar pensamento')
        }
    },

    async editarPensamento(pensamento) {
        try{
         const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pensamento)
         })
         return response.json()
        }
        catch{
            alert('Erro ao salvar pensamento')
            throw error
            
        }
    },

    async ExcluirPensamento(id) {
        try{
         const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
            method: "DELETE",
         })
        }
        catch{
            alert('Erro ao excluir um pensamento')
            throw error
            
        }
    }


}

export default api;