import React, { useState } from 'react';
import { updateBanner, createBanner, deleteBanner } from './bannerApi'; // Updated import
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    const [description, setDescription] = useState('');
    const [timer, setTimer] = useState(0);
    const [link, setLink] = useState('');
    const [visibility, setVisibility] = useState(true); // State for visibility

    const handleUpdate = async () => {
        try {
            await updateBanner({ description, timer, link, visibility });
            alert('Banner updated successfully!');
        } catch (error) {
            console.error('Error updating banner:', error);
            alert('Failed to update banner.');
        }
    };

    const handleCreate = async () => {
        try {
            await createBanner({ description, timer, link, visibility });
            alert('Banner created successfully!');
        } catch (error) {
            console.error('Error creating banner:', error);
            alert('Failed to create banner.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteBanner(id);
            alert('Banner deleted successfully!');
        } catch (error) {
            console.error('Error deleting banner:', error);
            alert('Failed to delete banner.');
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="form-group">
                <label htmlFor="description">Banner Description:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter banner description"
                />
            </div>
            <div className="form-group">
                <label htmlFor="timer">Timer (seconds):</label>
                <input
                    type="number"
                    id="timer"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                    placeholder="Enter timer in seconds"
                />
            </div>
            <div className="form-group">
                <label htmlFor="link">Banner Link:</label>
                <input
                    type="text"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter banner link"
                />
            </div>
            <div className="form-group">
                <label htmlFor="visibility">Banner Visibility:</label>
                <input
                    type="checkbox"
                    id="visibility"
                    checked={visibility}
                    onChange={(e) => setVisibility(e.target.checked)}
                />
            </div>
            <div className="button-group">
                <button onClick={handleUpdate}>Update Banner</button>
                <button onClick={handleCreate}>Create Banner</button>
                {/* Add IDs for deletion purposes */}
                {/* <button onClick={() => handleDelete(bannerId)}>Delete Banner</button> */}
            </div>
        </div>
    );
};

export default Dashboard;
