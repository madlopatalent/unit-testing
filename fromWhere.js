function fromWhere(regNo) {
    if (regNo.startsWith('CY')) {
        return 'Bellville';
    } else if (regNo.startsWith('CJ')) {
        return 'Paarl';
    } else if (regNo.startsWith('CA')) {
        return 'Cape Town';
    } else if (regNo.startsWith('ZN')) {
        return 'Some other place!';
    }
}