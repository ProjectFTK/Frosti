import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from "fs";
import path from "path";
import formidable, { File, IncomingForm } from 'formidable';
import officeParser, { OfficeParserConfig } from 'officeparser'

/* Don't miss that! */
export const config = {
  api: {
    bodyParser: false,
  }
};

type ProcessedFiles = Array<[string, File]>;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const config: OfficeParserConfig = {
    ignoreNotes: true       // Ignore notes while parsing presentation files like pptx or odp.
  }

  let status = 200,
    resultBody = { status: 'ok', message: 'Files were uploaded successfully' };

  /* Get files using formidable */
  const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
    const form = new IncomingForm();
    const files: ProcessedFiles = [];
    form.on('file', function (field, file) {
      files.push([field, file]);
    })
    form.on('end', () => resolve(files));
    form.on('error', err => reject(err));
    form.parse(req, () => {
      //
    });
  }).catch(e => {
    console.log(e);
    status = 500;
    resultBody = {
      status: 'fail', message: 'Upload error'
    }
  });

  if (files?.length) {
    /* Create directory for uploads */
    const targetPath = path.join(process.cwd(), `/uploads/`);
    try {
      await fs.access(targetPath);
    } catch (e) {
      await fs.mkdir(targetPath);
    }

    /* Move uploaded files to directory */
    for (const file of files) {
      const tempPath = file[1].filepath;
      await fs.rename(tempPath, targetPath + file[1].originalFilename);
      officeParser.parseOfficeAsync(targetPath + file[1].originalFilename, config)
        .then(data => {
          console.log(data)
        })
        .catch((err) => console.error(err));
      await fs.rm(targetPath + file[1].originalFilename);
    }
  }

  res.status(status).json(resultBody);
}

export default handler;