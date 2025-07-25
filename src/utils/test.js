import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users';

const testEndpoints = async () => {
    try {
        // Create a new user
        const newUser = {
            username: 'johndoe',
            firstname: 'John',
            lastname: 'Doe',
            age: 30,
            dob: '1995-01-01',
            contactNumber: '1234567890',
            aadharNo: '1234-5678-9012',
            panNo: 'ABCDE1234F',
        };
        const createResponse = await axios.post(BASE_URL, newUser);
        console.log('Create User Response:', createResponse.data);

        // Get all users
        const getAllResponse = await axios.get(BASE_URL);
        console.log('Get All Users Response:', getAllResponse.data);

        // Get a single user by ID
        const userId = createResponse.data._id;
        const getSingleResponse = await axios.get(`${BASE_URL}/${userId}`);
        console.log('Get Single User Response:', getSingleResponse.data);

        // Update the user
        const updatedUser = { ...newUser, age: 31 };
        const updateResponse = await axios.put(`${BASE_URL}/${userId}`, updatedUser);
        console.log('Update User Response:', updateResponse.data);

        // Delete the user
        const deleteResponse = await axios.delete(`${BASE_URL}/${userId}`);
        console.log('Delete User Response:', deleteResponse.data);
    } catch (error) {
        if (error.response) {
            console.error('Error Response:', {
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers,
            });
        } else if (error.request) {
            console.error('Error Request:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }
        console.error('Error Config:', error.config);
    }
};

testEndpoints();
