import Axios from 'axios';

const url = 'https://api.myjson.com/bins/1feeex';

class UniversityServices {
    getAllData() {
        return Axios({
            method: 'get',
            url
        });
    }
}

export default new UniversityServices();
