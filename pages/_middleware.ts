import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // any cookies? set them and make persist
  // const createMasterCookie = (req, res) => {
  //   const cookies = req.cookies;
  //   const masterCookie = {};
  // ....
  let response = NextResponse.next();
  console.log("cookies :>> ", req.cookies);

  response.cookie("hello", "world");
  console.log("response :>> ", response);

  // res.setHeader("Set-Cookie", JSON.stringify(myCookie), {
  //   // JSON.stringify() does not serialize methods
  //   httpOnly: true,
  //   sameSite: "strict",
  //   // secure: ?
  //   //  path: '/',
  //   //  maxAge: ?,
  //   encode: (e) => e,
  //   domain: ".lego.com"
  // });
  return response; //  Promise<Response | undefined> | Response | undefined
}
// https://github.com/vercel/examples/blob/main/edge-functions/basic-auth-password/pages/_middleware.ts
