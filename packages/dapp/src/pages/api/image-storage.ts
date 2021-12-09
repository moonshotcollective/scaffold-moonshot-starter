// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
import multiparty from "multiparty";
import { NextApiRequest, NextApiResponse } from "next";
import { Web3Storage, File } from "web3.storage";

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

function getWeb3Token() {
  const token = process.env.WEB3STORAGE_TOKEN;
  if (!token) throw new Error(`Misconfigured: web3.storage token`);
  return token;
}

const web3Storage = new Web3Storage({ token: getWeb3Token() });

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = await parseForm(req);
  const cids = await Promise.all(
    Object.values(form.files)
      .flatMap((file) => file)
      .map(async (file: any) => {
        const name = file.originalFilename;
        const f = new File([fs.readFileSync(file.path)], name, {
          type: "image/*",
        });
        const cid = await web3Storage.put([f], { wrapWithDirectory: false });
        return { field: file.fieldName, cid };
      })
  );

  return res.status(200).json({
    cids: cids.reduce((formattedCids, curr) => {
      // eslint-disable-next-line no-param-reassign
      formattedCids[curr.field] = curr.cid;
      return formattedCids;
    }, {} as any),
  });
}

// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
