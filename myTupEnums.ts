// tuple strictly maintain 
// let tUser: (string | number)[] = [4, 'naim']
let tUser: [string , number , boolean]

tUser = ['naim', 4, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string]

let nUser: User = [4, 'n@n.com']

nUser[1] = 'naim@mail.com' // you can change the property
// nUser.push(true) // you can't push other types data which is not exist in array

export {}