import axios from 'axios';

const BASE_URL = 'https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook';

export function getProducts() {
    return axios.get(BASE_URL);
}