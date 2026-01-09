
const users = [{ id: 'user001', username: 'aitbrahim',age: 22},
               { id: 'user002', username: 'lina',age: 21}];

//faire du tri initial par order alphabetique pour la liste des utilisateurs 
users.sort((a, b) => a.username.localeCompare(b.username));

//fonction pour créer un utilisateur
const addUser = (newUser) => {
    users.push(newUser);
    users.sort((a, b) => a.username.localeCompare(b.username));
    return newUser;
}

//fonction pour récupérer un utilisateur par son ID
const getUserByID = (UserID) => {
    return users.find(user => user.id === UserID)
    
}

//fonction pour récupérer un utilisateur par son nom d'utilisateur
const getUserByUsername = (UserName) => {
    return users.find(user => user.username === UserName)
}

//fonction pour mettre à jour les données d'un utilisateur par son ID
const updateUserByID = (UserID, newInfo) => {
    const user =users.find(user => user.id === UserID);

    if (newInfo.username !== undefined)
        user.username = newInfo.username;

    if (newInfo.age !== undefined)
        user.age = newInfo.age;

    users.sort((a, b) => a.username.localeCompare(b.username));
    return user;
    
}

//fonction pour supprimer un utilisateur par son ID
const deleteUserByID = (UserID) => {
    const temp = users.findIndex(user => user.id === UserID);
    users.splice(temp, 1);
    return;
}

//fonction pour lister tous les utilisateurs
const listAllUsers = () => {
    return users;

}

//fonction pour lister tous les utilisateurs filtré par intervalle d'âge (minimum et maximum)
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
