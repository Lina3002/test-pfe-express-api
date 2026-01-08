
const users = [{ id: 'user001', username: 'aitbrahim',age: 22},
               { id: 'user002', username: 'lina',age: 21}];

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
    
}

const deleteUserByID = (UserID) => {
    
}

const listUsers_filterByAge = (minAge, maxAge) => {
    
}

module.exports = {
    addUser,
    getUserByID,
    getUserByUsername,
    updateUserByID,
    deleteUserByID,
    listUsers_filterByAge
}
