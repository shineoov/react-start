import React, {Component} from "react";

class LifeCycleSample extends Component {

    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // props 로 받아온 값을 state 에 동기화 시키는 용도로 사용한다.
    // component mount 될 때 와 업데이트될 떄 호출
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color}
        }
        return null;
    }

    // 첫 렌더링을 다 마친후 호출
    componentDidMount() {
        console.log('componentDidMount');
    }

    // props 또는 state 를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메소드
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    // component 를 DOM 에서 제거할 떄 호출
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // render 에서 만들어진 결과물이 브라우저에서 실제로 반영되기 직전에 호출된다.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링 완료 후 실행
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전 색상', snapshot);
        }
    }

    handleClick = () => {
      this.setState({
         number: this.state.number + 1
      });
    }


    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기!
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;