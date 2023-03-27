export const isLeapYear = (year: any) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};