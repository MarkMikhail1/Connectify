import { Box } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";

const UserImage = ({ picturePath, size = "60px" }) => {

  console.log("picturePath:", picturePath);
  const imageUrl = picturePath ? `http://localhost:3001/assets/${picturePath}` : null;

  return (
    <Box width={size} height={size}>
      {imageUrl ? (
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          width={size}
          height={size}
          alt="user"
          src={imageUrl}
        />
      ) : (
        <HelpOutline
          style={{ fontSize: size, borderRadius: "50%", background: "#ccc", padding: "0.2em" }}
        />
      )}
    </Box>
  );
};

export default UserImage;