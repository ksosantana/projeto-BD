// Inicializa o mapa
function initMap() {
    const center = { lat: -3.119, lng: -60.0217 }; // Coordenadas de Manaus
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: center,
    });

    // Aqui você pode fazer chamadas para o backend para obter dados de tráfego
}

// Chama a função para inicializar o mapa
window.onload = initMap;
