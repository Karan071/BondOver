import { useState } from "react";
import {AUTH_KEY_SECRET, TEMPLATE_ID_SECRET} from "../config"

const AUTH_KEY = AUTH_KEY_SECRET;
const TEMPLATE_ID = TEMPLATE_ID_SECRET;

// export default function useOtp() {
//     const [otpSent, setOtpSent] = useState(false);
//     const [verifying, setVerifying] = useState(false);
//     const [verified, setVerified] = useState(false);
//     const [error, setError] = useState("");

//     const sendOtp = async (mobile) => {
//         setError("");
//         setOtpSent(false);
//         try {
//             const url = `https://api.msg91.com/api/v5/otp?template_id=${TEMPLATE_ID}&mobile=91${mobile}&authkey=${AUTH_KEY}`;
//             const res = await fetch(url, { method: "GET" });
//             const data = await res.json();
//             if (!res.ok || (data && data.type !== "success")) {
//                 console.error("OTP API error:", data);
//                 setError(data?.message || "Failed to send OTP. Please try again.");
//                 return;
//             }
//             setOtpSent(true);
//         } catch (e) {
//             setError("Failed to send OTP. Please try again.");
//             console.error("OTP send error:", e);
//         }
//     };

//     const verifyOtp = async (mobile, otp) => {
//         setVerifying(true);
//         setError("");
//         try {
//             const url = `https://api.msg91.com/api/v5/otp/verify?otp=${otp}&authkey=${AUTH_KEY}&mobile=91${mobile}`;
//             const res = await fetch(url, { method: "GET" });
//             const data = await res.json();
//             if (data && data.type === "success") {
//                 setVerified(true);
//             } else {
//                 setError("Invalid OTP. Please try again.");
//             }
//         } catch {
//             setError("Failed to verify OTP. Please try again.");
//         } finally {
//             setVerifying(false);
//         }
//     };

//     const reset = () => {
//         setOtpSent(false);
//         setVerified(false);
//         setError("");
//     };

//     return { otpSent, verified, verifying, error, sendOtp, verifyOtp, reset };
// }


export default function useOtp() {
    const [otpSent, setOtpSent] = useState(false);
    const [verifying, setVerifying] = useState(false);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");

    const sendOtp = async (mobile) => {
        setError("");
        try {
            const url = `https://api.msg91.com/api/v5/otp?template_id=${TEMPLATE_ID}&mobile=91${mobile}&authkey=${AUTH_KEY}`;
            const res = await fetch(url, { method: "GET" });
            const data = await res.json();

            if (!res.ok || data.type !== "success") {
                console.error("OTP API error:", data);
                setError(data?.message || "Failed to send OTP. Please try again.");
                return false;
            }
            setOtpSent(true);
            return true;
        } catch (e) {
            console.error("OTP send error:", e);
            setError("Failed to send OTP. Please try again.");
            return false;
        }
    };

    const verifyOtp = async (mobile, otp) => {
        setVerifying(true);
        setError("");
        try {
            const url = `https://api.msg91.com/api/v5/otp/verify?otp=${otp}&authkey=${AUTH_KEY}&mobile=91${mobile}`;
            const res = await fetch(url, { method: "GET" });
            const data = await res.json();

            if (data.type === "success") {
                setVerified(true);
                return true;
            } else {
                setError("Invalid OTP. Please try again.");
                return false;
            }
        } catch (e) {
            // console.error("OTP verify error:", e);
            setError("Failed to verify OTP. Please try again.");
            return false;
        } finally {
            setVerifying(false);
        }
    };

    const reset = () => {
        setOtpSent(false);
        setVerified(false);
        setError("");
    };

    return { otpSent, verified, verifying, error, sendOtp, verifyOtp, reset };
}
