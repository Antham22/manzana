const getFormData = collection => [...collection]
    .reduce((data, el) => {
        if(el.name) {
            data[el.name] = el.value
        }
        return data
    }, {});

export default getFormData;