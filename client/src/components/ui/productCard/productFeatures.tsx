import React from 'react';
import './productFeatures.scss';
import { ProductFeatures } from 'types/models/product';

interface ProductFeatureProps {
  features: ProductFeatures;
}

const ProductFeature = ({ features }: ProductFeatureProps) => {
  return (
    features && (
      <div className='product-features'>
        {features.isTop && (
          <div className='product-features__feature product-features__top'>
            TOP
          </div>
        )}
        {features.isNew && (
          <div className='product-features__feature product-features__new'>
            NEW
          </div>
        )}
      </div>
    )
  );
};

export default ProductFeature;
