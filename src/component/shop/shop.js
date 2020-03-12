import React, { Component } from 'react';
import SHOP_DATA from './shop_data';
import Previewcollection from '../preview-collection/preview_collection';
class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const {collection} = this.state;
        return (
            <div>
               { collection.map(({id, ...otherCollectionProps}) => (
                   <Previewcollection key={id} {...otherCollectionProps}/>
                ))}

            </div>
        );
    }
}

export default Shop;