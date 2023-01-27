import React from 'react';
import {usePumlSVGQuery, useTableDataQuery} from "../store/cfg/admin.api";




export function PumlDiagram() {

    const {isLoading: isLoadingPuml, isError: isErrorPuml, data: image} = usePumlSVGQuery()


    const svgStr = "<svg></svg>";
    const svg = new Blob([svgStr], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg);


    const getUrl = (asdasd: string) => {
        const svg = new Blob([asdasd], { type: "image/svg+xml" });
        const url = URL.createObjectURL(svg);
        return url
    }

    const asdas = () => {return isLoadingPuml }

    return (
        <div style={{height: 1000, width: '100%'}}>
            {isLoadingPuml && <p className="text-center ">Loading...</p>}
            {!isLoadingPuml && <p className="text-center ">asdsad {asdas()}</p>}
        {!isLoadingPuml && image &&
            // image?.length>0 &&

        <>
            <h1>asdjkhdfsdklajhflskjhflsdkjah</h1>
            <img src={getUrl(image.svgData)} />
        </>
        }
        </div>
    )
}