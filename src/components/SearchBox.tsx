import styled from 'styled-components';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react';

interface SearchBoxProps {
  placeholder: string;
  handleSearch: (string) => void;
  className?: string;
}

const SearchInput = styled(FormControl)`
  width: 100%;
  height: 4rem;
`;
const SearchBox = ({
  placeholder,
  handleSearch,
  className,
}: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === 'Enter') {
      handleSearch(searchValue);
    }
  };
  return (
    <>
      <InputGroup className={`mb-3 ${className || ''}`}>
        <SearchInput
          placeholder={placeholder || ''}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => handleSearch(searchValue)}
        >
          Search
        </button>
      </InputGroup>
    </>
  );
};

export default SearchBox;
