const getRest = () => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all")
    xhr.responseType = "json"
    xhr.onload = () => {

        const json = xhr.response;
        for (var value of json)
            console.log("[Name]: " + value.name.common, "[Region]: " + value.region, "[Sub-Region]: " + value.subregion)

    }

    xhr.send();
}
getRest();