
function isLoginValid(login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
}

function isLoginUnique(allLogins, login) {
    if (allLogins.includes(login)) {
        return false;
    } else {
        return true;
    }
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!';
    }
    allLogins.push(login);
    return 'Логін успішно доданий!';
}

const logins = ['user1', 'user2', 'user3'];
console.log(addLogin(logins, 'user1')); // 'Такий логін уже використовується!'
console.log(addLogin(logins, 'user4')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'user1234567890123456')); // 'Помилка! Логін повинен бути від 4 до 16 символів'