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

    const color = content.length > maxNumOfCharacters ? 'text-red-600' : 'text-gray-400';

    return (
        <div className='flex items-center justify-center min-h-screen bg-indigo-300' >
            <div className='rounded bg-white p-4 w-1/4'>
                <textarea
                    value={ content }
                    onChange={ handleValueChange }
                    className='w-full outline-none border border-indigo-300 rounded h-36 resize-none p-4 text-gray-400'
                />
                
                <div className='flex justify-end items-center mt-4'>
                    <span className={ `${ color } text-xs` }>{ availableNumOfCharacters }</span>
                    <span>{ availablePercentageOfCharacters }%</span>
                    <button className='bg-indigo-500 text-white px-4 py-2 rounded ml-4'>Submit</button>
                </div>
            </div>
        </div>

    );
};

export default Textarea;