import React from 'react';
import './foodCategoryButton.scss';

interface FoodCategoryButtonProps {
  text: string;
  image: string;
  isInHeader?: boolean;
  onClickFunction?(categoryName: string): void;
  selectedCategory?: string;
  categoryName?: string;
}

const FoodCategoryButton = ({
  text,
  image,
  isInHeader,
  onClickFunction,
  selectedCategory,
  categoryName,
}: FoodCategoryButtonProps) => {
  return (
    <button
      className={
        'food-category-button' +
        (isInHeader ? ' food-category-button_in-header' : '') +
        (selectedCategory === categoryName
          ? ' food-category-button_selected'
          : '')
      }
      onClick={() => {
        onClickFunction(categoryName);
      }}
    >
      <img src={image} alt={text} />
      <span
        className={
          'food-category-button__text' +
          (isInHeader ? ' food-category-button__text_in-header' : '')
        }
      >
        {text}
      </span>
    </button>
  );
};

export default FoodCategoryButton;
