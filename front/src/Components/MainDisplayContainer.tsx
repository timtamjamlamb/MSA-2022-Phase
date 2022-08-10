import React from "react";
import {apiResultType} from "../api/api";
import {Grid, Paper, Typography} from "@mui/material";

interface Props {
    data: apiResultType[];
}

function MainDisplayContainer({data}: Props) {
    return (
        <div style={{width: "90%", marginTop: "30px"}}>
            <Grid container spacing={3}>
                {data.map((d, i) =>
                    <Grid item xs={4} key={i}>
                        <Paper
                            variant="outlined"
                            style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            height: "100%",
                            width: "100%",
                        }}>
                            <Typography variant="body1" textAlign="center">Title: {d.title}</Typography>
                            <img src={d.thumb} alt={d.title + "thumbnail"} width={"80px"}/>
                            <Typography variant="caption">Steam Rating: {d.steamRatingPercent}%</Typography>
                            <Typography variant="caption">Normal Price: ${d.normalPrice}</Typography>
                            <Typography variant="caption">Sale Price: ${d.salePrice}</Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default MainDisplayContainer;