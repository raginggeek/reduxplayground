import React from 'react';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Product from '../components/product';

configure({ adapter: new Adapter() });

describe('<Product/>', () =>{
    it('should contain one button tag', () =>{
        let wrapper = shallow(<Product/>);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should render a product name', () => {
        let wrapper = shallow(<Product name='foo' cost='12.00' />);
        expect(wrapper.find('div').text()).toEqual('foo $12.00 Add to cart');
    });

    it('responds to handle click event', () => {
        let handleClick = sinon.spy();
        let wrapper = shallow(<Product name='foo' cost='12.00' id='5' handleClick={handleClick} />);
        wrapper.find('button').simulate('click');
        expect(handleClick.calledOnce).toEqual(true);
    })
});
