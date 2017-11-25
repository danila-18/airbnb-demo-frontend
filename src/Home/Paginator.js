import React, { Component } from 'react';
import styled from 'styled-components';
import { WordRegular, ParagraphRegular } from './../UI/UI';
import { color } from './../UI/UI';
import nextpage from './nextpage.svg';

const PageNum = styled(WordRegular)`
  display: block;
  font-size: 16px;
  border-radius: 50%;
  padding: 5px;
  height: 25px;
  width: 25px;
  text-align: center;
  margin: 0 5px;
  color: ${color.fill.primary};
  line-height: 25px;
  ${props =>
    props.cur &&
    `
      background: ${color.fill.primary};
      color: #ffffff;
    `};
  :hover {
    background: ${color.fill.primary};
    color: #ffffff;
    cursor: pointer;
  }
`;

const PaginatorBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Dots = styled(PageNum)`
  border-radius: none;
  background: none;
  :hover {
    background: inherit;
    color: inherit;
    cursor: default;
  }
`;

const NextPage = styled(PageNum)`
  border: 1px solid ${color.fill.primary};
  background-color: none;
  background-image: url(${nextpage});
  background-position: center center;
  background-repeat: no-repeat;
  :hover {
    background: none;
    background-image: url(${nextpage});
    background-position: center center;
    background-repeat: no-repeat;
    color: inherit;
    cursor: pointer;
  }
`;

const Rentails = styled(ParagraphRegular)`
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-top: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const Footer = styled(ParagraphRegular)`
  text-align: center;
  display: block;
  margin: 40px 0 10px 0;

  font-size: 16px;

  color: ${color.font.secondary};
`;

export class Paginator extends Component {
  curPage = this.props.curPage;

  render() {
    return (
      <Wrapper>
        <PaginatorBlock>
          <PageNum cur={this.curPage === 1}>1</PageNum>
          <PageNum cur={this.curPage === 2}>2</PageNum>
          <PageNum cur={this.curPage === 3}>3</PageNum>
          <Dots>. . .</Dots>
          <PageNum cur={this.curPage === 17}>17</PageNum>
          <NextPage />
        </PaginatorBlock>
        <Rentails>1 – 18 of 300+ Rentails</Rentails>
        <Footer>
          Enter dates to full pricing. Additional fees apply. Taxes may be
          added.
        </Footer>
      </Wrapper>
    );
  }
}
