import { Avatar, Box, Grid2 } from "@mui/material";
import React from "react";
import { customers } from "../Constents";
import { StyledHeading, StyledPara } from "../Components/StyledCompo";

const HappyCustomers = () => {
  return (
    <div className="w-full text-center  flex flex-col items-center justify-center gap-y-3">
      <StyledHeading>Nagad in every life</StyledHeading>
      <div className="w-full  p-2 bg-white rounded-lg">
        <div className="w-full grid grid-cols-3 gap-2 ">
          {customers.map((customer, index) => (
            <div key={index}>
              <img
                src={customer}
                alt=""
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <StyledPara width={{ xs: "100%", md: "70%" }}>
        Nagad’s services are designed to facilitate convenience and maximum
        benefit of its users. Nagad is making people's lives easier as they are
        now making all their transactions with the best benefits.
      </StyledPara>
    </div>
  );
};

export default HappyCustomers;

{
  /* <Grid2>
  {customers.map((customer, index) => (
    <Avatar key={index} variant="rounded" src={customer} />
  ))}
</Grid2>; */
}
