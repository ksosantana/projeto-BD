import requests
import os
import pandas as pd
from dotenv import load_dotenv

# Carrega as variáveis de ambiente do .env
load_dotenv()
API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')

def fetch_traffic_data():
    # Exemplo de URL da API do Google Maps para dados de tráfego
    url = f'https://maps.googleapis.com/maps/api/traffic/{YOUR_ENDPOINT}?key={API_KEY}'
    response = requests.get(url)
    data = response.json()

    # Processa e salva os dados (exemplo simplificado)
    df = pd.DataFrame(data)  # Supondo que os dados possam ser convertidos em DataFrame
    df.to_csv('traffic_data.csv', index=False)

if __name__ == '__main__':
    fetch_traffic_data()
