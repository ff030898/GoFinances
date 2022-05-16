import React from "react";

import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title,
} from "./styles";

export interface TransactionCardProps {
  name: string;
  amount: string;
  category: Category;
  date: string;
  type: "positive" | "negative";
}

interface Category {
  name: string;
  icon: string;
}
interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  
  return (
    <Container>
      <Title>{data.name}</Title>
      {data.type ? (
        <Amount type={data.type}>
          {data.type === "negative" && "- "}
          {data.amount}
        </Amount>
      ) : (
        <></>
      )}

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
