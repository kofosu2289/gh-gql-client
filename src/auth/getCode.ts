import * as http from "http";
import "cross-fetch/polyfill";
import fetch from "cross-fetch";
import open from "open";
import * as url from "url";
import * as keytar from "keytar";

const FormData = require("form-data");

const PORT = 3000;

export const getCode = () => {
  return new Promise((resolve, reject) => {
    http
      .createServer(function (req, res) {
        if (!req.url) {
          return;
        }
        const { code } = url.parse(req.url, true).query;
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(`The code is ${code}`);
        res.end();

        (async () => {
          const data = new FormData();
          data.append("client_id", process.env.CLIENT_ID!);
          data.append("client_secret", process.env.CLIENT_SECRET!);
          data.append("code", `${code}`);
          data.append("state", "abc");
          data.append("redirect_uri", "http://localhost:3000");

          fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            },
          })
            .then((res: any) => res.json())
            .then(async (data: any) => {
              await keytar.setPassword(
                "github",
                process.env.CLIENT_ID!,
                data.access_token
              );
              resolve(data.access_token);
            });
        })();
      })
      .listen(PORT);
    open(
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user%20read:org%20public_repo%20admin:enterprise&state=abc`
    );
  });
};
