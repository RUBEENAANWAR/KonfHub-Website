import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api/apiService";
import "./SpeakersSection.css";
import ImageBox from "../imageBox/ImageBox";

const SpeakersSection = () => {
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
      <div className="title">{data.speaker_section_title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: data.speaker_section_description }}
      />
      <div style={{display:'flex',gap:'1.5rem'}}>
        <ImageBox
          title="Bruce Wayne"
          subTitle="Chairman"
          address="Wayne Enterprises"
        />
        <ImageBox title="Dark Knight" subTitle="Batman" address="Gotham" />
      </div>
    </div>
  );
};

export default SpeakersSection;
