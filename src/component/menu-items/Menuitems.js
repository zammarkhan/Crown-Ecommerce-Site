import React, { Component } from 'react';
import './Menuitems.scss';
import { withRouter } from 'react-router-dom';
class Menuitems extends Component {
    handleClick = (link) => {
           this.props.history.push(link)
    }
    render() {
        return (
            <div className={`${this.props.size} menu-item`} onClick = {() => this.handleClick(this.props.linkUrl)} >
               
                <div className="background-image"
                    style={{
                        backgroundImage: `url(${this.props.imageUrl})`
                    }}>
                </div>
                <div className="content">
                    <h1 className="title">{this.props.title.toUpperCase()}</h1>
                    <span className="subtitle">Shop Now</span>
                
                </div>
            </div>
        );
    }
}

export default withRouter(Menuitems);
