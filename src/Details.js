// import React, { useState, useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Details.css"; // Import the external CSS file

// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   ToggleButton,
//   ToggleButtonGroup,
//   IconButton,
// } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLanguage } from "@fortawesome/free-solid-svg-icons";

// function formatISODate(isoDate) {
//   const date = new Date(isoDate);
//   return date.toLocaleString();
// }

// const Details = () => {
//   const params = useParams();
//   const location = useLocation();
//   const newsItem = location.state;
//   const [translationLanguage, setTranslationLanguage] = useState(
//     location.state ? location.state.initialLanguage : "english"
//   );
//   const [data1, setdata1] = useState([]);
//   const [data, setdata] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (params.newsID.includes("english")) {
//       setTranslationLanguage("english");
//     } else {
//       setTranslationLanguage("japanese");
//     }
//   }, [params]);

//   useEffect(() => {
//     if (translationLanguage === "english") {
//       fetch("http://localhost:5001/api/data")
//         .then((response) => response.json())
//         .then((data) => {
//           setdata(data);
//           setLoading(false);
//         })
//         .catch((error) => console.error("Error fetching English data:", error));
//     } else if (translationLanguage === "japanese") {
//       fetch("http://localhost:5001/api/data1")
//         .then((response) => response.json())
//         .then((data1) => {
//           setdata1(data1);
//           setLoading(false);
//         })
//         .catch((error) =>
//           console.error("Error fetching Japanese data:", error)
//         );
//     }
//   }, [translationLanguage]);

//   useEffect(() => {
//     if (translationLanguage === "english" && newsItem) {
//       const filteredEnglishData = data.filter(
//         (item) => item.publishedat === newsItem.publishedat
//       );
//       setFilteredData(filteredEnglishData);
//     } else if (translationLanguage === "japanese" && newsItem) {
//       const filteredJapaneseData = data1.filter(
//         (item) => item.publishedat === newsItem.publishedat
//       );
//       setFilteredData(filteredJapaneseData);
//     }
//   }, [translationLanguage, newsItem, data, data1]);

//   if (!newsItem) {
//     return <div>News item not found</div>;
//   }

//   const handleTranslateToggle = () => {
//     if (translationLanguage === "english") {
//       setTranslationLanguage("japanese");
//     } else {
//       setTranslationLanguage("english");
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Box className="details-container">
//         {" "}
//         {/* Use the CSS class for the container */}
//         <Typography variant="h3" className="details-title">
//           {" "}
//           {/* Use the CSS class for the title */}
//           {newsItem.title}
//         </Typography>
//         {translationLanguage === "english" && (
//           <div>
//             {loading ? (
//               <div>Loading Japanese data...</div>
//             ) : (
//               <List>
//                 {filteredData.map((item, index) => (
//                   <Box
//                     key={item.id}
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       mb: 4,
//                     }}
//                   >
//                     <Box sx={{ width: "70%" }}>
//                       <ListItem>
//                         <ListItemText
//                           primaryTypographyProps={{ variant: "h4" }}
//                           secondaryTypographyProps={{ variant: "body1" }}
//                           tertiaryTypographyProps={{ variant: "body2" }}
//                           primary={item.title}
//                           secondary={item.description}
//                         />
//                       </ListItem>
//                       <Typography
//                         variant="body1"
//                         sx={{ color: "grey", marginLeft: "13px" }}
//                       >
//                         Content: {item.content}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{ color: "grey", marginLeft: "13px" }}
//                       >
//                         {index === 1
//                           ? "Author: tiktok.com"
//                           : `Author: ${item.author}`}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{ color: "grey", marginLeft: "13px" }}
//                       >
//                         {index === 1
//                           ? "Published At: 10/24/2023, 4:29:06 PM"
//                           : `Published At: ${formatISODate(item.publishedat)}`}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{ color: "grey", marginLeft: "13px" }}
//                       >
//                         <a
//                           href={item.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {item.url}
//                         </a>
//                       </Typography>
//                     </Box>
//                     <Box sx={{ width: "30%" }}>
//                       <img
//                         src={item.urltoimage}
//                         alt={item.title}
//                         style={{ width: "100%", height: "auto" }}
//                       />
//                     </Box>
//                   </Box>
//                 ))}
//               </List>
//             )}
//           </div>
//         )}
//       </Box>
//       <div className="details-toggle-button-container">
//         {" "}
//         {/* Container for the toggle button */}
//         <ToggleButton
//           value={translationLanguage}
//           exclusive
//           onChange={handleTranslateToggle}
//           className="details-toggle-button" // Use the CSS class for the button
//         >
//           <FontAwesomeIcon
//             icon={faLanguage}
//             className="details-toggle-button-icon"
//           />
//           Toggle Translation
//         </ToggleButton>
//       </div>
//     </Container>
//   );
// };

// export default Details;

import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./styles/Details.css";

function formatISODate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString();
}

const Details = () => {
  const params = useParams();
  const location = useLocation();
  const newsItem = location.state;
  const [translationLanguage, setTranslationLanguage] = useState(
    location.state ? location.state.initialLanguage : "english"
  );
  const [data1, setdata1] = useState([]);
  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.newsID.includes("english")) {
      setTranslationLanguage("english");
    } else {
      setTranslationLanguage("japanese");
    }
  }, [params]);

  useEffect(() => {
    if (translationLanguage === "english") {
      fetch("http://localhost:5001/api/data")
        .then((response) => response.json())
        .then((data) => {
          setdata(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching English data:", error));
    } else if (translationLanguage === "japanese") {
      fetch("http://localhost:5001/api/data1")
        .then((response) => response.json())
        .then((data1) => {
          setdata1(data1);
          setLoading(false);
        })
        .catch((error) =>
          console.error("Error fetching Japanese data:", error)
        );
    }
  }, [translationLanguage]);

  useEffect(() => {
    if (translationLanguage === "english" && newsItem) {
      const filteredEnglishData = data.filter(
        (item) => item.publishedat === newsItem.publishedat
      );
      setFilteredData(filteredEnglishData);
    } else if (translationLanguage === "japanese" && newsItem) {
      const filteredJapaneseData = data1.filter(
        (item) => item.publishedat === newsItem.publishedat
      );
      setFilteredData(filteredJapaneseData);
    }
  }, [translationLanguage, newsItem, data, data1]);

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  const handleTranslateToggle = () => {
    if (translationLanguage === "english") {
      setTranslationLanguage("japanese");
    } else {
      setTranslationLanguage("english");
    }
  };

  const translateText = (text, language) => {
    return text;
  };

  return (
    <Container maxWidth="sm" sx={{ p: "50px" }}>
      {/* <Typography variant="h2" sx={{ mb: "30px" }} textAlign="center">
        News Details
      </Typography> */}

      <ToggleButton
        value={translationLanguage === "english" ? "japanese" : "english"}
        onClick={handleTranslateToggle}
        className="toggle-button"
      >
        <FontAwesomeIcon icon={faLanguage} className="translation" />
      </ToggleButton>

      {translationLanguage === "english" && (
        <div>
          {loading ? (
            <div>Loading Japanese data...</div>
          ) : (
            <List>
              {filteredData.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mb: 4,
                    p: 2,
                    borderRadius: 4,
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <Box sx={{ width: "70%" }}>
                    <ListItem>
                      <ListItemText
                        primaryTypographyProps={{ variant: "h4" }}
                        secondaryTypographyProps={{ variant: "body1" }}
                        tertiaryTypographyProps={{ variant: "body2" }}
                        primary={translateText(item.title, translationLanguage)}
                        secondary={translateText(
                          item.description,
                          translationLanguage
                        )}
                      />
                    </ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      Content {item.content}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      Author: {item.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      Published At: {formatISODate(item.publishedat)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.url}
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ width: "30%", marginTop: "80px" }}>
                    <img
                      src={item.urltoimage}
                      alt={item.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Box>
              ))}
            </List>
          )}
        </div>
      )}

      {translationLanguage === "japanese" && (
        <div>
          {loading ? (
            <div>Loading Japanese data...</div>
          ) : (
            <List>
              {filteredData.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mb: 4,
                    p: 2,
                    borderRadius: 4,
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <Box sx={{ width: "70%" }}>
                    <ListItem>
                      <ListItemText
                        primaryTypographyProps={{ variant: "h4" }}
                        secondaryTypographyProps={{ variant: "body1" }}
                        tertiaryTypographyProps={{ variant: "body2" }}
                        primary={translateText(item.title, translationLanguage)}
                        secondary={translateText(
                          item.description,
                          translationLanguage
                        )}
                      />
                    </ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      内容: {item.content}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      著者: {item.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      で発表された。: {formatISODate(item.publishedat)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "grey", marginLeft: "13px" }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.url} {/* Add the link text or URL here */}
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ width: "30%", marginTop: "80px" }}>
                    <img
                      src={item.urltoimage}
                      alt={item.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Box>
              ))}
            </List>
          )}
        </div>
      )}
    </Container>
  );
};

export default Details;
