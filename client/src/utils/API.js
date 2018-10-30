import axios from "axios";

export default {
    getDonors: function() {
        return axios.get("/api/donors");
    },

    getVolunteers: function() {
        return axios.get("/api/volunteers");
    },

    getDonor: function(id) {
        return axios.get("/api/donors/" + id);
    },

    getVolunteer: function(id) {
        return axios.get("/api/volunteers/" + id);
    },

    deleteDonor: function(id) 
        return axios.delete("/api/donors/" + id);
    },

    deleteVolunteer: function(id) {
        return axios.delete("/api/volunteers/" + id);
    },

    saveDonor: function(donorData) {
        return axios.post("/api/donors", donorData);
    },

    saveVolunteer: function(volunteerData) {
        return axios.post("/api/volunteers", volunteerData);
    }
};