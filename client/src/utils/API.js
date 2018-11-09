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

    getEstablishment: function(id) {
        return axios.get(`/api/establishments/${id}`);
    },

    saveEstablishment: function(data) {
        return axios.post('/api/establishments', data);
    },

    updateEstablishment: function(id, data) {
        return axios.put(`/api/establishments/${id}`, data)
    },

    deleteEstablishment: function(data) {
        return axios.delete(`/api/establishments/${id}`);
    },

    getDriver: function(id) {
        return axios.get(`/api/drivers/${id}`);
    },

    saveDriver: function(data) {
        return axios.post('/api/drivers', data);
    },

    updateDriver: function(id, data) {
        return axios.put(`/api/drivers/${id}`, data);
    },

    deleteDriver: function(id) {
        return axios.delete(`/api/drivers/${id}`);
    }
    
};