import '../../styles/styles.css';
import Card from './card'
import sparkling from '../../images/sparklinggif.gif'
import path from '../../images/pathgif.gif'
import unfocus from '../../images/unfocus.png'
import plants from '../../images/plants.png'
import interview from '../../images/interview.png'
import recursion from '../../images/recursion.png'

const cardController = () => {
    return (
        <div className='cardController'>
            <Card image={sparkling}/>
            <Card image={path} />
            <Card image={unfocus}/>
            <Card image={plants}/>
            <Card image={interview}/>
            <Card image={recursion}/>
        </div>
    )
}

export default cardController;