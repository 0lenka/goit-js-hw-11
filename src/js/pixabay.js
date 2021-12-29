const axios = require('axios').default;

const BASE_URL = "https://pixabay.com/api/"
const KEY = "24996281-bee4e82410aa0c83b61c38dff"
const imageType = "photo"
const orientation = "horizontal"


export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 100;
    }

    async fetchPictures() {
        const url = `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=${imageType}&orientation=${orientation}&safesearch=true&per_page=${this.perPage}&page=${this.page}`
        const response = await axios.get(url)
        this.incrementPage()
        return await response;
        
    }

    incrementPage() {
        this.page += 1
    }
    
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
};