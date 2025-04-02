import React from 'react';

const ModelDetails = ({ modelData }) => {
    if (!modelData) return <div>No model selected</div>;

    return (
        <div className="model-details">
            <h3><strong>Item:</strong> {modelData.Item}</h3>
            <h3><strong>Object Class:</strong> {modelData.object_class}</h3>
            

            {modelData.images ? (
                modelData.images ? (
                    <img src={`/${modelData.images}`} alt={modelData.Item} />
                ) : (
                    <p>No image available</p>
                )
            ) : (
                <p>No image available</p>
            )}

            <p><strong>Description:</strong>{modelData.description}</p>
            <p><strong>Special Containment Procedures:</strong> {modelData.Special_Containment_Procedures}</p>
            <p><strong>Reference:</strong> {modelData.reference}</p>
        </div>
    );
};

export default ModelDetails;
