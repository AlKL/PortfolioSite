import '../../styles/styles.css';

const card = props => {
    return (
        <div className='cardContainer'>
            <div className='cardImage'>
                <img src={props.image} className='cardImageImg' alt='test'></img>
                <div className='cardImageOverlay'>
                    <div className='cardItemDesc'>
                        <div className='cardItemDescTitle'>
                            {props.title}
                        </div>
                        <div className='cardItemDescDesc'>
                            {props.desc}
                        </div>
                        <div className='cardItemDescLang'>
                            {props.languages}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;