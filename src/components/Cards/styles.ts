import styled from "styled-components/native";

export const Container = styled.TouchableOpacity``;

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_W};
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light_text_D};
  text-align: center;
  margin-top: 10px;
`;

export const Thumb = styled.Image`
  width: 100%;
  height: 500px;
  border-radius: 8px;
`;
