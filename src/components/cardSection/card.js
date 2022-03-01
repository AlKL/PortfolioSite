import '../../styles/styles.css';

const card = props => {
    return (
        <div className='cardContainer'>
            <div className='cardContent'>
                <img src={props.image} alt='test'></img>
            </div>
        </div>
    )
}

export default card;