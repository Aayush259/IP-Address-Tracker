import React from 'react';

function IpDetail(props) {

    return (
        <>
        <div id="ipDetail">
            <div id="ipAddress" className="flex">
                <div>
                    <div className="title bold-700">IP Address</div>
                    <div className="value bold-500">{props.ipValue}</div>
                </div>
                <div className="divider"></div>
            </div>
            <div id="location" className="flex">
                <div>
                    <div className="title bold-700">Location</div>
                    <div className="value bold-500">{props.locationValue}</div>
                </div>
                <div className="divider"></div>
            </div>
            <div id="timeZone" className="flex">
                <div>
                    <div className="title bold-700">Timezone</div>
                    <div className="value bold-500">{props.timezoneValue}</div>
                </div>
                <div className="divider"></div>
            </div>
            <div id="isp" className="flex">
                <div>
                    <div className="title bold-700">Isp</div>
                    <div className="value bold-500">{props.ispValue}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default IpDetail;