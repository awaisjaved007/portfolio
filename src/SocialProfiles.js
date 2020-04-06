import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/SocialProfiles';

class SocialProfile extends Component{

    render(){

        const {link, image } = this.props.socialProfile;

        return (
            <div style={{display: 'inline-block', margin: 30}}>
                
              <a href={link}><img src={image} style={{width: 35, height: 35}}></img></a>
            </div>
        )
    }
}

class SocialProfiles extends Component{

    render(){
        return (
        <div>{SOCIAL_PROFILES.map(SOCIAL_PROFILE =>{
            return (
                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}  />
            )
           
        })}</div>
        )
    }
}

export default SocialProfiles;