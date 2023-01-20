import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navBar";

const ProfilePage = () => {
    return (
        <Box>
            <Navbar />
        </Box>
    )
};

export default ProfilePage;