import PropTypes from 'prop-types';

// const MyComponent = ({name, children}) => {
const MyComponent = (props) => {
    const {name , children, favoriteNumber} = props;

    return (
        <div>
            My name is {name}
            <p>children 값은 {children} {favoriteNumber}</p>
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'Default Name!'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.isRequired
};

export default MyComponent;