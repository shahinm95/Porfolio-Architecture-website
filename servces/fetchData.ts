import List from "../components/listtype";

class FetchingService {
    url = 'https://jsonplaceholder.typicode.com/todos/'
    async getData(): Promise<List[]> {
        const response = await fetch(this.url)
        return response.json();
    }
    async sendData(): Promise<List> {
        const response = await fetch(this.url)
        return response.json();
    }
}

export default new FetchingService();