import React, { Component } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from 'prop-types'
import landingbr from '../images/background-1.jpg'
import 'semantic-ui-css/semantic.min.css'
///brands 
import coinbase from '../images/coinbase.png'
import bf from '../images/facebook-logo-1-1.png'
import snap from '../images/Snapchat-Logo-Png-Transparent-Background.png'
import uber from '../images/Uber_logo_2018.png'
import sing from '../images/singularity-university-new-logo.png'

import mastercard from '../images/mastercard.png'
import universal from '../images/universal.png'
import gm from '../images/gm.png'
import ft from '../images/ft.png'
import pg from '../images/p&g.png'
import wolk from '../images/wolkswagen.png'
import cities from '../images/cities.jpeg'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Reach Your Global Audience...'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
              style={{ minHeight: 800, padding: '1em 0em',  backgroundImage: `url(${landingbr})`,
        backgroundSize: 'cover' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
               style={{ minHeight: 800, padding: '1em 0em',  backgroundImage: `url(${landingbr})`,
        backgroundSize: 'cover' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>
         We help entertainment businesses monetise their global fanbases and open new revenue streams in the modern digital economy.
        </Header>
      </Container>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <p style={{ fontSize: '1.33em' }}>
              We make it easy for you to deal with the complexities of running a modern entertainment brand.
            </p>
           <p style={{ fontSize: '1.33em' }}>
             Armed with unique data and actionable insight, we understand how technology can be used to create more engaging experiences for your fans around the world. 
            </p>
          </Grid.Column>
        <Grid.Column width={8}>
           <p style={{ fontSize: '1.33em' }}>
             Our technology and services help you develop a sophisticated approach to building direct-to-fan relationships and gaining a competitive advantage
            </p>
            <p style={{ fontSize: '1.33em' }}>
              To achieve your business goals, you need a cost-effective way to monetise high-value customers in emerging markets like Southeast Asia and Sub-Saharan Africa.
            </p>
          
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
     <Container text>
      <br/>
       <br/>
        <p style={{ fontSize: '1.33em',textAlign:'center' }}>
      Our team has the collective track record of working at some of the world's most innovative technology companies. We take playbooks from our extensive professional experience and apply them to your specific business challenges.
        </p>
      </Container>
      <br/>
      <br/>
       <br/>
    <Grid container columns={3} doubling align='center'>
      <Grid.Column>
       <Image  size='medium' src={bf}  />
      </Grid.Column>
      <Grid.Column>
        <Image  size='medium' src={coinbase}  />
      </Grid.Column>
      <Grid.Column>
        <Image  size='small' src={snap}  />
      </Grid.Column>
      <Grid.Column>
        <Image  size='small' src={uber}  />
      </Grid.Column>
      <Grid.Column>
        <Image  size='medium' src={sing}  />
      </Grid.Column>
      <Grid.Column>
        <Image  size='medium' src='{bf}'  />
      </Grid.Column>
    </Grid>
    </Segment>
  <Segment style={{ padding: '0em' }} vertical>
   <Container text>
    <br/>
      <br/>
        <p style={{ fontSize: '1.33em',textAlign:'center' }}>
      We have spent years building global solutions and working with some of the world's largest consumer brands: 
        </p>
         <br/>
          <br/>
      </Container>
      <br/>
      <br/>
    <Grid container columns={3} doubling align='center'>
      <Grid.Column>
       <Image rounded size='large' src={mastercard} />
      </Grid.Column>
      <Grid.Column>
        <Image rounded size='large' src={universal} />
      </Grid.Column>
      <Grid.Column>
       <Image rounded size='small' src={gm} />
      </Grid.Column>
      <Grid.Column>
      <Image rounded size='small' src={ft} />
      </Grid.Column>
      <Grid.Column>
      <Image rounded size='medium' src={pg} /> 
      </Grid.Column>
      <Grid.Column>
        <Image rounded size='small' src={wolk} />
      </Grid.Column>
    </Grid>
    </Segment>
     <Container text align='center'>
      <br/>
       <br/>
        <p style={{ fontSize: '1.33em',textAlign:'center' }}>
    We have built a global network of expertise - from Silicon Valley to London, Dubai to Karachi, Hong Kong to Manila. International business is part of our DNA.
        </p>
 <Image rounded size='large' src={cities} />
         <p style={{ fontSize: '1.33em',textAlign:'center' }}>
    We have built a global network of expertise - from Silicon Valley to London, Dubai to Karachi, Hong Kong to Manila. International business is part of our DNA.
        </p>
      </Container>
      <br/>
      <br/>
         <Container text align='center'>
          <br/>
      <br/>
        <p style={{ fontSize: '1.33em',textAlign:'center' }}>
    Onefan brings all of these worlds together. Let’s discuss how we can help you.
        </p>
         <p style={{ fontSize: '1.33em',textAlign:'center' }}>
   Gen in touch to learn more. Tell us what’s on your mind.
Contact anthony@onefan.tv
        </p>
         <br/>
      <br/>
      </Container>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
