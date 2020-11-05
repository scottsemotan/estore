import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function UserPage() {


return(



<div><h2>This is the User page!</h2></div>

)


} 


let User = () => (
    <div>
        <Route path="/user" component={UserPage} />
    </div>
)


export default User;