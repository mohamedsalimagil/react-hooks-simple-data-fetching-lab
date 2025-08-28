// create your App component here
import React, { useEffect, useState } from "react"; 

function App() {
    const [dogImage, setDogImage]= useState(null);
    const [loading, setLoading] = useState(true);

        useEffect(() => {
        const fetchDogImage = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://dog.ceo/api/breeds/image/random");
                const data = await response.json();
                setDogImage(data.message);
            } catch (error) {
                console.error("Error fetching dog image:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDogImage();
    }, []);
    if (loading) {
        return <p>Loading...</p>;// Add a loading state
    }

    return (
        <div>
            <img src={dogImage} alt="A Random Dog" />// Display the dog image
        </div>
    );
}
export default App
