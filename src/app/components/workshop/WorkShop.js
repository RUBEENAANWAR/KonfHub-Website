import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api/apiService";
import CardComponent from '../cardComponent/CardComponent'


function WorkShop() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const result = await fetchData();
            setData(result);
          } catch (error) {
            setError("Failed to fetch data");
          } finally {
            setLoading(false);
          }
        };
    
        getData();
      }, []);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>{error}</div>;

  return (
    <div className="ticket-container">
      <div className="title">{data.workshop_section_title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: data.workshop_section_description }}
      />
      <div style={styles.cardContainer}>
        <CardComponent
        imageSrc="/thought-red.webp" // replace with the actual image path
        title="How to make more money"
        date="Jun 11th, 2024 "
        time="at 10:00 AM (IST)"
        iconSrc="/batman-yellow.jpg" // replace with the actual icon path
        // onButtonClick={handleButtonClick}
      />
         <CardComponent
        imageSrc="/batman-back.webp" // replace with the actual image path
        title="How to fight crime"
        date="Jun 11th, 2024 "
        time="at 10:00 AM (IST)"
        iconSrc="/blackman.jpg" // replace with the actual icon path
        // onButtonClick={handleButtonClick}
      />
         <CardComponent
        imageSrc="/tile.webp" // replace with the actual image path
        title="This is a workshop connected to a ticket"
        date="Jun 11th, 2024 "
        time="at 10:00 AM (IST)"
        iconSrc="/batman-yellow.jpg" 
        iconSrc2="/blackman.jpg"
        // onButtonClick={handleButtonClick}
      />
      </div>
    </div>
  )
}
const styles = {
    cardContainer: {
     display:'flex',
     gap:'1.5rem'
    },
}

export default WorkShop