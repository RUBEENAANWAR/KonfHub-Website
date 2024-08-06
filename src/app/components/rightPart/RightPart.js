import React from "react";
import TaskDetails from "./taskDetails/TaskDetails";
import CustomButton from "../button/ButtonComponent";
import "./RightPart.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Host from "./host/Host";

const RightPart = () => {
  return (
    <div>
      <TaskDetails />
      <div className="buttonStyles">
        <CustomButton
          width="100%"
          height="50px"
          color="white"
          backgroundColor="#000"
          text={"Buy Now"}
          // onClick={handleClick}
        />
      </div>
      <div className="buttonStyles">
        <CustomButton
          width="100%"
          height="50px"
          color="#000"
          backgroundColor="#fff"
          text={"Official Website"}
          // onClick={handleClick}
        />
      </div>
      <div>HOSTED BY</div>
      <Host/>
    </div>
  );
};

export default RightPart;
