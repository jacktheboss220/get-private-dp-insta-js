const axios = require("axios")
const idp = async (prof) => {
    axios({
        url: `https://www.instagram.com/${prof}/?__a=1/`,
        method: 'GET',
        responseType: 'streamarraybuffer'
    }).then((res) => {
        console.log(res.data.graphql[0].user.profile_pic_url_hd);
    })
}
idp('');//enter user name
