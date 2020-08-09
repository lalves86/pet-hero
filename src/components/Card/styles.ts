import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background: #ccc;
  margin: 5px;
  padding: 3px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.6);

  a {
    padding: 10px;
    width: 100px;
    align-self: flex-end;
    background: #fba30e;
    color: #eee;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    transition: background 0.2s;
    text-decoration: none;
    text-align: center;

    &:hover {
      background: ${shade(0.2, '#fba30e')};
    }
  }
`;
