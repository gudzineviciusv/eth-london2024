import { FC } from 'react';
import CityItem from './CityItem';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
    },
    header: {
       fontSize: "40px",
         fontWeight: "bold",    
    },
    cityContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        overflow: "scroll",
        gap: "20px",
    },
} as const;

const mockData = [
    {
        name: "London",
        image: "https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg",
        isCommingSoon: false,
    },
    {
        name: "Los Angeles",
        image: "https://media.istockphoto.com/id/478821794/photo/skyscrapers-of-los-angeles-skyline-architecture-urban-cityscape.jpg?s=612x612&w=0&k=20&c=NDZIvsRp8mQmY5h_DYIedD9rrx_jNu_sJ3oLuyV7a1E=",
        isCommingSoon: true,
    },
    {
        name: "San Francisco",
        image: "https://media.istockphoto.com/id/1136437406/photo/san-francisco-skyline-with-oakland-bay-bridge-at-sunset-california-usa.jpg?s=612x612&w=0&k=20&c=JVBBZT2uquZbfY0njYHv8vkLfatoM4COJc-lX5QKYpE=",
        isCommingSoon: true,
    },
];

const CitySelect: FC = () => {
 
    return (
        <div style={styles.container}>
            <div style={styles.header}>Choose a city</div>
            <div style={styles.cityContainer}>
                {mockData.map((city, index) => (
                    <CityItem key={index} image={city.image} name={city.name} isCommingSoon={city.isCommingSoon} />
                ))}
            </div>
        </div>
    );
};

export default CitySelect;
