import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'
import './CollectionsPreview.scss'

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <div className='title'>{title.toUpperCase()}</div>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionsPreview
