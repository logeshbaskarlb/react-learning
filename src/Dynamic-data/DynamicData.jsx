import { useState, useEffect } from "react";

const DynamicData = () => {
  const [data, setData] = useState("Hi");
  useEffect(() => {
    setTimeout(() => {
      setData("<p>This is some dynamic HTML</p>");
    }, 1000);
  }, []);
  return (
    <div>
      <h2>Dynamic Data</h2>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <div>{data}</div>
    </div>
  );
};

export default DynamicData;

// dangerouslySetInnerHTML: This React property allows you to set HTML directly from a string. It's named this way to remind you that it's dangerous because it can expose your application to XSS (Cross-Site Scripting) attacks if the HTML is not sanitized. Always ensure that the HTML content is from a trusted source or properly sanitized.
