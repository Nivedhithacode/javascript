function repeatedString(str, n) 
{
    if (n <= 0) 
    {
        return "";
    }
    return Array(n).fill(str).join('-');
}

console.log(repeatedString("hello", 3));