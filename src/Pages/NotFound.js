import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Segment } from "semantic-ui-react";

function NotFound({ value }) {
  const navigate = useNavigate();

 useEffect(() => {
   const timer = setTimeout(() => {
     // Navigate to another component after 1000 seconds
     navigate("/");
   }, 1000 * 1000); // 1000 seconds * 1000 milliseconds

   // Cleanup function to clear the timer when the component is unmounted
   return () => {
     clearTimeout(timer);
   };
 }, [navigate]);

  return (
    <div>
      <Segment inverted className="m-5">
        {value}
      </Segment>
    </div>
  );
}

export default NotFound;
