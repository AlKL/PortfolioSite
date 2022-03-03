import '../../styles/styles.css';

const card = props => {
    return (
        <div className='cardContainer'>
            <div className='cardImage'>
                <img src={props.image} className='cardImageImg' alt='test'></img>
                <div className='cardImageOverlay'>
                    <span className='cardItemDesc'>{props.desc}</span>
                </div>
            </div>
        </div>
    )
}

export default card;