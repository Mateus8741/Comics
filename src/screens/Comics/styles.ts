import styled from "styled-components/native";

export const SafeAreaContent = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_D};
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_D};
`;

export const Roll = styled.FlatList`
  padding: 10px 30px;
`;
