import axios from 'axios';

const API_URL = 'https://dyname-banner-website.onrender.com/api/banner'; // Updated URL

export const getBanner = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching banner:', error);
        throw error;
    }
};

export const updateBanner = async (banner) => {
    try {
        const response = await axios.put(API_URL, banner);
        return response.data;
    } catch (error) {
        console.error('Error updating banner:', error);
        throw error;
    }
};

export const createBanner = async (banner) => {
    try {
        const response = await axios.post(API_URL, banner);
        return response.data;
    } catch (error) {
        console.error('Error creating banner:', error);
        throw error;
    }
};

export const deleteBanner = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting banner:', error);
        throw error;
    }
};
