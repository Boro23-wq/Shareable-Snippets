import React, { useState } from 'react';

export default function Code({ code }) {
  const [showCode, setShowCode] = useState(false);
  const [copyText, setCopyText] = useState('Copy');
  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopyText('✅ Copied!');
    setTimeout(() => {
      setCopyText('Copy');
    }, 1000);
  };
  return (
    <div>
      <button
        className='transition duration-500 border-2 border-gray-600 bg-gray-700 text-xs hover:bg-gray-800 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-2'
        type='submit'
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>
      {showCode && (
        <div className='relative'>
          <pre className='mb-4 text-gray-800 bg-gray-300 rounded-md p-2 overflow-auto'>
            {code}
          </pre>

          <button
            className='transition duration-500 bg-gray-600 text-xs hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-2 absolute top-0 right-0 transform -translate-x-1 translate-y-1'
            type='submit'
            onClick={copyCode}
          >
            {copyText}
          </button>
        </div>
      )}
    </div>
  );
}
