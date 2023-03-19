import React from 'react';

const MyMessage = ({ message }) => {
    let parser = new DOMParser();

    const doc = parser.parseFromString(message.text, 'text/html');
    // console.log(doc);
    const ps = doc.body.children;
    // console.log(ps);
    const keys = Object.keys(ps);
    // console.log(keys);
    // console.log(ps[0]);
    const textContent = keys.map((key => <p key={key}>{ps[key].innerText}</p>));
    // console.log(textContent);

    return (
        <div className='my-message'>{textContent}</div>
        // <div className='my-message'>{message.text}</div>
    );
};

export default MyMessage;