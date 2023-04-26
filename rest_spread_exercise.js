const fliterOutOdds = (...args) => args.filter(nums => nums % 2 === 0)

const findMin = (...nums) => Math.min(...nums) 

const mergeObjects = (obj1, obj2) => ({...obj1}, {...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(nums => nums * 2)]

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {
    return ({...obj, [key]: val})
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    return {...obj, [key]:val};
}