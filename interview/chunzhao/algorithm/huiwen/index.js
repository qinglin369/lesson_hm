function longestPalindrome(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left, right) {
        // 四周去扩
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // 奇数长度的回文
        expandAroundCenter(i, i + 1); // 偶数长度的回文
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babadbababab"));