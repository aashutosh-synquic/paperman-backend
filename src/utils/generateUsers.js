import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomUser = () => {
    const firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Eva'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Taylor'];

    const firstname = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastname = lastNames[getRandomInt(0, lastNames.length - 1)];
    const username = `${firstname.toLowerCase()}${lastname.toLowerCase()}${getRandomInt(100, 999)}`;
    const age = getRandomInt(18, 60);
    const dob = new Date(new Date().setFullYear(new Date().getFullYear() - age)).toISOString().split('T')[0];
    const contactNumber = `9${getRandomInt(100000000, 999999999)}`;
    const aadharNo = `${getRandomInt(1000, 9999)}-${getRandomInt(1000, 9999)}-${getRandomInt(1000, 9999)}`;
    const panNo = `ABCDE${getRandomInt(1000, 9999)}F`;

    return {
        username,
        firstname,
        lastname,
        age,
        dob,
        contactNumber,
        aadharNo,
        panNo,
    };
};

const createRandomUsers = async (count = 5) => {
    for (let i = 0; i < count; i++) {
        const user = generateRandomUser();
        try {
            const response = await axios.post(BASE_URL, user);
            console.log(`User ${i + 1} created:`, response.data);
        } catch (error) {
            console.error(`Error creating user ${i + 1}:`, error.response?.data || error.message);
        }
    }
};

createRandomUsers(10); // Change the number to generate more or fewer users
