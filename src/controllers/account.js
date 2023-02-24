export const account = async (req, res) => {
  try {
      res.send("test");
  } catch (error) { 
    res.json({
      message: 'Something went wrong. please try again.',
      error: error.message,
    });
  }
};
