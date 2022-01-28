import React from 'react'
import CollectionItem from '../CollectionItem'
import './style.scss'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.slice(0, 4).map(({ id, ...props }) => (
                <CollectionItem key={id} {...props} />
            ))}
        </div>
    </div>
)


export default CollectionPreview