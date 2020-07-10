import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', width: '376px', backgroundImage:'url(' + require('./img1.png') + ')'}} >Apple-Page </CardTitle>
           
            <CardText>
              It's a simple project that shows implementation of a web-page design- Apple home-page.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Sick-Carlito/Apple-Page"> GitHub</a></Button>
               
              <Button colored><a href="https://raw.githack.com/Sick-Carlito/Apple-Page/Feature-1/index.html">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', width: '376px', backgroundImage:'url(' + require('./img2.png') + ')'}} >Bootstrap-project</CardTitle>
            <CardText>
             A simple project working with Bootstrap 4, HTML and CSS.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Sick-Carlito/Bootstrap-project">GitHub</a></Button>
              
              <Button colored><a href="https://rawcdn.githack.com/Sick-Carlito/Bootstrap-project/22b07603ea94fd1055448d6f818e766313ee1a23/index.html">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', width: '376px', backgroundImage:'url(' + require('./img3.png') + ')'}} >Grid-Based-Framework</CardTitle>
            <CardText>
             Creating a simple css grid based framework.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Sick-Carlito/Grid-Based-Framework">GitHub</a></Button>
              
              <Button colored><a href="https://raw.githack.com/Sick-Carlito/Grid-Based-Framework/Feature-2/docs/index.html">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
            <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', width: '376px', backgroundImage:'url(' + require('./img5.png') + ')'}} >Social-media-project </CardTitle>
           
            <CardText>
              This is a simple web app that has basic faebook-like functions. It allows users to register new acounts and create posts. They can also comment on the posts and like or dislike them as well. Users can also add other users as friends by sending them a friend request. Which can either be rejected or accepted by the other user.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Sick-Carlito/ror-social-scaffold"> GitHub</a></Button>
               
              <Button colored><a href="https://boiling-plateau-13640.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height:'176px', width: '376px', backgroundImage:'url(' + require('./img6.png') + ')'}} >Twitter-Redesign</CardTitle>
            <CardText>
             This is a simple rails application that implements the use of active records, associations and the CRUD functionalities of rails. The app allows users to Register/Sign-up and post opinions on various topics. Users can also follow one another, edit and delete their posts.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Sick-Carlito/Twitter-Redesign">GitHub</a></Button>
              
              <Button colored><a href="https://young-fortress-46435.herokuapp.com/users/sign_in">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
            <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Portfolio-app </CardTitle>
           
            <CardText>
              A simple React based personal portfolio app using create-react-app and React Router v4.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Sick-Carlito/Portfolio"> GitHub</a></Button>
               
              <Button colored><a href="https://morning-inlet-14998.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>ReactJS</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
