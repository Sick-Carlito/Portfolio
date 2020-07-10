import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import img4 from './img4.jpg';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={img4}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Carl Bond</h2>
            <h4 style={{color: 'grey'}}>Full-Stack web developer</h4>
          
            

            <h4 style={{color: 'grey'}}>Summary</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I’m a full stack web developer who loves building responsive and nice looking websites.</p>
            
            
            <h4 style={{color: 'grey'}}>Contacts</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(+254) 704 965 601</p>
            <h5>Email</h5>
            <p>carlb1319@gmail.com</p>
            <h5>LinkedIn</h5>
            <p><a href="https://www.linkedin.com/in/carlb420/" >carl bond</a></p>
            <h5>Twitter</h5>
            <p><a href="https://twitter.com/cbond_420">@cbond_420</a></p>
            <h5>Github</h5>
            <p><a href="https://github.com/Sick-Carlito">Sick-Carlito</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear="Present"
              schoolName="Microverse"
              schoolDescription="Remote Full Stack Web Development Program, Full Time"
              />
              
                <List class="list">
                 <ListItem class="list-item">Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.</ListItem>
                 <ListItem class="list-item">Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.</ListItem>
                 <ListItem class="list-item">Learned fundamentals of full-stack web development: git, HTML/CSS, Ruby, Rails, JavaScript, React.</ListItem>
                 <ListItem class="list-item">Proposed improvements to code organization to improve code quality and overall performance.</ListItem>
                 <ListItem class="list-item">Spent over 80 hours learning and using algorithms and data structures.</ListItem>
                 <ListItem class="list-item">Worked via remote pair programming 40 hours/week.</ListItem>
                </List>
  
              
          

               <Education
                 startYear={2016}
                 endYear="Present"
                 schoolName="Maseno University"
                 schoolDescription="Computer Science, BSc"/>

                <List class="list">
                 <ListItem class="list-item">I have gained great collaborative skills working with other students.</ListItem>
                 <ListItem class="list-item">Mastered good communication skills and learning to interact with people of different backgrounds.</ListItem>
                 <ListItem class="list-item">Acquired the skill of proper time management as I always strive to complete any given tasks on time.</ListItem>
                 <ListItem class="list-item">Learned fundamentals of web development: HTML, CSS, Bootstrap, JavaScript.</ListItem>
                 <ListItem class="list-item">Learned different software development methodologies: Waterfall, Agile.</ListItem>
                </List>


                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear="Present"
              jobName="Microverse"
              jobDescription="Mentor (Volunteer)"/>
            
                <List class="list">
                 <ListItem class="list-item">Mentored junior web developers, providing technical support through code reviews.</ListItem>
                 <ListItem class="list-item">Provided general guidance and help to other students.</ListItem>
                 <ListItem class="list-item">Provided advice and tips on how to maintain motivation to maintain longevity in the program.</ListItem>
                 </List>

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Codecademy"
                jobDescription="Ruby Developer"/>

                <List class="list">
                 <ListItem class="list-item">Learned fundamentals of web development using Ruby.</ListItem>
                 <ListItem class="list-item">Spent more than 100+ hours solving technical challenges and completing various assignments.</ListItem>
                </List>

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="Ruby on Rails"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
