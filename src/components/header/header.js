import '../../styles/styles.css';
import ScrollAnimation from 'react-animate-on-scroll';
import $ from 'jquery';
import scroll from '../../images/scroll.png'

const Header = () => {
    return (
        <div className='header typewriter'>
            <div className='typewriterSize'>
                <h1>Alexandre Khien</h1>
            </div>
            <div className='topborder'>
                <h2>Software Developer<span className='blink'></span></h2>
            </div>
            <div className='downArrow'>
                {/* <img src={scroll} alt='scroll icon'></img> */}
                <div class="blob"></div>
                <div class="blob"></div>
                <div class="blob"></div>
            </div>
        </div>
    )
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.downArrow').fadeOut();
    } else {
        $('.downArrow').fadeIn();
    }
});
export default Header;