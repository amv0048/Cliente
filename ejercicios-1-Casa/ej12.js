const adnToArn = ((adn) => {
    return adn.replace('T', 'U');
});

console.log(adnToArn("GCAT"));