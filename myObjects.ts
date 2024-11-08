// const user = {
//     name: 'Abu Naim',
//     email: 'naim@mail.com',
//     isActive: false
// }

// const createUser = ({ name: string, isActive: boolean }) => { }

// let newUser = { name: 'naim', isActive: 44, email: 'naim@mail.com' }

// createUser(newUser);

// const createCourse = (): { name: string, price: number } => {
//     return { name: 'Next.js', price: 599 }
// }

type User = {
    name: string;
    email: string;
    isActive: boolean
}

const createUser = (user: User): User => {
    return { name: user.name, email: user.email, isActive: user.isActive }
}

createUser({ name: 'naim', email: 'n@n.com', isActive: true });

export { }