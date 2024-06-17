import React from "react";
import AsideDx from "../Components/AsideDx";
import AsideSx from "../Components/AsideSx";

export default function Home() {
    const apiKey = process.env.TOKEN

    console.log(apiKey);
    
  return (
        <>
        <div className="container">
            <div className="flex-row flex-wrap">
                <div className="d-flex justify-content-between align-items-start">
                    <div className="col-2">
                        <AsideSx />
                    </div>
                    <div className="col-6">
                        <div>Home</div>
                    </div>
                    <div className="col-4">
                        <AsideDx />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
