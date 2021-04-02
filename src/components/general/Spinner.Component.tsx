import React from 'react';

interface Properties {

}

const SpinnerComponent = (property: Properties) =>
{
    return (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    )
}

export default SpinnerComponent