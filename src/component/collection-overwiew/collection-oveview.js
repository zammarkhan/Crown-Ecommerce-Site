import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Previewcollection from '../preview-collection/preview_collection';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';


import '../collection-overwiew/collection-overview.scss'


const CollectionOverview = ({ collection }) => (
    <div className="collections-overview">
        {collection.map(({ id, ...otherCollectionProps }) => (
            <Previewcollection key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview
})

export default connect(mapStateToProps) (CollectionOverview);