import './feature.css'


function Feature({title, image, para}) {
    return (
        <div className='feature-item'>
            <img src={image} className='feature-icon' alt='chat Icon'/>
            <h3 className='feature-item-title'>{title}</h3>
            <p>{para}</p>
        </div>
    )
}

export default Feature
