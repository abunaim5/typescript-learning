function addTwo(num: number): number {
    return num + 2;
    // return 'naim';
}

function getLow(val: string) {
    // return val.toLowerCase()
    return 4
}

function loginUser(name: string, email: string, isAdmin: boolean = false) { }

let createUser = (name: string, email: string, isAdmin: boolean) => { }

addTwo(5)
getLow('naim')
loginUser('naim', 'n@n.com', false)
createUser('naim', 'n@n.com', false)

let myVal = ['a', 'b', 'c']

myVal.map((val): string => {
    return val;
})

const consoleErrMsg = (errMsg: string): void => {
    console.log(errMsg);
}

const handleErrMsg = (errMsg: string): never => {
    throw new Error(errMsg);
}


export { }