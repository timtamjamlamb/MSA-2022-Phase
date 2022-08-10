import React from 'react';
import HeaderSection from "./Components/HeaderSection";
import MainDisplayContainer from "./Components/MainDisplayContainer";
import getDeals, {apiResultType} from "./api/api";
import {CircularProgress} from "@mui/material";

function App() {
    const [loading, setLoading] = React.useState(false);
    const [results, setResults] = React.useState<apiResultType[] | null>();

    const [q, setQ] = React.useState('');
    const [p, setP] = React.useState(1);

    React.useEffect(() => {
        setLoading(true);
        getDeals(q, p)
            .then((r) => {
                console.log(r)
                setLoading(false);
                setResults(r);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            });
    }, [q, p]);

    const onPageLeft = () => {
        if (p > 0) {
            setP(p - 1);
        }
    }

    const onPageRight = () => {
        setP(p + 1);
    }

    const onSearch = (newQ: string) => {
        if (newQ !== q) {
            setQ(newQ);
            setP(0);
        }
    }

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "5%"}}>
            <HeaderSection onLeft={onPageLeft} onRight={onPageRight} onSearch={(newQ) => onSearch(newQ)}/>
            {
                !results || loading
                    ?
                    <CircularProgress/>
                    :
                    <MainDisplayContainer data={results}/>
            }
        </div>
    );
}

export default App;
