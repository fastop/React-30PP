import React from 'react';
import Shield from './svg/shield.svg';
import Sword from './svg/sword-svgrepo-com.svg';
import Horn from './svg/horn-cornucopia-svgrepo-com.svg';
import { MdHeight } from 'react-icons/md';


export default function Card({player, defenseValue, attackValue, unitTypeName, unitTypeImg}) {

    let iconStyle = {
        marginRight: 10,
        width: "9rem",
        background: "transparent",
    };


    let mirror;
    function mirrorImg(player) {
        player === "player_2"?(mirror = "scaleX(-1)") : (mirror = "scaleX(1)");
        return mirror;
    }

    mirrorImg(player);

  return (
    <div className={`card text-center m-1 shadow-lg 
                    ${player === "player_1" ? "card-info": "card-danger"} `}          
         style={{ width:180 }}>

        <section className="card-header d-flex" style={{ justifyContent: "space-between" }}>

            <div className='defense'>
                <img src={Shield} alt="defense-img" style={iconStyle} />
                <span>{!defenseValue && "00"}</span>
            </div>

            <div className='attack'>
                <img src={Sword} alt="defense-img" style={iconStyle} />
                <span>{!attackValue && "00"}</span>
            </div>
        </section>

        <section className='card-body'>
            <h4 className='mb-1'>
                {!unitTypeName? "Unit Type Name" : unitTypeName}
                <img src={unitTypeImg} alt="unitTypeImg" 
                     style={{  background: "#fff", transform:`${mirror}` }} />
            </h4>
        </section> {" "}
        <section className='card-footer'>
            <h4 className='mb-1'>
                {!unitTypeName ? "Unit type name" : unitTypeName}
                <img src={unitTypeImg} alt="unitTypeImg"
                    style={{ background:"#fff", transform: `${mirror}` }}
                />
            </h4>
        </section>

    </div>
  )
}
