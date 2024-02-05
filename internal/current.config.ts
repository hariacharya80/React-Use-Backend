import { useState } from 'react'

function CurrentConfig() {
    const [calls, setCalls] = useState([]);
    return { calls, setCalls }
}

export default CurrentConfig;