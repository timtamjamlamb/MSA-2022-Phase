import React from "react";
import {Button, TextField} from "@mui/material";

interface Props {
    onLeft: () => void;
    onRight: () => void;
    onSearch: (newQ: string) => void;
}

function HeaderSection({ onLeft, onRight, onSearch }: Props) {
    const [q, setQ] = React.useState("");

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <TextField id="filled-basic" label="Search deals" variant="filled" onChange={(e) => setQ(e.target.value)}/>
                <Button onClick={() => onSearch(q)}>Search</Button>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Button onClick={onLeft}>Left</Button>
                <Button onClick={onRight}>Right</Button>
            </div>
        </div>
    );
}

export default HeaderSection;
