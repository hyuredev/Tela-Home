document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY; // Pega a quantidade de rolagem vertical
    const body = document.body;
        
    // Calcula a nova posição da imagem de fundo
    // Aumente a multiplicação para maior efeito de parallax
    const backgroundPosition = `center ${90 - (scrollTop / 10)}%`;
        
    // Aplica a nova posição da imagem de fundo
    body.style.backgroundPosition = backgroundPosition;
});
