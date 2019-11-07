import React from 'react'
import HomePanel1 from '../components/HomePanel1'
import HomePanel2 from '../components/HomePanel2'
import HomePanel3 from '../components/HomePanel3'



//user={this.state.user} signin={this.signin} logout={this.logout} 
const Home = (props) => {
  
        return(
            <>
            {/* <NavBar user={props.user} /> */}
            <HomePanel1 />
            <HomePanel2 />
            <HomePanel3 />
            {/* <Footer /> */}
            </>
        )
        
    
}

export default Home