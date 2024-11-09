let pt: string | number = 33

pt = '55'

// object
type User = {
    name: string;
    id: string
}

type Admin = {
    userName: string;
    id: number
}

let naim: User | Admin = {
    name: 'naim',
    id: '234'
}

naim = {
    userName: 'abu',
    id: 35
}


// function
// const getDbId = (id: string | number) => {
//     console.log(`DB Id is: ${id}`)
// }

// getDbId(4);
// getDbId('4');

const getDbId = (id: string | number) => {
    if (typeof id === "string") {
        id.toUpperCase();
    }
};

// array
const data: string[] | number[] = ['4', '5'] //type 'number' is not assignable to type 'string'
const data1: (string | number | boolean)[] = [4, '5', true]

let seatNumber: 'c1' | 'd1' | 'e1'
