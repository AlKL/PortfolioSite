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
            <Card image={blank}
                title="Sparkling Fresh Water"
                desc="Website for water bottle store, Sparkling Fresh Water, that showcases their main products and services."
                languages="JavaScript, React, Node, Express, MongoDB, HTML, CSS"
            />
            <Card image={blank}
                title="Pathfinder"
                desc="Pathfinding visualizer to visualize how various algorithms search for a path."
                languages="JavaScript, HTML, CSS"
            />
            <Card image={blank}
                title="Unfocus"
                desc="Google Chrome extension based on Google Chrome extension based onGoogle Chrome extension based on"
                languages="JavaScript, HTML, CSS"
            />
            <Card image={blank}
                title="The Office Plants"
                desc="Plants Watering Idea Plants Watering IdeaPlants Watering IdeaPlants Watering IdeaPlants Watering IdeaPlants Watering Idea"
                languages="C#, .NET, JavaScript, SQL Server, HTML, CSS"
            />
            <Card image={blank}
                title="Good Luck Interviewing!"
                desc="Good Luck Interviewing! Good Luck Interviewing!Good Luck Interviewing!Good Luck Interviewing!"
                languages="React, JavaScript, HTML, CSS"
            />
            <Card image={blank}
                title="TBA"
            />
            {/* you can have a card that says more to come */}
        </ScrollAnimation>

    )
}

export default cardController;