import './styles.css'

export const SearchInput = ({searchValue, handleChange}) => {
    return (
        <input
          className='search-input'
          onChange={handleChange}
          value={searchValue}
          type='search'
          placeholder='Type here your search'
        />
    )    
}
