
const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    skype: 'johndoe',
    telegram: '@johndoe',
    twitter: '@johndoe',
};

function getUserInfo({ firstName, lastName, ...contactInfo }) {
    const { email, phone, ...restContactInfo } = contactInfo;
    const contactArray = [email, phone, ...Object.values(restContactInfo)];
    return { firstName, lastName, contactArray };
}

console.log(getUserInfo(user));