function set(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
    return val;
}

function get(key) {
    return JSON.parse(localStorage.getItem(key));
}

export default {
    set,
    get
}