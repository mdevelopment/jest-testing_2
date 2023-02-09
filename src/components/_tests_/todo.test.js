import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Todo from '../todo';

afterEach(() => {
    cleanup();
})



test('Should render completed todo', async () => {
    // Note the async and await I've added ....
    //expect(true).toBe(true);
    const todo =  {id: 1, title:'make dinner', completed: true};
    render(<Todo todo={todo}/>);
    const todoElement =  screen.getByTestId('todo-1');
    await expect(todoElement).toBeInTheDocument();
    
    expect(todoElement).not.toContainHTML('<strike>')
    //expect(todoElement).toHaveTextContent("Hi"); // Will fail because Hi is not in that element.
    //expect(todoElement).toHaveTextContent("Hello"); // Will succeed because Hello is in that element.
});

test('Should render non-completed todo', async () => {
    // Note the async and await I've added ....
    //expect(true).toBe(true);
    const todo =  {id: 2, title:'wash dishes ', completed: false};
    render(<Todo todo={todo}/>);
    const todoElement =  screen.getByTestId('todo-2');
    await expect(todoElement).toBeInTheDocument();
    
    expect(todoElement).not.toContainHTML('<strike>')
    //expect(todoElement).toHaveTextContent("Hi"); // Will fail because Hi is not in that element.
    //expect(todoElement).toHaveTextContent("Hello"); // Will succeed because Hello is in that element.
});

test ("matches snapshot", () => {
    const todo =  {id: 1, title:'make dinner', completed: true};
    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree)
})
