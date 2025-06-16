import './ThankYou.css';
import GradientButton from '../button.jsx';

function handleVerify() {
    console.log("Verification handled");
}

const ThankYou = ({ onClose }) => (
    <>
    <div className='blur'></div>
    <div className="thankyou-modal">
        <div className="thankyou-content">
            <h2 className="thankyou-title">Thank You</h2>
            <div className="thankyou-underline" />
            <p className="thankyou-subtitle">For Registering with the BOS Community!</p>
            <p className="thankyou-message">
                We’ve received your registration details.<br />
                Our team will get in touch with you shortly based on your selected participation type.
            </p>
            <GradientButton className='thankyou-ok' onClick={handleVerify} text="OK"/>
        </div>
    </div>
    </>
);

export default ThankYou;