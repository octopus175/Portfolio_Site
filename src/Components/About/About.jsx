import './About.style.css'
import skillImg from './skillImg';
import profilePic from "../../Assets/Images/programmer.png";

function About() {
    function skillSet(){
        
        return skillImg.map(({id, text, img}) => {
            return(
                <div className='skill-card' key={id}>
                    <img alt={text} src={img} className="skill-img"/>
                    {text}
                </div>
            )
        })
    }
    
    return(
        <section id="about" className='about'>
            <h1 className='about-title'>About me</h1>
            <div className='profile-text'>
                <img alt='profile' src={profilePic} className="profile-pic"/>
                <p className='about-paragraph'>
                Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React and all things web development. 
                The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development.
                When I'm not at my computer I like to spend my time reading, keeping fit and playing guitar.
                </p>
            </div>
            <div className='skills'>
                {skillSet()}
            </div>
        </section>
    )
}

export default About;