import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Hospital } from "../../shared/types";
import MapIcon from "@mui/icons-material/Map";

type Props = {
  data: Hospital;
};

export default function HospitalCard({ data }: Props) {
  return (
    <Card variant="elevation" sx={{ borderRadius: 4, mt: 4 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography>{data.name[0]}</Typography>
            <Box display="flex">
              <MapIcon fontSize="medium" />
              <Typography>4.9km</Typography>
              <Typography>New Territories</Typography>
            </Box>
          </Box>
          <Typography>{data.waitTimeValue}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
