import axios from "axios";

export default class PostService {
    static async getPervichka() {
        const response = await axios.get('http://10.254.199.132:8080/get_sales_apprtment_pervichka')
        return response
    }
}