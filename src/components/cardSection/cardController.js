import '../../styles/styles.css';
import Card from './card'
import sparkling from '../../images/sparklinggif.gif'
import path from '../../images/pathgif.gif'
import unfocus from '../../images/unfocus.png'
import plants from '../../images/plants.png'
import interview from '../../images/interview.png'
import recursion from '../../images/recursion.png'
import ScrollAnimation from 'react-animate-on-scroll';
import blank from '../../images/blank.png'

const cardController = () => {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className='cardController' delay={200}>
            <Card image={sparkling} desc="testing the description of this card"/>
            <Card image={path} desc="testing the description of this card"/>
            <Card image={unfocus} desc="testing the description of this card"/>
            <Card image={plants} desc="testing the description of this card"/>
            <Card image={interview} desc="testing the description of this card"/>
            <Card image={recursion} desc="testing the description of this card"/>
            {/* you can have a card that says more to come */}
        </ScrollAnimation>

    )
}

export default cardController;