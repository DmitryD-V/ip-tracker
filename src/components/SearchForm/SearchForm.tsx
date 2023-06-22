import React, {FC, useState} from 'react';
import {Button, Container, ErrorText, Field} from './styles';

interface Props {
    onSearch: (ip: string) => void
    error: string
}

const SearchForm: FC<Props> = ({onSearch, error}) => {

    const [value, setValue] = useState('');

    return (
        <Container>
            <Field
                type={'text'}
                placeholder={'Search for any IP address or domain'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error={!!error}
            />
            <Button onClick={() => onSearch(value)}/>
            {error && <ErrorText>{error}</ErrorText>}
        </Container>
    );
}

SearchForm.defaultProps = {
    onSearch: undefined,
    error: ''
}

export default SearchForm;
