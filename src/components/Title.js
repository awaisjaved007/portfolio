import React, {Component} from 'react';

const TITLES = [
    'a software engineer',
    'a musician',
    'a sports person',
    'a quick learner'
];

class Title extends Component{
    state = {titleIndex: 0}

    componentDidMount(){
        console.log('Title component has mounted.');
        this.animateTitle();
    }

     animateTitle = () => {
        this.intervalState = setInterval(()=>{
            
            const titleIndex  = (this.state.titleIndex + 1 ) % TITLES.length;

            this.setState({titleIndex});
        
        },
        4000);
    }

    componentWillUnmount(){
       clearInterval(this.intervalState);
    }


    render() {
        const titleIndex = this.state.titleIndex;
        return (
            <p>I am a {TITLES[titleIndex]}.</p>
        )
    }
}

export default Title;