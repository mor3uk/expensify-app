import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage history={history} startAddExpense={startAddExpense} />);
});

test('should render AddExpensePage component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startAddExpense).toHaveBeenCalledWith(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
}); 