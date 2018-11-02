import axios from "axios";

export default {
    getPickups: function() {
        return axios.get('/api/pickups');
    },
    savePickup: function(data) {
        return axios.post('/api/pickups', data);
    }
};