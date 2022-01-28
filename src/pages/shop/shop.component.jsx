import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection.component'
import './shop.styles.scss'
import SHOP_DATA from './shop.data.js'

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state

        return (
            <div className='shop.page'>
                {
                    collections.map(({ id, ...props }) => (
                        <CollectionPreview key={id} {...props} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage