import React, {useState} from 'react';
import styled from "styled-components";

export const Paginator: React.FC<PropsType> = ({
                                                   totalItemsCount,
                                                   pageSize,
                                                   currentPage,
                                                   onPageChanged
                                               }) => {
    const size = 7
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const count = Math.ceil(pagesCount / size)
    const [number, setNumber] = useState<number>(1)
    const leftPageNumber = (number - 1) * size + 1
    const rightPageNumber = number * size
    const from = currentPage === 1 ? 1 : (currentPage - 1) * pageSize + 1

    return <>
        <PaginatorBlock>
            <Info>
                <span>{from}-{from + pageSize - 1} of {totalItemsCount} items</span>
            </Info>
            <StyledPaginator>
                {number > 1 &&
                <button style={{background: "none"}} onClick={() => {
                    setNumber(number - 1)
                }}>&lt;</button>
                }
                {pages
                    .filter(p => p >= leftPageNumber && p <= rightPageNumber)
                    .map(p => {
                        return <PaginatorItem currentPage={currentPage} p={p}
                                              key={p}
                                              onClick={() => {
                                                  onPageChanged(p)
                                              }}>
                            {p}
                        </PaginatorItem>
                    })}
                {
                    count > number && <button style={{background: "none"}}  onClick={() => {
                        setNumber(number + 1)
                    }}>&gt;</button>
                }
            </StyledPaginator>
        </PaginatorBlock>
    </>
}


//styled-components

const Info = styled.div`
  margin-right: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`
const PaginatorBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 10px;
`
const StyledPaginator = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    background-color: #E5E5E5;

    &:hover, &:active {
      color: #0064EB;
      cursor: pointer
    }
  }
`
type StyledProps = {
    p: number
    currentPage: number
}
const PaginatorItem = styled.span<StyledProps>`
  padding: 2px;
  text-align: center;
  width: 21px;
  height: 21px;
  margin: 5px;
  border-radius: 3px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  background-color: ${props => props.currentPage === props.p ? '#0064EB' : 'none'};
  color: ${props => props.currentPage === props.p ? '#E5E5E5' : 'black'};
`

//types
type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
}
