import React from "react";
import 'tachyons'
function Card({id,name,email}) {
    return (
        <div className="bg-light-green dib pa3 ma2 tc br3 grow shadow-5">
            <img src={`https://robohash.org/ratul${id}`} alt="Robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card