import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://hswf.network/"

function useListing() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        axios
            .get(`https://hswf.network/api/event/listing`)
            .then((res) => {
                if (isMounted) {
                    setData(res.data);
                    setError("");
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err.message || "Failed to fetch event listings.");
                }
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return { data, loading, error };
}

export default useListing;
