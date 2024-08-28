import React from 'react';

const email = 'tariqsyed.dev@gmail.com';

export default function EmailCopyPaste() {
    return (
        <a href='mailto:{tariqsyed.dev@gmail.com}' target="_blank" rel="noreferrer">{email}</a>
    );
}