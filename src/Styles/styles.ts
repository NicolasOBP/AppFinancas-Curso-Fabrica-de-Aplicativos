import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #121212;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${(props: { cor: string }) => props.cor};
  font-size: 25px;
`;
export const Nome = styled.Text`
  color: #fff;
  font-size: 20px;
`;
