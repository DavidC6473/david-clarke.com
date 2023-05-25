import React from 'react';
import './java.css';
import JavaImage from './java.png';

const Java = () => {
  return (
    <div className='java-container'>
      <div className='java-content'>
        <h2 className='java-heading'>Pronoun Usage</h2>
        <div className='java-image-container'>
          <img className='java-image' src={JavaImage} alt='An image' />
        </div>
        <p className='java-paragraph'>In this project, I developed a Processing sketch that allows a user to explore movie dialogue and test the number of personal pronouns used by a character. The project involved working with external datasets in CSV format, which required configuring the Processing environment to use more memory. To represent the datasets, I used the Table data type.</p>
        <p className='java-paragraph'>The sketch features a user interface implemented using a GUI library, where the user can select a movie from a large list of movies stored in the movie_titles_metadata dataset. Once a movie is selected, the sketch extracts all of the dialogue in the movie_lines dataset relating to the selected character.</p>
        <p className='java-paragraph'>To analyze each line of dialogue, I used the RiTa library, which provides functions for natural language processing without the overhead of a full NLP or machine-learning stack. In particular, I used RiTa.pos to identify the Penn part-of-speech tags. Once the character lines were analyzed, I identified how many of them contained personal pronouns by calculating the percentage of lines of dialogue containing a personal pronoun.</p>
        <p className='java-paragraph'>The results are presented to the user on a CP5 Pie chart. The sketch also features a drop-down menu that allows the user to select a character from the selected movie, which triggers the extraction and analysis of the character's lines.</p>
        <p className='java-paragraph'>Overall, this project required a lot of attention to detail and problem-solving skills, particularly when it came to optimizing the memory usage of the Processing environment and ensuring the accurate counting of personal pronouns.</p>
        <p className='java-paragraph'>Feel free to check out this project and others on my GitHub: </p>
        <p className='java-paragraph'><a className='java-link' href='https://github.com/DavidC6473/Java-Pronoun-Use-Movies' target='_blank'>https://github.com/DavidC6473/Java-Pronoun-Use-Movies</a></p>
      </div>
    </div>
  );
};

export default Java;