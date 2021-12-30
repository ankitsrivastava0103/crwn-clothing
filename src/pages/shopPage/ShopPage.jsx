import { Component } from 'react'
import CollectionsPreview from '../../components/collectionsPreview/CollectionsPreview'
import SHOP_DATA from './shopData'

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionsPropss }) => (
          <CollectionsPreview key={id} {...otherCollectionsPropss} />
        ))}
      </div>
    )
  }
}

export default ShopPage
