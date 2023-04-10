import React from 'react';

function Loading(props) {
    return (
        <div className="fixed inset-0 bg-[#000] flex justify-center items-center">
            <div className="spinner">
                <img width={240}  src="/image/loading.gif" alt="" />
            </div>
        </div>
    );
}

export default Loading;