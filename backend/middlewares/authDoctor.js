import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
  try {
    console.log(req);

    const { dtoken } = req.headers;
    if (!dtoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    req.body = req.body || {};
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
    console.log("token_decode", token_decode);

    req.body.docId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authDoctor;
