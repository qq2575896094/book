import React, { memo } from 'react'

import './scss/index.scss'

function Loading() {
    return (
        <div className="spinner-wrapper">
            <div className="spinner" />
        </div>

    )
}

export default memo(Loading)
