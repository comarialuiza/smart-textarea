import React, { useState, useEffect } from 'react';

const Textarea = () => {
    const [content, setContent] = useState('');
    const [maxNumOfCharacters, setMaxNumOfCharacters] = useState(40);
    const [availableNumOfCharacters, setAvabilableNumOfCharacters] = useState(maxNumOfCharacters);
    const [availablePercentageOfCharacters, setAvailablePercentageOfCharacters] = useState(100);

    const handleValueChange = (e: React.FormEvent<HTMLTextAreaElement>) => setContent(e.currentTarget.value);

    useEffect(() => {
        const availableNum = maxNumOfCharacters - content.length;
        const availablePercentage = Math.round(100 - ((availableNum / maxNumOfCharacters) * 100));

        setAvabilableNumOfCharacters(availableNum);

        if (content.length > maxNumOfCharacters) {
            setAvailablePercentageOfCharacters(100);
        } else {
            setAvailablePercentageOfCharacters(availablePercentage);
        }
    }, [content, maxNumOfCharacters]);

    return (
        <>
            <textarea
                value={ content }
                onChange={ handleValueChange }
            />
            <span>{ availablePercentageOfCharacters }%</span>
            <span>{ availableNumOfCharacters }</span>
            <button>Submit</button>
        </>

    );
};

export default Textarea;