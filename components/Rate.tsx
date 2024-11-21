/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react';
import { Rate } from 'antd';
import SignupFormDemo from './example/signup-form-demo';
import r from '../Styles/Rate.module.css';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const App: React.FC = () => {
  const [value, setValue] = useState<number | undefined>(undefined); // Initialize with undefined

  // Ensure the value passed to setValue is number or undefined
  const handleChange = (val: number) => {
    setValue(val || undefined); // Convert 0 to undefined
  };

  return (
    <div className={r.ratingContainer}>
      <div className={r.starContainer}>
        {/* Disable Rate component if value is set */}
        <Rate 
          tooltips={desc} 
          onChange={handleChange} 
          value={value} 
          disabled={value !== undefined} 
        />
      </div>
      {value !== undefined ? <span>{desc[value - 1]}</span> : null}

      {/* CSS for hiding elements by default */}
      <style jsx>{`
        .hidden {
          display: none;
        }
        .visible {
          display: block;
        }
      `}</style>

      {/* Conditional rendering based on the rating */}
      <div className={value === undefined ? 'hidden' : 'visible'}>
        {value === 5 ? (
          // If rating is 'wonderful' (5), show the fancy link
          <div>
            <p>
              Your feedback is wonderful! Feel free to{' '}
              <a
                href="https://reviewthis.biz/digit"
                className="font-semibold text-blue-500 hover:text-blue-700"
              >
                reach out for further discussions
              </a>.
            </p>
          </div>
        ) : (
          // If rating is not 'wonderful', show the contact form
          <div className={r.signUpForm}>
            {/* Add in the contact form here */}
            <SignupFormDemo />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
