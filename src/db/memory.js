
const users = [{ id: 'user001', username: 'aitbrahim',age: 22},
               { id: 'user002', username: 'lina',age: 21}];

users.sort((a, b) => a.username.localeCompare(b.username));

const addUser = (newUser) => {
    users.push(newUser);
    users.sort((a, b) => a.username.localeCompare(b.username));
    return newUser;
}

const getUserByID = (UserID) => {
    return users.find(user => user.id === UserID)
    
}

const getUserByUsername = (UserName) => {
    return users.find(user => user.username === UserName)
}

const updateUserByID = (UserID, newInfo) => {
    const user =users.find(user => user.id === UserID);

    if (newInfo.username !== undefined)
        user.username = newInfo.username;

    if (newInfo.age !== undefined)
        user.age = newInfo.age;
    
    users.sort((a, b) => a.username.localeCompare(b.username));
    return user;
    
}

const deleteUserByID = (UserID) => {
    const temp = users.findIndex(user => user.id === UserID);
    users.splice(temp, 1);
    return;
}

const listAllUsers = () => {
    return users;

}
const listUsers_filterByAge = (minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <=maxAge);
}

module.exports = {
    addUser,
    getUserByID,
    getUserByUsername,
    updateUserByID,
    deleteUserByID,
    listAllUsers,
    listUsers_filterByAge
}
