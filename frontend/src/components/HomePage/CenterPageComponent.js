import './CenterPageComponent.css';

export default function CenterPageComponent({imgUrl}){
    return(
        <div className='block'>
            <img src={imgUrl} className='imgSize'/>
        </div>
    )
}
