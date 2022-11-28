import cookies from 'react-cookies'
import axios from 'axios'
const getId = async()=>{
    let token = cookies.load("access_token")
    let data 
    let res = await axios.get("http://127.0.0.1:8000/api/users/current-user/", {
    headers: {
        'Authorization': 'Bearer ' + token
    }
    })
    .then(
        response => {
            data = response.data;
            cookies.save("Id", response.data.id)
        }
    )
    .catch(
        error => console.log(error)
    );
    // let Info = {
    //     'intro': data.intro,
    //     'email': data.email,
    //     'phone': data.phone,
    //     'address': data.address,
    //     'hobbies': data.hobbies,
    //     'avatar': data.avatar,
    //     'first_name': data.first_name,
    //     'last_name': data.last_name,
    //     'nickname': data.nickname,
    //     'username': data.username,
    // };
    return data
}
export default function getInfo(){
    let a = getId()
    
}
