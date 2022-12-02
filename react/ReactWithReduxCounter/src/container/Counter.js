import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/counter';

const Counter = (props) => {
    const { counter, increment, decrement, reset } = props;

    return (
        <div style={{ textAlign: 'center' }}>
            {counter}
            <div>
                <button onClick = {increment}>INCREMENT BY 1</button>
                <button onClick = {decrement}>DECREMENT BY 1</button>
                <button onClick = {reset}>RESET</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
       counter: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       increment: () => dispatch(increment()),
       decrement: () => dispatch(decrement()),
       reset: () => dispatch(reset())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
