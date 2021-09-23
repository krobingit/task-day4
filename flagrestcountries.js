const getAPI = () => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all")
    xhr.responseType = "json"
    xhr.onload = () => {

        const json = xhr.response;
        for (var value of json)
            console.log(value.flag)
    }

    xhr.send();
}
getAPI();