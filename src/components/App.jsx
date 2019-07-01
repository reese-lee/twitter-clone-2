import React from "react";
import Navs from "./Navs";
import Card from "./Card";
import UserInfo from './UserInfo';
import Feed from './Feed';
import Friends from './Friends';
import Columns from './Columns';
import FilterFeed from './FilterFeed';
import photo from './../assets/images/photo.jpeg';
function App() {
    return(
        
        <div>
            <Navs/> 
            <Columns/>
            
        </div>
    );
}

export default App;