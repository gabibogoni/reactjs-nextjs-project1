import { render, screen } from "@testing-library/react"
import { SearchInput } from "."
import userEvent from "@testing-library/user-event";


describe('<SearchInput />', () => {

    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<SearchInput handleChange={fn} searchValue={'testando'} />);

        const input = screen.getByPlaceholderText(/Type here your search/i);
        expect(input.value).toBe('testando');
    });

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<SearchInput handleChange={fn} />);

        const input = screen.getByPlaceholderText(/Type here your search/i);
        const inputValue = 'o valor';

        userEvent.type(input, inputValue);

        expect(fn).toHaveBeenCalledTimes(inputValue.length);
    });

    it('should match snapshot', () => {
        const {container} = render(<SearchInput />);

        expect(container).toMatchSnapshot();
    });
})