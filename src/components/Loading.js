import ReactLoading from "react-loading";

import React from 'react';

export const Loading = ({loading, children, type, color})=>{

    if(loading){
        return <ReactLoading type={type || 'bubbles' } color={color || 'blue'} />
    }
    return children;
}
