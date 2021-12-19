import { NextApiRequest, NextApiResponse } from "next";
import {
  SiweMessage,
  SignatureType,
} from "@scaffold-eth/server/dist/core/libs/siwe/siwe";
import multiparty from "multiparty";

type Form = {
  fields: any;
  files: any;
};

function parseForm(req: NextApiRequest): Promise<Form> {
  const form = new multiparty.Form();
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          fields,
          files,
        });
      }
    });
  });
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = await parseForm(req);
  const msg = JSON.parse(form.fields.message);
  const siweMsg = new SiweMessage({
    ...msg,
    type: SignatureType.PERSONAL_SIGNATURE,
  });
  console.log({ siweMsg });
  return res.status(200).json({
    signedSiweMessage: siweMsg.signMessage(),
    siweMsg: siweMsg,
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
