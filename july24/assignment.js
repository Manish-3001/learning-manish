import { useEffect, useState } from "react";
import axios from "axios";
function gitPic(){
    let [name,setNameEntered] = useState("");
    let[dispName,setDispName] = useState("");

    function IdChanged(e){
        setNameEntered(e.target.value);
    }



    function getName(name){

        let url = "https://api.github.com/users/"+name;
        axios
        .get(url)
        .then(function(response){
            console.log(response.data);
            setDispName(response.data);
        }).catch(function(error){
            console.log(error);
        })

        
    };

    return(
        <div >
            <input type="text" name="todoitem" value={name} onChange={IdChanged} placeholder="Enter Your Name"/>
            <button onClick={function(){
                getName(name);
            }}>Details</button>
            <p>{dispName.id}</p>
            <img src={dispName.avatar_url} alt="Image"/>
        </div>

    )
}
export default gitPic;