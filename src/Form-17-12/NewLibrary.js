const userList = [
    { id: 'AAB', name: "Adheena", age: 20 },
    { id: "NAB", name: "Nidhin", age: 22 },
    { id: "TKL", name: "Tessy", age: 47 },
    { id: "BAA", name: "Benadict", age: 52 }
]
export const fetchUser = (id) => {
    const person = userList.find(el => el.id === id)
    if (person !== undefined) {
        return person;
    } else {
        return "user not found"
    }
}