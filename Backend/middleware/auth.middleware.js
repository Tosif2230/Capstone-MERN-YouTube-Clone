import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized" });
    }
    const token = header.split(" ")[1];
    //verifyToken
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; //User Payload
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
