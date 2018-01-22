import Axios from 'axios';

const url = 'https://api.myjson.com/bins/1370ih';

class StudentsServices {
    getAllData() {
        return Axios({
            method: 'get',
            url
        });
    }
}

export default new StudentsServices();
