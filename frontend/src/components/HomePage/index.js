import './HomePage.css';
import CenterPageComponent from './CenterPageComponent'

export default function HomePage(){
    return(
        <div className='centerPageContainer'>
            <CenterPageComponent imgUrl='https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
            <CenterPageComponent />
        </div>
    )
}
