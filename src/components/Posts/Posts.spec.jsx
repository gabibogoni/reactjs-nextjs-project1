import { render, screen } from "@testing-library/react"
import { PostSection } from "."

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            imagem: 'img/img1.png'
        },

        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            imagem: 'img/img2.png'
        },

        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3.png'
        },
    ]
}

describe('<Posts />', () => {

    it('should render posts', () => {
        render(<PostSection {...props} />);

        expect(screen.getAllByRole('heading', {name: /title/i})).toHaveLength(3);
        expect(screen.getAllByRole('img', {name: /title/i})).toHaveLength(3);
        expect(screen.getAllByText(/body/i)).toHaveLength(3);
    });    

    it('should not render posts', () => {
        render(<PostSection />);
        
        expect(screen.queryAllByRole('heading', {name: /title/i})).toHaveLength(0);
    });  

    it('should match snapshot', () => {
        const {container} = render(<PostSection {...props} />);

        expect(container).toMatchSnapshot();
    });  
})