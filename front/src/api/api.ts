export default function getDeals(q: string, p: number = 0): Promise<apiResultType[]> {
    return fetch(`https://www.cheapshark.com/api/1.0/deals?title=${q}&pageNumber=${p}`)
        .then(res => {
            return res.json();
        });
}

export type apiResultType = {
    title: string,
    salePrice: string,
    normalPrice: string,
    steamRatingPercent: string,
    thumb: string,
}