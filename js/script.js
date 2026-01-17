// Configuração do Tailwind com as cores da Logo do Simpat
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Verde vibrante da logo (fundo principal)
                simpatGreen: '#32CD32', // Lime Green aproximado
                // Laranja dos círculos/detalhes
                simpatOrange: '#FF6600', 
                // Amarelo da ampulheta
                simpatYellow: '#FFD700', 
                // Cor escura para textos (para contraste)
                simpatDark: '#064e3b', 
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        }
    }
}

// Script para funcionalidades simples (ex: scroll suave)
document.addEventListener('DOMContentLoaded', () => {
    console.log("XV Simpat Site Carregado - Tema Verde/Laranja");
});