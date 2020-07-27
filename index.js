export function isString(arg) {
    return (typeof arg === 'string');
}


export function notString(arg) {
    return !(isString(arg));
}

