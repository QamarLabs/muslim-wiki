
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useCombobox, autocomplete } from '@szhsin/react-autocomplete';
import { RiCloseLargeLine, RiSearchLine } from "react-icons/ri";
import { QueriedAutocompleteOption } from '../models/search';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { useNavigate } from 'react-router';
import { Flex } from '@wordpress/components';

type Props = {
  placeholder: string;
  type?: string;
  // options: QueriedAutocompleteOption[];
  // onChange: Function;
  // onClear: Function;
  // onKeyDown: Function;
  // value: string;
}

const SearchArticleAutocomplete = observer(({
  placeholder,
  type,
}: React.PropsWithChildren<Props>) => {
  const navigate = useNavigate();
  const { commonStore, searchStore } = useStore();
  const {
    clearAutoCompleteOptions,
    autocompleteOptions,
    loadAutocompleteOptions,
    setSearchQry,
    searchQry,
    searchLoading,
    loadSearchWikiPages
  } = searchStore;
  const { language } = commonStore;
  const [currentValue, setCurrentValue] = useState<string>(searchQry ?? '');
  const [selected, setSelected] = useState<QueriedAutocompleteOption>();
  const [currentItems, setCurrentItems] = useState<any[]>([]);

  // useEffect(() => {
  //   setCurrentItems(autocompleteOptions);
  // }, [autocompleteOptions])

  const autocompleteOnChange: any = async (val: string) => {
    setCurrentValue(val);
    if (val) {
      setSearchQry(val);
      await loadAutocompleteOptions(val);
    }

    console.log('autocompleteOptions:', autocompleteOptions)
  }

  const {
    // getLabelProps,
    getInputProps,
    getClearProps,
    getToggleProps,
    getListProps,
    getItemProps,
    open,
    setOpen,
    focusIndex,
    isInputEmpty
  } = useCombobox({
    items: currentItems,
    value: searchQry,
    onChange: autocompleteOnChange as any,
    selected,
    onSelectChange: setSelected,
    getItemValue: (item: QueriedAutocompleteOption) => item.text,
    feature: autocomplete({
      // The `select` option controls autocomplete in free or select mode
      select: true, // or false
      deselectOnClear: true,
      deselectOnChange: false,
      rovingText: true
      // Other options: rovingText, deselectOnClear, deselectOnChange, closeOnSelect
    })
  });

  return (
    <div className='w-100 p-0'>
      <div className='position-relative'>
        <input
          placeholder={placeholder}
          value={currentValue}
          {...getInputProps()}
          onKeyDown={async (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              if (searchQry) {
                await loadSearchWikiPages(searchQry);
                navigate(`/${language}/search?title=${searchQry}`);
              }
              console.log('Enter key pressed');

              // Handle form submission or other action
              // TODO: Navigate to the Search Results Page
            }

            if (event.key === 'Escape') {
              console.log('Escape key pressed');
              setOpen(false);
            }
          }}
          className='w-100 p-2 bg-transparent text-dark mw-autocomplete'
        />
        {!isInputEmpty 
          && (
            <button 
              {...getClearProps()} 
              onClick={() => {
                setCurrentValue('');
                setSearchQry('');
                clearAutoCompleteOptions();
              }}
              className='position-absolute right-10 border-none h-100 bg-transparent'
            >
                <RiCloseLargeLine style={{ backgroundColor: 'white', color: 'rgb(69, 69, 69)', padding: '0.25em', width: '3em', height: '1.25em' }} />
            </button>
        )}
        {type == 'submit'
          ? (
            <Button
              {...getToggleProps()}
              className='position-absolute w-10 bg-primary'
              loading={searchLoading}
              style={{ right: 0 }}
              type={type}
            >
              <RiSearchLine />
            </Button>
          )
          : (
            <Button
              {...getToggleProps()}
              onClick={async () => {
                if (searchQry) {
                  await loadSearchWikiPages(searchQry);
                  navigate(`/${language}/search?title=${searchQry}`);
                }
              }}
              className='position-absolute w-10 bg-primary'
              loading={searchLoading}
              style={{ right: 0 }}
              type="button"
            >
              <RiSearchLine />
            </Button>
          )}
      </div>

      <ul
        {...getListProps()}
        style={{
          display: open && currentValue ? 'block' : 'none',
          position: 'absolute',
          listStyle: 'none',
          color: '#000',
          background: '#fff',
          overflow: 'auto',
          maxHeight: 300,
          margin: 0,
          padding: 0
        }}
        className='autocompleteList'
      >
        {autocompleteOptions.length ? (
          autocompleteOptions.map((item: QueriedAutocompleteOption, index) => (
            <li
              style={{
                background: focusIndex === index ? '#ddd' : 'none',
                textDecoration: selected === item ? 'underline' : 'none',
              }}
              key={index}
              value={item.value}
              {...getItemProps({ item, index })}
              className='w-100'
            >
              <Flex direction="row" className='p-2 autocompleteItem' >
                {item.text}
              </Flex>
            </li>
          ))
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
});

export default SearchArticleAutocomplete;