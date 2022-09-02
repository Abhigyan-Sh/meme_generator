import data from '../data'
import { useState } from 'react'

export default function Interaction () {
    function MemePic () {
        let index= (Math.random())* 10**4;
        index= index % (data.data.memes.length)
        index= Math.floor(index)
        let my_user_data= data.data.memes[index]
        console.log(my_user_data)
        let memePic= data.data.memes[index].url
        return memePic
    }
    let [meme, setMeme] = useState("")
    const [ firstTxt, setFirstTxt ] = useState('')
    const [ secondTxt, setSecondTxt ] = useState('')
    function changeMeme () {
        setMeme(() => MemePic())
    }
    return (
        <div className='flex-col-center m-awe'>
            <div className='grid-top'>
                <input className='font-S-26' type= 'text' placeholder='write first text' maxLength= '32' value= {firstTxt} onChange= {(e)=>{setFirstTxt(e.target.value)}}></input>
                <input className='font-S-26' type= 'text' placeholder='write second text' maxLength= '32' value= {secondTxt} onChange= {(e)=>{setSecondTxt(e.target.value)}}></input>
                <button className='col-To font-S-26 bg-P' onClick={changeMeme}>Get a new image</button>
            </div>
            <div className='m-t-30 cus2'>
                <p className= 'cus1 cus-lft'>{firstTxt}</p>
                <img src= {meme} alt= '' className='w-100'></img>
                <p className= 'cus1 cus-btm-lft'>{secondTxt}</p>
            </div>
        </div>
    )
}
/* we don't need to put all this in form and since clicking 
button would refresh our page so we are gonna put it in div */

/* using form made it simple though since anything written in input was also cleared but 
still won't use it since it takes more time since it reloads page. */

/* <form action='' onsubmit=''>
        <div>
            <input type= 'text' id= '' name='' placeholder='write first text' maxlength= '30'></input>
            <input type= 'text' id= '' name='' placeholder='write second text' maxlength= '30'></input>
        </div>
        <button>Get a new image</button>
</form> */
