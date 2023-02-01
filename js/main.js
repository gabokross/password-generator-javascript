

function getSecurePassword(length) {

    const charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const arrayNum = new Uint32Array(length);
    let password = "";

    window.crypto.getRandomValues(arrayNum);

    for (let i = 0; i < length; i++) {
        password += charset[arrayNum[i] % charset.length];

        console.log(arrayNum); //2901990498, 467847843, 121178810, 1477081706...
        console.log(arrayNum[i]); //2901990498 //467847843 //121178810
        console.log(charset.length); //72 //72 //72
        console.log(password); //& //&F //&Fc...&FcE@PI7U*db
    }
    return password;
}

function getRandomInt(max) {

    const randomInt = Math.floor(Math.random() * max) + 8;
    console.log(getSecurePassword(randomInt));
}

getRandomInt(12);

//Función getRandomInt que devuelve un número aleatorio entre 0 y 11; Y al resultado le sumamos 8;
//De esa forma nos aseguramos que el número resultante estará comprendido entre 8 y 19;
//Ese número será la longitud que llega a getSecurePassword como parámetro.
