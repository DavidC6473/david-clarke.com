import React from 'react';
import './header.css';

const Header = () => {
    const tooltipContent = "Hey! Welcome to my website, built entirely from scratch. I'm David, a developer from Ireland. I recently completed my Interactive Media MSc degree with First Class Honours, and I'm excited to continue expanding my knowledge and skills in this dynamic field.\n\nCurrently, I'm focusing on enhancing my frontend development abilities, and I'm always eager to take on new challenges and explore the latest web technologies. On this site, you'll find examples of some of my past projects, as well as links to my GitHub and resume.\n\nAs a junior web developer, I'm passionate about creating engaging, user-friendly web experiences that deliver real value to businesses and individuals alike. Whether it's building responsive, mobile-first websites or developing cutting-edge web applications, I'm always striving to push the boundaries of what's possible in this exciting field.\n\nSo if you're looking for a talented and dedicated web developer to join your team, or if you have a project in mind that you'd like to discuss, I'd love to hear from you! Please feel free to reach out to me using the contact form on this site, and let's start building something great together.";

    return (
        <div className='dc__header section__padding' id='home'>
            <div className='dc__header-content'>
                <div className='title__text' data-tooltip={tooltipContent}>
                    <p className='title__text-animation'>DAVID CLARKE</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
