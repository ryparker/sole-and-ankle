import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShowCardWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShowCardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const ShowCardWrapper = styled.div`
  flex: 1;
  min-width: 275px;
`;

export default ShoeGrid;
