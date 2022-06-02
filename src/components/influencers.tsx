
import React from "react";
import { IState as Iprops } from "../App";
import './influencer.css'

export interface InfluencerProps {
    onFollow: (userId: number) => void;
}


const Influencer: React.FC<Iprops> = ({influencer})=>{

  

    const renderInfluencer = ()=>{
        return influencer.map((list)=>{
            return(
              <div className="influencer" key={list.userId}>
                  <li className="profle"><img src={list.profilePicture} alt=''/></li>
                  <li className="name"><h3>{list.name}</h3></li>
                  {/* <li><p>{list.username}</p></li> */}
                  <li className="bio"><p>{list.biography}</p></li>
                  <button
                 
                  
                  >follow</button>
                  
                
              </div>

            )
        })
    }
    return(
        <div>
            <ul>
                {renderInfluencer()}
            </ul>
           
        </div>
    )
}

export default Influencer;
