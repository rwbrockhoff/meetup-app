
//Finds an element given its data-test attribute
export const findAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`)
}

