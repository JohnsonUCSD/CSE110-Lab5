// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

/* isPhoneNumber Testing */
describe('isPhoneNumber', () => {
  test('phone number with Area code and paranthesis', () => {
    expect(isPhoneNumber("(555)555-5555")).toBe(true);
  });
  test('phone number without area code', () => {
    expect(isPhoneNumber("272-2727")).toBe(true);
  });
  test('not a valid phone number', () => {
    expect(isPhoneNumber("1")).toBe(false);
  });
  test('not a number', () => {
    expect(isPhoneNumber("hello world")).toBe(false);
  });
});

/* isEmail Testing */
describe('isEmail', () => {
  test('valid normal gmail email', () => {
    expect(isEmail("johnsonchung9@gmail.com")).toBe(true);
  });
  test('valid yahoo email with underscore', () => {
    expect(isEmail("grandma_facebook@yahoo.com")).toBe(true);
  });
  test('email missing the .com', () => {
    expect(isEmail("emailllll@gmail")).toBe(false);
  });
  test('email missing the @', () => {
    expect(isEmail("missingatgmail.com")).toBe(false);
  });
});

/* isStrongPassword Testing */
describe('isStrongPassword', () => {
  test('valid strong password with underscores', () => {
    expect(isStrongPassword("is_strong_pass")).toBe(true);
  });
  test('valid strong password with numbers and capitals', () => {
    expect(isStrongPassword("ABC123abc123")).toBe(true);
  });
  test('password that is too short: under 4 characters', () => {
    expect(isStrongPassword("pop")).toBe(false);
  });
  test('password that is too long: over 15 characters ', () => {
    expect(isStrongPassword("passwordthatistoolong1999")).toBe(false);
  });
});


/* isDate Testing */
describe('isDate', () => {
  test('valid date with high year', () => {
    expect(isDate('2/22/2222')).toBe(true);
  });
  test('valid single digit date with leading 0', () => {
    expect(isDate('03/28/2025')).toBe(true);
  });
  test('date with invalid year format', () => {
    expect(isDate('5/6/25')).toBe(false);
  });
  test('date that does not exists with invalid day', () => {
    expect(isDate('6/333/2036')).toBe(false);
  });
});

/* isHexColor Testing */
describe('isHexColor', () => {
  test('valid 3 digit hex code', () => {
    expect(isHexColor('#123')).toBe(true);
  });
  test('valid 6 digit hex', () => {
    expect(isHexColor('#ffffff')).toBe(true);
  });
  test('invalid hex with 4 digits: wrong length', () => {
    expect(isHexColor('#ffff')).toBe(false);
  });
  test('invalid hex with non-hex code value', () => {
    expect(isHexColor('#ffg')).toBe(false);
  });
});