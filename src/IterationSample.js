import React from "react";

const IterationSample = () => {

    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameArr = names.map((name, index) => <li key={index}>{name}</li>);

    return (
        <ul>{nameArr}</ul>
    )
};

export default IterationSample;