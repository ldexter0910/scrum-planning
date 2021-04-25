import * as jwt from 'jsonwebtoken';

const token: string = jwt.sign({
    username: 'Anik',
    admin: false
}, 'secret', {
    expiresIn: '1d'
});

console.log(token);