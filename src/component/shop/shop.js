import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../collection-overwiew/collection-oveview'
import Collection from '../collection/collection'
const Shop = ({match}) => 
   (
            <div>
                <Route exact path = {`${match.path}`}  component={CollectionOverview}/>
                <Route path = {`${match.path}/:collectionId`}  component={Collection}/>
            </div> 
    );


export default  Shop;