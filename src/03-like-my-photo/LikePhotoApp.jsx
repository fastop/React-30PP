import React, {useState} from 'react'
import Title from '../components/Title'

import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'

import GogyDog from './imgs/doggy.jpg'

export default function LikePhotoApp() {

  // let like = false;
  const [like, setLikeState] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {

    if(!like){
       setLikeState(true);
       setCount(count + 1);
    }
    else {
      setLikeState(false);
      setCount(count - 1);  
    }
  }

  return (
    <div className='container text-center'>

            <Title text="Like Photo App" />
            <Title classes="subtitle" text={"Likes " + count}/>

            <div className="card card-dark m-auto" style={{width: 300, cursor: "pointer"}}>
                <div className="card-header fs-xl">
                  <AiFillSmile className="mr-2"/> 
                    <small> Doggy Dog</small>
                </div>
                <img src={GogyDog} alt="img" style={{height: "fit-content"}}/>

                <div className="card-footer fs-xl d-flex" style={{ justifyContent: "space-between"}}>
                    <AiOutlineComment/> 
                    {like ? <AiFillHeart onClick={toggleLike} className="text-danger"/> : <AiOutlineHeart onClick={toggleLike}/>} 
                   {/*  {like ? 1 : 0 }  */}
                </div>

            </div> 




      
    </div>
  )
}
