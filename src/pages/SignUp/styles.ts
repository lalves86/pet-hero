import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 360px;
      margin-bottom: 10px;
    }

    button {
      padding: 10px;
      border-radius: 6px;
      border: none;
      background: #fba30e;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#fba30e')};
      }
    }
  }
`;
