const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': 'b7a16c3459mshc65888ccdb3d631p17d069jsn37a41dd54224',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
const appFitness = (state) => {
        axios.request(options).then(function (response) {
        console.log(response.data);
        state(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
export default appFitness;


