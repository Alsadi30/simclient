import Call from '../../assets/img/Call.jpg'
import thumbnail2 from '../../assets/img/thumbnail2.jpeg'
import thumbnail3 from '../../assets/img/thumbnail3.jpeg'
import thumbnail4 from '../../assets/img/thumbnail4.jpeg'

const Thumbnail = () => {
    
    return (
        <div className='thumbnails'>
            <img className='thumbnail' src={Call} alt='offer' height='350px'  />
            <img className='thumbnail' src={thumbnail2} alt='offer' height='350px'  />
            <img className='thumbnail' src={thumbnail3} alt='offer' height='350px' />
            <img className='thumbnail' src={thumbnail4} alt='offer' height='350px' width='255px'  />
        </div>
    )
}


export default Thumbnail