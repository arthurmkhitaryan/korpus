"use client";

import { useAppDispatch } from '@/store/hooks';
import { productsData } from './mock';
import ProductItem from './ProductItem';

// styles
import * as S from './Products.styled';

import { useCallback, useEffect, useState } from 'react';
import { updateStepData } from '@/features';

interface SelectedProduct {
    count: number;
    productId: number | string;
    productName: string;
}

interface StepProps {
    onNext: (data: any) => void;
    onPrev: () => void;
    data: any;
    step: number;
}

export default function Products({ data, step }: StepProps) {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>();
  const dispatch = useAppDispatch();  

  const handleRemoveProduct = useCallback((productId: string | number) => {
    setSelectedProducts((prevState) => {
      return prevState?.filter((product) => product.productId !== productId);
    });
  }, [])

  const handleSelectProduct = useCallback((productId: string | number, productName: string, count: number) => {
    console.log({ count })
    setSelectedProducts((prevState) => {
      const isProductSelected = prevState?.find((product) => product.productId === productId);

      if (isProductSelected) {
        return prevState?.map((product) => {
          if (product.productId === productId) {
            return {
              ...product,
              count,
            };
          }

          return product;
        });
      }

      return [
        ...(prevState || []),
        {
          productId,
          productName,
          count,
        },
      ];
    })
  }, [])

  useEffect(() => {
    const updatedData = { ...data, products: selectedProducts };
    dispatch(updateStepData ({ data: updatedData, step }));
  }, [selectedProducts]);

  console.log(selectedProducts);

  return (
    <S.ProductsWrapper>
      <S.Title>Korpuses</S.Title>
      <S.Products>
        {productsData.map((product) => (
          <ProductItem 
            key={product.id} 
            product={product} 
            handleSelectProduct={handleSelectProduct} 
            handleRemoveProduct={handleRemoveProduct}
          /> 
        ))}
      </S.Products>
    </S.ProductsWrapper>
  );
}