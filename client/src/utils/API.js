import axios from "axios";

export default {

    getPickups: function() {
        return axios.get('/api/pickups');
    },

    savePickup: function(data) {
        return axios.post('/api/pickups', data);
    },

    updatePickup: function(id, data) {
        return axios.put(`/api/pickups/${id}`, data);
    },

    deletePickup: function(id) {
        return axios.delete(`/api/pickups/${id}`);
    },

    getUser: function(id) {
        return axios.get(`/api/users/${id}`);
    },

    saveUser: function(data) {
        return axios.post('/api/users', data);
    },

    updateUser: function(id, data) {
        return axios.put(`/api/users/${id}`, data)
    },

    deleteUser: function(id) {
        return axios.delete(`/api/users/${id}`);
    }
    
};