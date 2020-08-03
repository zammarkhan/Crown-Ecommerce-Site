import {createSelector} from 'reselect';
const selectShop = state => state.shop

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectCollectionsForPreview = createSelector(
    [selectCollection],
    collection => Object.keys(collection).map(key => collection[key])
)

export const selectCollectionUrl = collectionUrlParams => createSelector(
    [selectCollection],
    collection => collection[collectionUrlParams]
)