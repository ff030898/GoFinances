import React from "react";
import { FlatList } from "react-native";
import { HighlightCard } from "../../components/HighlightCard";
import { getBottomSpace } from "react-native-iphone-x-helper";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";


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
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  
  const data: DataListProps[] = [
    {
      id: "1",
      name: "Pagamento",
      amount: "R$ 1.836,00",
      category: {
        name: "Salário",
        icon: "dollar-sign",
      },
      date: "06/05/2022",
      type: "positive",
    },

    {
      id: "2",
      name: "Conta de Luz",
      amount: "R$ 153,00",
      category: {
        name: "Contas",
        icon: "shopping-bag",
      },
      date: "13/05/2022",
      type: "negative",
    },

    {
      id: "3",
      name: "Internet",
      amount: "R$ 20,00",
      category: {
        name: "Contas",
        icon: "shopping-bag",
      },
      date: "13/05/2022",
      type: "negative",
    },

    {
      id: "4",
      name: "Sky",
      amount: "R$ 486,00",
      category: {
        name: "Contas",
        icon: "shopping-bag",
      },
      date: "13/05/2022",
      type: "negative",
    },

    {
      id: "5",
      name: "FGTS",
      amount: "R$ 1.200,00",
      category: {
        name: "Salário",
        icon: "dollar-sign",
      },
      date: "13/05/2022",
      type: "positive",
    },
  ];

  
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
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          {
            paddingBottom: getBottomSpace()
          }
        }
      />
      </Transactions>
    </Container>
  );
}
