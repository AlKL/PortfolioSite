import '../../styles/styles.css';
import headshot from '../../images/headshot.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import about from '../../images/about.png'
import resume from '../../images/resume.png'
import resumeLink from '../../images/resume.pdf'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='portfolioIcon'>
                <img src={headshot} alt='selfie'></img>
            </div>

            <div className='links'>
                <div className='iconContainer'>
                    <a href='http://localhost:3000/' target='_blank' rel="noopener noreferrer"><img src={about} alt='about me link'></img></a>
                    <p>About</p>
                </div>
                <div className='iconContainer'>
                    <a href='https://github.com/AlKL' target='_blank' rel="noopener noreferrer"><img src={github} alt='github link'></img></a>
                    <p>Github</p>
                </div>
                <div className='iconContainer'>
                    <a href='https://www.linkedin.com/in/khien/' target='_blank' rel="noopener noreferrer"><img src={linkedin} alt='linkedin link'></img></a>
                    <p>LinkedIn</p>
                </div>
                <div className='iconContainer'>
                    <a href={resumeLink} target='_blank' rel="noopener noreferrer"><img src={resume} alt='resume link'></img></a>
                    <p>Resume</p>
                </div>
                <div className='iconContainer'>
                    <a href='mailto:alexkhien@hotmail.com' target='_blank' rel="noopener noreferrer"><img src={email} alt='email link'></img></a>
                    <p>E-mail</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;