import React from 'react';

interface Properties {
    handleShowRows: any
}

const ContentComponent = (property: Properties) => {

    return(
        <table className = "tabla">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                User
              </th>
              <th>
                Email
              </th>
              <th>
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {
              property.handleShowRows
            }
          </tbody>
        </table>
    )
}

export default ContentComponent;