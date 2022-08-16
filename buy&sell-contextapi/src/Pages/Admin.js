import React from 'react';
import {useContext} from 'react';
import {AllPostContext} from '../contextStore/AllPostContext'




function Admin() {
    const{allPost}=useContext(AllPostContext);
    
  return (

    <div>
          {  allPost.map((data)=>{
              


          }
            )
          }
    </div>

    
  )
}

export default Admin