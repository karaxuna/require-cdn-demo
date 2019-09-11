function expectToEqual (a, b, message) {
    if (a !== b) {
        throw new Error(message);
    }
}

expectToEqual(
    typeof window.React, 'undefined',
    'window.React is expected to be undefined at the beginning'
);

// Dynamically load react after 5 seconds
setTimeout(async function () {
    const deps = await Promise.all([
        import('react'),
        import('react-dom')
    ]);

    expectToEqual(deps.length, 2);
}, 3000)
