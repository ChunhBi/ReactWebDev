import renderer from 'react-test-renderer'
import NavBar from './NavBar.jsx';
import {test, expect, vi} from 'vitest'

test('The NavBar component should render', () => {
    const view = renderer
        .create(<NavBar/>)
        .toJSON();

    expect(view).toMatchSnapshot();
});

test('The NavBar component should render with a title', () => {
    const title = 'Test application';
    const view = renderer.create(<NavBar title={title}/>);

    // console.log(view.root.findByType('h2').children[0]);
    expect(view.root.findByType('h2').children[0]).toBe(title);
});

test('The NavBar component should respond to button clicks', () => {
    const mockFunction = vi.fn();
    const view = renderer.create(<NavBar goBack={mockFunction} openForm={mockFunction}/>);

    view.root.findByProps({id: 'backbtn'}).props.onClick();
    expect(mockFunction).toHaveBeenCalled();

    view.root.findByProps({id: 'openbtn'}).props.onClick();
    expect(mockFunction).toHaveBeenCalledTimes(2);
});
