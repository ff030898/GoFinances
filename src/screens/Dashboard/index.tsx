import React, { useState } from "react";
import { FlatList } from "react-native";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import { getBottomSpace } from "react-native-iphone-x-helper";
import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [transactionType, setTransactionType] = useState("");

  let entriesTotal = 0;
  let expensiveTotal = 0;

  function handleTransactionTypeSelect(type: "positive" | "negative") {
    setTransactionType(type);
  }

  handleTransactionTypeSelect("positive");

  const data = [
    {
      id: "1",
      name: "Desenvolvimento de Site",
      amount: "R$ 4.000,00",
      category: "Vendas",
      date: String(new Date()),
      type: transactionType,
    },

    {
      id: "2",
      name: "Conta de Luz",
      amount: "R$ 153,00",
      category: "Vendas",
      date: String(new Date()),
      type: transactionType,
    },

    {
      id: "3",
      name: "Internet",
      amount: "R$ 20,00",
      category: "Vendas",
      date: String(new Date()),
      type: transactionType,
    },
  ];

  setTransactions(data as DataListProps[]);

  const transactionsFormatted: DataListProps[] = transactions.map(
    ({ amount, date, id, name, type, category }: DataListProps) => {
      if (type === "positive") entriesTotal += Number(amount);
      else expensiveTotal += Number(amount);
      const amountFormatted = Number(amount).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const dateFormatted = Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }).format(new Date(date));

      return {
        id,
        name,
        amount: amountFormatted,
        date: dateFormatted,
        type,
        category,
      };
    }
  );
  
  setTransactions(transactionsFormatted);

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/45288456?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Fabrício</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 2.900,00"
          lastTransaction="Ultima entrada dia 12 de Maio"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 20,00"
          lastTransaction="Ultima entrada dia 12 de Maio"
        />

        <HighlightCard
          type="total"
          title="Entradas"
          amount="R$ 2.880,00"
          lastTransaction="Ultima entrada dia 12 de Maio"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>

        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </Transactions>
    </Container>
  );
}
