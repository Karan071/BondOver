import React, { useState } from 'react';
import './VerificationCode.css';
import GradientButton from '../GradientButton';

const VerificationCode = ({ phoneNumber = '+91 9729680598', onVerify, onResend, onChangeNumber }) => {
    const [code, setCode] = useState(Array(6).fill(''));

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
        onVerify && onVerify(verification);
    };

    return (
        <div className="verification-modal">
            <div className="verification-header">
                <h2>Verification Code <span className="icon">✉️</span></h2>
                <button className="close-btn" onClick={onChangeNumber}>×</button>
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
                        value={digit}
                        onChange={e => handleChange(e, idx)}
                    />
                ))}
            </div>
            <GradientButton className='btn-verify' onClick={handleVerify}>Verify</GradientButton>
            <div className="resend-section">
                <span>Didn't receive code?</span>
            </div>
        </div>
    );
};

export default VerificationCode;
