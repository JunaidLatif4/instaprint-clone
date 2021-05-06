import  Cookies from "js-cookie";


const CSRFToken = Cookies.get('csrftoken')
const RegisterHeader = {
    'X-CSRFToken' : CSRFToken,
}

export {RegisterHeader};