// CategoriesSection.js
import React from "react";
import styled from "styled-components";

const CategoriesSection = () => {
  const categories = [
    { name: "Red Apple", items: 20 },
    { name: "Snack", items: 26 },
    { name: "Vegetables", items: 25 },
    { name: "Strawberry", items: 26 },
    { name: "Black Plum", items: 26 },
  ];

  return (
    <CategoriesContainer>
      <h3>Featured Categories</h3>
      <CategoriesGrid>
        {categories.map((category) => (
          <CategoryCard key={category.name}>
            <h4>{category.name}</h4>
            <p>{category.items} items</p>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  padding: 50px;
`;

const CategoriesGrid = styled.div`
  display: flex;
  gap: 15px;
`;

const CategoryCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h4 {
    color: #000;
    font-size: 18px;
  }

  p {
    color: #666;
  }
`;

export default CategoriesSection;
