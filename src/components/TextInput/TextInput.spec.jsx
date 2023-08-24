import { render, screen } from '@testing-library/react';
import { SearchInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<SearchInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/Type here your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/Type here your search/i);
    const inputValue = 'o valor';

    userEvent.type(input, inputValue);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(inputValue.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<SearchInput handleChange={fn} searchValue="" />);

    expect(container).toMatchSnapshot();
  });
});
