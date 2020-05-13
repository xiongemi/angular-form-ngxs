// regex taken from https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
export const nameRegex = /^[a-z ,.'-]+$/i;

// regex taken from
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const numberOnlyRegex = /^[0-9]*$/;
