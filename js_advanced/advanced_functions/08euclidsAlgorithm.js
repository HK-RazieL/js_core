function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        let remainder = a % b;
        return gcd(b, remainder);
    }
}