import axios from "axios";

export default axios.create({
    baseURL: 'https://quiz-27e86-default-rtdb.firebaseio.com/'
})