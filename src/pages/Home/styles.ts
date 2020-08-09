import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 10px;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  min-width: 650px;

  a,
  button {
    text-decoration: none;
    width: 200px;
    margin: 0 50px 5px 5px;
    text-align: center;
    border: 1px solid #fba30e;
    border-radius: 4px;
    color: black;
    padding: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.1, '#fff')};
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 800px;
`;
