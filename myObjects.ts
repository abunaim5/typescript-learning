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

// Type Aliases
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
}

// const createUser = (user: User): User => {
//     return { name: user.name, email: user.email, isActive: user.isActive }
// }

// createUser({ name: 'naim', email: 'n@n.com', isActive: true });

// readonly and optional ?
let newUser: User = {
    _id: '1345',
    name: 'naim',
    email: 'n@n.com',
    isActive: true
}

newUser.email = 'naim@mail.com'
// newUser._id = '45234'
// Can't reassign readonly properties

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export { }