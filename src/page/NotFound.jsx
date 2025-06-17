import './NotFound.css';
import Button from '../Components/button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1 className="not-found-oops">OOPS!</h1>
                    <p className="not-found-lost">Looks Like You're Lost.</p>
                    <p className="not-found-desc">
                        The page you're looking for isn't here. Maybe it was moved, deleted, or never existed in the first place.
                    </p>
                    <h2 className="not-found-help-title">
                        Here Are Some Helpful Links To Get You Back On Track:
                    </h2>
                    <p className="not-found-search">
                        Or, you can try searching for what you need.<br />
                        Still stuck? Reach out to us, and we'll help you find your way!
                    </p>
                    <p className="not-found-adventure">
                        Don't Worry, Every Great Adventure Starts<br />
                        With A Wrong Turn! <span role="img" aria-label="smile">😊</span>
                    </p>
                </div>
                <div className="not-found-404-bg">404</div>
                <Button text="Home Page" onClick={() => navigate("/")} />
            </div>
        </>
    );
}
