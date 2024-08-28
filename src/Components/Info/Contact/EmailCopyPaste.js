import React, { useState } from 'react';

import './EmailCopyPaste.css';

const email = 'tariqsyed.dev@gmail.com';

export default function EmailCopyPaste() {
    const [copyStatus, setCopyStatus] = useState(false);

    const onCopyText = () => {
        navigator.clipboard.writeText('tariqsyed.dev@gmail.com');
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 1500) // Reset status after 1.5 seconds
    }

    return (
        <div>
            <a href="javascript:void(0);" onClick={onCopyText} className="email">{email}</a>
            {copyStatus && <p>Email copied to clipboard!</p>}
        </div>
    );
}