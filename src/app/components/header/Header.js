import React,{useState,useEffect} from 'react';
import { fetchData } from "../../../api/apiService";
import { useSelector } from 'react-redux';
import { HiOutlineUser } from "react-icons/hi";

const Navbar = () => {
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const loading = useSelector((state) => state.data.loading);
      if (loading) return <div>Loading...</div>;
      if (error) return <div>{error}</div>;
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={data?.navbar_icon} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.profileContainer}>
      <HiOutlineUser size={20}/>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff', 
    color: '#000',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '50px',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  profileIcon: {
    height: '40px', 
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default Navbar;
