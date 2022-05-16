import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransictionTypeButton } from "../../components/Forms/TransictionTypeButton";
import { Container, Header, Title, Form, Fields, TransictionsType } from "./styles";

export function Register() {

  const [transactionType, setTransactionType] = useState("");

  function handleTransactionType(type: "up" | "down"){
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransictionsType>
            <TransictionTypeButton type="up" title="Income" onPress={() => handleTransactionType("up")} isActive={transactionType === "up"}/>
            <TransictionTypeButton type="down" title="Outcome" onPress={() => handleTransactionType("down")} isActive={transactionType === "down"} />
          </TransictionsType>
          <Input placeholder="Categoria" />
        </Fields>

        <Button title="Cadastrar"/>
      </Form>

    </Container>
  );
}
