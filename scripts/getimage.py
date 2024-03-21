import requests
import json
import shutil
from concurrent.futures import ThreadPoolExecutor
import os

with open('src/pokemons.json', 'r') as f:
    pokemons = json.load(f)

if not os.path.exists('src/assets/pokemon-images'):
    os.makedirs('src/assets/pokemon-images')

def download_image(pokemon):
    response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{pokemon}', stream=True)
    data = response.json()
    image_url = data['sprites']['front_default']

    response = requests.get(image_url, stream=True)

    if response.status_code == 200:
        response.raw.decode_content = True
        with open(f'src/assets/pokemon-images/{pokemon}.png', 'wb') as file:
            shutil.copyfileobj(response.raw, file)
        print(f'Image successfully downloaded: {pokemon}.png')
    else:
        print(f'Image couldn\'t be retrieved for {pokemon}.')

# Use ThreadPoolExecutor to download images concurrently
with ThreadPoolExecutor(max_workers=10) as executor:
    executor.map(download_image, pokemons)

print('All images have been successfully saved.')