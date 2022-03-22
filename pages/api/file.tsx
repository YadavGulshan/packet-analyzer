export default async function sendEmail(req, res) {
  console.log(req.method);
  if (req.method === 'POST') {
    return res.status(200).json({
      message: 'This is in post',
    });
  } else {
    return res.status(200).json({
      message: 'This is not a post',
    });
  }
}
