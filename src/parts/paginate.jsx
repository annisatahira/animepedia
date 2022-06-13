import styled from "@emotion/styled";

export const StyledPaginateContainer = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 5rem 3rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    margin: 5px;
    border-radius: 5px;
    min-height: 44px;
    min-width: 44px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    color: rgb(47, 90, 148);
  }

  a {
    padding: 0.75rem;
    font-size: 16px;
    min-height: 44px;
    min-width: 44px;
    text-align: center;
    font-weight: bold;
  }

  li.previous,
  li.next,
  li.selected {
    background: #1b4173;
    color: #fff;
  }

  li.previous.disabled {
    background: #dddddd;
    color: gray;
  }
`;
