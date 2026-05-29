const generateBookingId = () => {
  const year = new Date().getFullYear();
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `FC-BOOK-${year}-${randomNumber}`;
};

export default generateBookingId;
