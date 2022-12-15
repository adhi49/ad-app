export const Button = (props) => {
    const { name, bgColor, fontColor } = props;
    return <button style={{ backgroundColor: bgColor, color: fontColor }}>{name}</button>
}

export const ColorSpan = ({ color, content }) => {
    return <span style={{ color: color }}>{content}</span>
}

export const sum = (n1, n2) => n1 + n2;

// 3 params; get one obj, key (any one of the key in the obj: to modify) and value (to update)
// const user = {
// name:'bharath', age: 10
// }
// user, 'age', 50
export const modifyObj = (obj, keyName, updateValue) => {
    obj[keyName] = updateValue;
    return obj;
}

const userList = [
    { id: 'ADAK', name: 'Adheena', age: 10 },
    { id: 'NIAK', name: 'Nitin', age: 10 },
    { id: 'TEAK', name: 'Tessy', age: 10 },
    { id: 'ANAK', name: 'Anto', age: 10 },
]

export const fetchUser = (id) => {
    const user = userList.find(el => el.id === id)
    if (user !== undefined) {
        return user;
    } else {
        return 'User not found'
    }
}