import React  from "react";
import './CardListStyle.css'
import Card from "../Card/Card";
const CardListComponent = (props)=> {
    return (
        <div className="card-list">
          {
            props.monsters.map(monster => (
              <Card key={monster.id} monster={monster}/>
            ))
          }
     
        </div>
    )
}

export default CardListComponent
