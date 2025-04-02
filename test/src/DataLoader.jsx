import React, { useState, useEffect } from 'react'; 
import modelData from './react.json';

const DataLoader = ({ render }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (modelData) {
            setData(modelData);
            setLoading(false);
        } else {
            setError("No data found");
            setLoading(false);
        }
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }


    if (error) {
        return <div>Error: {error}</div>;
    }


    return render(data);
};

export default DataLoader;
