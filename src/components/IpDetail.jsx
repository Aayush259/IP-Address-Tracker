import React from 'react';

function IpDetail(props) {

    return (
        <>
        <div id="ipDetail">
            <div id="ipAddress">
                <p className="title bold-700">IP Address</p>
                <p className="value bold-500">{props.ipValue}</p>
            </div>
            <div id="location">
                <p className="title bold-700">Location</p>
                <p className="value bold-500">{props.locationValue}</p>
            </div>
            <div id="timeZone">
                <p className="title bold-700">Timezone</p>
                <p className="value bold-500">{props.timezoneValue}</p>
            </div>
            <div id="isp">
                <p className="title bold-700">Isp</p>
                <p className="value bold-500">{props.ispValue}</p>
            </div>
        </div>
        </>
    )
}

export default IpDetail;