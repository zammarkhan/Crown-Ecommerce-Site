import React, { Component } from 'react';
import '../preview-collection/preview-collection.style.scss';
import CollectionItem from '../collection-item/collection-item';

class PreviewCollection extends Component {
    render() {
        return (
            <div className="collection-preview">
                <h1 className="title">
                    {this.props.title.toUpperCase()}
                </h1>
                <div className="preview">
                    {
                        this.props.items.filter((item,idx) => idx < 4).map(({id,...otherItemProps}) => {
                        return <CollectionItem key={id} {...otherItemProps}/>
                        })
                    }

                </div>
                
            </div>
        );
    }
}

export default PreviewCollection;