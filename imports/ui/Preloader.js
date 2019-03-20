import React from 'react';

export default class Preloader extends React.Component {
    
    componentDidMount(){
        $('.status').fadeOut();
        $('.preloader').fadeOut();
    }
    
    render () {
        return (
            <div className ="preloader"><div className="status"></div></div>
        );
    }
};