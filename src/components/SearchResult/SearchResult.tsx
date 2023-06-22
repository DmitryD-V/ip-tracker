import React, {FC} from 'react';
import {Container, Item, ItemDesc, ItemTitle} from './styles';

interface Props {
    ipAddress: string
    location: string
    timezone: string
    isp: string
}

const SearchResult: FC<Props> = ({ipAddress, location, timezone, isp}) => {
    return (
        <Container>
            <Item>
                <ItemTitle>IP Address</ItemTitle>
                <ItemDesc>{ipAddress}</ItemDesc>
            </Item>
            <Item>
                <ItemTitle>Location</ItemTitle>
                <ItemDesc>{location}</ItemDesc>
            </Item>
            <Item>
                <ItemTitle>Timezone</ItemTitle>
                <ItemDesc>{timezone}</ItemDesc>
            </Item>
            <Item>
                <ItemTitle>ISP</ItemTitle>
                <ItemDesc>{isp}</ItemDesc>
            </Item>
        </Container>
    );
}

SearchResult.defaultProps = {
    ipAddress: '-',
    location: '-',
    timezone: '-',
    isp: '-'
}

export default SearchResult;
