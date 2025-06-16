import React, { useState } from 'react';
import './VerificationCode.css';
import Button from '../button';
import icone from '../../assets/Icon/verify.png';

const VerificationCode = ({ phoneNumber, onVerify, onResend, onChangeNumber }) => {
    const [code, setCode] = useState(Array(4).fill(''));
    const [error, setError] = useState('');

    const handleChange = (e, idx) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        if (val.length > 1) return;
        const newCode = [...code];
        newCode[idx] = val;
        setCode(newCode);
        // focus next
        if (val && idx < code.length - 1) {
            const next = document.getElementById(`digit-${idx + 1}`);
            next && next.focus();
        }
    };

    const handleVerify = () => {
        const verification = code.join('');
        if (verification.length < 4) {
            setError('Please enter all digits of the code.');
            return;
        }
        setError('');
        onVerify && onVerify(verification);
    };

    return (
        <div className="verification-modal">
            <div className="verification-header">
                <h2>Verification Code <img className="icon" src={icone} alt='Message icon'></img></h2>
                <button className="close-btn" onClick={onChangeNumber}></button>
            </div>
            <p className="instruction">
                Please enter the Verification code sent to <strong>{phoneNumber}</strong> <button className="change-btn" onClick={onChangeNumber}>Change</button>
            </p>
            <div className="code-inputs">
                {code.map((digit, idx) => (
                    <input
                        key={idx}
                        id={`digit-${idx}`}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        placeholder='0'
                        value={digit}
                        onChange={e => handleChange(e, idx)}
                    />
                ))}
            </div>
            {error && <div className="error-message otp-error">{error}</div>}
            <div className='verify-btn-container'>
                <Button text="Verify" onClick={handleVerify} className="verify-btn" />
            </div>
            <div className="resend-section">
                <span>Didn't receive code?</span>
            </div>
            
        </div>
    );
};

export default VerificationCode;
