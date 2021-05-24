export default function CenterPageComponent(props){
    return(
            <img className='imgSize' src={props.imgUrl} style={{height: props.height, width:props.width}}/>
    )
}
