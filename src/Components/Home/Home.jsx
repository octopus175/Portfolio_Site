import './Home.style.css'

function Home() {
    return(
        <section id="home" className="home">
            <div className='introduction'>
                <div className='introduction-text'>
                    <span>Hi, my name is</span>
                    <h1>Matthew Law</h1>
                    <h1 style={{"color": "#677997"}}>Coding is my passion</h1>
                    <p>
                    I am a software developer specializing in blah blah and doing something something. 
                    Currently I am looking for something to do, for the love of god please hire me.
                    </p>
                </div>
                <div className='resume'>
                    <span className='resume-button-arrow'>{'>'}</span>
                <button className='resume-button' onClick={() => {window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank')}}>Download Resume</button>
                    <span className='resume-button-arrow'>{'<'}</span>
                </div>
                
            </div>
        </section>
    )
}

export default Home