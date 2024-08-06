import React from "react";
import CustomButton from "../button/ButtonComponent";

const CheckOut = () => {
  return (
    <div style={styles.chckoutContainer}>
        <div style={{backgroundColor:'#fff',margin:'2% 2% 3%',borderRadius:'5px',padding:'2% 4% .5%'}}>
      <h3>Ticket Summary</h3>
      <h4>Paid Ticket </h4>
      <h4>Sub Total</h4>
      <hr/>
      <h3>Total</h3>
      <hr/>
      <h5 style={{color:'orange', textAlign:'center'}}>Processing Fee will be added on selecting payment method*</h5>
      </div>
      <CustomButton width="100%"
          height="50px"
          color="#fff"
          backgroundColor="#000"
          text={"Proceed"}/>
    </div>
  );
};

const styles={
    chckoutContainer:{
        border:'1px solid #bbb',
        width:'100%',
        margin:'0% 5%',
        backgroundColor: 'rgb(246, 246, 252)',
        borderRadius:'5px',
        padding:'2% 2% 4% 2%'
    }
}

export default CheckOut;
