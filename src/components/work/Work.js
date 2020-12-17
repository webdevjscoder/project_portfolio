import React from 'react';
import './Work.css';
import gamingImage from '../../images/gaming-image.jpg';
import tennisImage from '../../images/tennis-image.jpg';
import carImage from '../../images/bizarre-dealership-image.jpg';
import foodImage from '../../images/feed-your-cravings-image.jpg';
import macronImage from '../../images/cece-pastry-macaron-image.jpg';

function Work() {
    return (
        <div className='work-container'>
            <div className='title'>
                <h1>From skeletons to full fleshed applications. A look at my creations.</h1>
                <br/>
                <p>
                    Expected to be expanded.
                </p>
            </div>
            <div className='projects'>
                <div className='project-1'>
                    <div className='project-1-image'>
                        <img src={gamingImage}/>
                    </div>
                    <div className='project-1-info'>
                        <h3>Game Reviews</h3>
                        <p>
                            Game reviews is design to provide users the information many gamers desire before purchasing
                            a game. Whether its the professional unbiased opinions, information, or ratings.
                        </p>
                        <a href="https://github.com/webdevjscoder/game_reviews">
                            <h4>Learn more ></h4>
                        </a>
                    </div>
                </div>
                <div className='project-2'>
                    <div className='project-2-image'>
                        <img src={tennisImage}/>
                    </div>
                    <div className='project-2-info'>
                        <h3>World Sports News</h3>
                        <p>
                            Wanna know how your favorite team is doing this season? Or do you wanna know is your
                            favorite player is playing this week? Well with world sports news you get all that and more.
                        </p>
                        <a href="https://github.com/webdevjscoder/world_sports_news">
                            <h4>Learn more ></h4>
                        </a>
                    </div>
                </div>
                <div className='project-3'>
                    <div className='project-3-image'>
                        <img src={carImage}/>
                    </div>
                    <div className='project-3-info'>
                        <h3>Bizarre Car Dealership</h3>
                        <p>
                            Bizarre car dealership is the ultimate site for car buying. Who wants to wait hours at a
                            dealership purchasing a new car? At Bizarre car dealership the user is presented with a fast
                            and easy buying experience.
                        </p>
                        <a href="https://github.com/webdevjscoder/car_dealership_rails">
                            <h4>Learn more ></h4>
                        </a>
                    </div>
                </div>
                <div className='project-4'>
                    <div className='project-4-image'>
                        <img src={foodImage}/>
                    </div>
                    <div className='project-4-info'>
                        <h3>Feed Your Cravings</h3>
                        <p>
                            Craving something that probably doesn't exist? Well look no further, here at feed your
                            cravings a user is provided with unique and unbelievable dishes. With the ability to craft
                            your own dish for others to try for themselves.
                        </p>
                        <a href="https://github.com/webdevjscoder/feed-your-cravings-frontend">
                            <h4>Learn more ></h4>
                        </a>
                    </div>
                </div>
                <div className='project-5'>
                    <div className='project-5-image'>
                        <img src={macronImage}/>
                    </div>
                    <div className='project-5-info'>
                        <h3>Cece Pastry Creations</h3>
                        <p>
                            Cece pastry creations is a bakery application for users who are looking to purchase for an
                            upcoming event. From birthday cakes to wedding cakes and everything in between cece pastry
                            creations has you covered.
                        </p>
                        <a href="https://github.com/webdevjscoder/cece_pastry_creations_frontend">
                            <h4>Learn more ></h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;