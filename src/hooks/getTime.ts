export const getCurrentTime = (): string => {
  const now = new Date();
  return now.toISOString();
};

