import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 10px;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 800px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background: #ccc;
  margin: 5px;
  padding: 3px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.6);

  button {
    height: 30px;
    width: 100px;
    align-self: flex-end;
    background: #fba30e;
    color: #eee;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#fba30e')};
    }
  }
`;
