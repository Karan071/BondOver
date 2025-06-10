import './ThankYou.css';
import GradientButton from '../GradientButton';

function handleVerify() {
    // Logic for handling verification can be added here
    console.log("Verification handled");
}

const ThankYou = ({ onClose }) => (
    <div className="thankyou-modal">
        <div className="thankyou-content">
            <button className="thankyou-close" onClick={onClose}>×</button>
            <h2 className="thankyou-title">Thank You</h2>
            <div className="thankyou-underline" />
            <p className="thankyou-subtitle">For Registering with the BOS Community!</p>
            <p className="thankyou-message">
                We’ve received your registration details.<br />
                Our team will get in touch with you shortly based on your selected participation type.
            </p>
            <GradientButton className='btn-verify' onClick={handleVerify}>OK</GradientButton>
        </div>
    </div>
);

export default ThankYou;