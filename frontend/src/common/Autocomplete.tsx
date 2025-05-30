import { useState } from 'react';
import { useCombobox, autocomplete } from '@szhsin/react-autocomplete';
import { RiCloseFill, RiCloseLargeLine, RiSearch2Fill, RiSearch2Line, RiSearchLine } from "react-icons/ri";

type Props = {
  options: string[];
}

const Autocomplete = ({
  options
}: React.PropsWithChildren<Props>) => {
  const [value, setValue] = useState<string>();
  const [selected, setSelected] = useState<string>();

  // It's up to you how to filter items based on the input value
  const items = value
    ? options.filter((item) => item.toLowerCase().startsWith(value.toLowerCase()))
    : options;

  const {
    getLabelProps,
    getInputProps,
    getClearProps,
    getToggleProps,
    getListProps,
    getItemProps,
    open,
    focusIndex,
    isInputEmpty
  } = useCombobox({
    items,
    value,
    onChange: setValue,
    selected,
    onSelectChange: setSelected,
    feature: autocomplete({
      // The `select` option controls autocomplete in free or select mode
      select: true // or false
      // Other options: rovingText, deselectOnClear, deselectOnChange, closeOnSelect
    })
  });

  return (
    <div className='w-100 p-0'>
      <div className='position-relative'>
        <input placeholder="Take a look..." {...getInputProps()} className='w-100 p-2 bg-transparent text-dark' />
        {!isInputEmpty && <button {...getClearProps()} className='position-absolute right-10 border-none h-100 bg-transparent'>
          <RiCloseLargeLine style={{ backgroundColor: 'white', color: 'rgb(69, 69, 69)', padding: '0.25em', width: '3em', height: '1.25em' }} />
        </button>}
        <button {...getToggleProps()} className='position-absolute w-10 bg-primary' style={{ right: 0 }}>
          <RiSearchLine />
        </button>
      </div>

      <ul
        {...getListProps()}
        style={{
          display: open ? 'block' : 'none',
          position: 'absolute',
          listStyle: 'none',
          color: '#000',
          background: '#fff',
          overflow: 'auto',
          maxHeight: 300,
          margin: 0,
          padding: 0
        }}
      >
        {items.length ? (
          items.map((item, index) => (
            <li
              style={{
                background: focusIndex === index ? '#ddd' : 'none',
                textDecoration: selected === item ? 'underline' : 'none'
              }}
              key={item}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
};

export default Autocomplete;