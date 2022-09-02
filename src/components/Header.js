import troll_face from '../images/troll_face.png'

export default function Header () {
    return (
        <div className='bg-P flex-row col-W w-200 justify-around'>
            <div className='flex-row'>
                <img className='img-troll-face' src= {troll_face} alt=''></img>
                <h2 className='m-l-10'>Meme Generator</h2>
            </div>
        </div>
    )
}