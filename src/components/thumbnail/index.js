import dash1 from '../../assets/img/dash1.png'
import dash2 from '../../assets/img/dash2.png'

const Thumbnail = () => {
  return (
    <div className='thumbnails'>
      <img
        className='thumbnail'
        src={dash1}
        alt='offer'
        height='300px'
        width='62%'
      />
      <img
        className='thumbnail'
        src={dash2}
        alt='offer'
        height='300px'
        width='38%'
      />
    </div>
  )
}

export default Thumbnail
