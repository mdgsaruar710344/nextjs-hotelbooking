export const getDateDifferenceFromTimestamps = (checkinTimestamp, checkoutTimestamp) => {
  // Calculate the difference in milliseconds
  const differenceInMs = checkoutTimestamp - checkinTimestamp;

  // Convert to various units
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24))+1;

  return  differenceInDays;
  
};

