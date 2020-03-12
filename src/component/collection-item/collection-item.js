import React, { Component } from 'react';
import './collection-item.scss';    
class CollectionItem extends Component {
    render() {
        return (
            <div className="collection-item">
                <div className="image"
                    style={{ backgroundImage: `url(${this.props.imageUrl})` }}
                />
                <div className="collection-footer">
                    <span className="name">{this.props.name}</span>
                    <span className="price">{this.props.price}</span>

                </div>

            </div>
        );
    }
}

export default CollectionItem;