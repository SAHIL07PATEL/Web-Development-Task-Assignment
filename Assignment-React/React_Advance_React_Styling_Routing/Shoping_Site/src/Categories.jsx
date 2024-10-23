import React from 'react';
import styled from 'styled-components';

const CategoriesContainer = styled.section`
  padding: 40px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
`;

const CategoryGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  margin: 10px;
  border-radius: 10px;
  width: 150px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const categories = [
  { name: 'Red Apple', img: 'https://images.unsplash.com/photo-1716802043669-8aabd339dc00?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Vegetables', img: 'https://images.unsplash.com/photo-1605522283494-4901a98d458e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Snack', img: 'https://images.unsplash.com/photo-1610137512859-aa919f651a05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Strawberry', img: 'https://images.unsplash.com/photo-1590194360975-c250dde6520d?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Black Plum', img: 'https://images.unsplash.com/photo-1627544523728-8c591c169d6b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Custard Apple', img: 'https://images.unsplash.com/photo-1627521742129-bf9cda19b21f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Categories = () => {
  return (
    <CategoriesContainer>
      <Title>Featured Categories</Title>
      <CategoryGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategoriesContainer>
  );
};

export default Categories;
