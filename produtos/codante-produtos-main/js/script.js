var produtos = [
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "nike air max 90",
        descricao: "eleve seu estilo com clássico reiventado. conforto supremo encontra design inovador",
        preco: "R$ 899,00"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "nike air max 10",
        descricao: "eleve seu estilo com clássico reiventado. conforto supremo encontra design inovador",
        preco: "R$ 899,00"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "nike air max 20",
        descricao: "eleve seu estilo com clássico reiventado. conforto supremo encontra design inovador",
        preco: "R$ 899,00"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "nike air max 30",
        descricao: "eleve seu estilo com clássico reiventado. conforto supremo encontra design inovador",
        preco: "R$ 899,00"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "nike air max 40",
        descricao: "eleve seu estilo com clássico reiventado. conforto supremo encontra design inovador",
        preco: "R$ 899,00"
    }
]

var divProdutos = document.querySelector(".produtos")

for (var i = 0; i < produtos.length; i++) {
    divProdutos.innerHTML += `<div class="card">
                <img src="${produtos[i].imagem}" alt="#">
                <div class="content">
                    <div class="title">
                        <h2>${produtos[i].titulo}</h2>
                        <p>${produtos[i].descricao}</p>
                    </div>
                    <div class="btns">
                        <p>${produtos[i].preco}</p>
                        <button>Comprar agora</button>
                    </div>
                    <div class="freight">
                        <i class="fa-solid fa-truck-fast"></i>
                        <p>Frete grátis para todo o Brasil</p>
                    </div>`
}