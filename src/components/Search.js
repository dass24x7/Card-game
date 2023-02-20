import React from "react"

function Search({searchChange}) {
    return (
        <div className="mb3">
            <input type="text" className="pa3 ba bg-lightest-blue" placeholder="Search your favourits robots...." onChange={searchChange} />
        </div>
    )
}
export default Search