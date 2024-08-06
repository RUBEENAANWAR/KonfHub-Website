import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api/apiService";
import './EventSponsors.css'

function EventSponsors() {
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
      <div className="title">{data.sponsor_section_title}</div>
      <div>
       This is the description of sponsors section.
       </div>
       <img src={'/white-man.webp'} className="image-style"/>
       <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
        <h1>Sponsor Category</h1>
        {/* <div className="line"></div> */}
        <hr className="line"/>
        <img src={'/batman-black.jpg'} className="image-style"/>
       </div>
      </div>
)
}
export default EventSponsors