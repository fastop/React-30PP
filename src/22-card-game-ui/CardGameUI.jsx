import React, {useState} from 'react'
import Title from "../components/Title";
import Button from "../components/Button";

import "./cardGame.css";
import Card from "./Card";

//Units 
import SpearManImg from "./svg/spear-svgrepo-com.svg";
import WarHoursMan from "./svg/warhorse-svgrepo-com.svg";
import Archer from "./svg/archer-svgrepo-com.svg";


export default function CardGameUI() {

    const [start, setStart] = useState(false);
    const startGame = ()=> {
        setStart(true);
    };

    document.body.style.background = "#170536";
    document.body.style.color = "#bab6bf";
 
    return (
        <div className='container text-center'>

            {!start ? (
              <>
                <section className='text-center'>
                    <Title text={"Card Game"} />
                    <Button text="Start" 
                            btnClass={"btn-sucess btn-lg"} 
                            onClick={startGame} />
                </section>

                 <Title classes={"subtitle"} text="Rules:"/>
                 
              </>
            ):(
                <>
                    <Title text={"0-1"}/>
                    <main className='container m-auto game-board'>
                        <section className='player_1'>
                            <Card player={"player_1"} 
                                  unitTypeName="Sward Cavalry"
                                  unitTypeImg={WarHoursMan}/>
                            <Card player={"player_1"}
                                  unitTypeName={"Spear man"}
                                  unitTypeImg={SpearManImg}/>                                    
                        </section>
                        <section className='fog-of-war'></section>
                        <section className="player_2">
                            <Card player={"player_2"}
                                  unitTypeName="Sward Cavalry"
                                  unitTypeImg={WarHoursMan}/>
                            <Card player={"player_2"}
                                  unitTypeName="Spear man"
                                  unitTypeImg={SpearManImg}/>                                  
                        </section>
                    </main>
                </>
            )}

        </div>
    )
}
