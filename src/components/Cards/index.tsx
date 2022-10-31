import React from "react";

import { ComicDTO } from "@/dTOS/comic";

import { TouchableOpacityProps } from "react-native";

import { CardContainer, Container, Thumb, Title } from "./styles";

interface ResponseData extends TouchableOpacityProps {
  data: ComicDTO;
}

export function Cards({ data, ...rest }: ResponseData) {
  return (
    <Container key={data.id} {...rest}>
      <CardContainer>
        <Thumb
          source={{
            uri: `${data.thumbnail?.path}.${data.thumbnail?.extension}`,
          }}
        />
        <Title>{data.title}</Title>
      </CardContainer>
    </Container>
  );
}
