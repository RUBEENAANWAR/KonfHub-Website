import React from "react";
import { useSelector } from "react-redux";
import FooterIcons from '../../footerIcons/FooterIcons'

const Host = () => {
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const loading = useSelector((state) => state.data.loading);
  return (
    <div style={styles.host}>
      <div style={styles.imgContainer}>
        <img src={"/batman-yellow.jpg"} style={styles.imageStyle} />
        <h4>{data?.organiser_name}</h4>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data?.organiser_info }}
      />
      <div>Contact Us On</div>
      <div style={styles.footer}>
      <FooterIcons />
      </div>
    </div>
  );
};

const styles = {
  host: {
    border: "1px solid #bbb",
    borderRadius: "4px",
    padding:'3%',
    
  },
  imageStyle: {
    width:'15%',
    height:'15%',
    borderRadius:'50%'
  },
  imgContainer:{
    width:'100%',
    // height:'10%',
display:'flex',
gap:20,
alignItems:'center'
  },
  footer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:'3% 0%',
  }
};

export default Host;
