import type { NextApiRequest, NextApiResponse } from 'next'

const revalidate = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // Check for secret to confirm this is a valid request
  /*
  if (req.query.secret !== process.env.NEXT_REVALIDATION_KEY) {
  console.log('reval bad secret')

    return res.status(401).json({ message: 'Invalid token' })
  }
  */

  //dumb secret set for now. this should be called from server side but dont want to figure out how to setup cors rn
  //https://vercel.com/guides/how-to-enable-cors. Set NEXT_REVALIDATION_KEY in kv and call this func from dotnet. rm from fe
  if (req.query.secret !== "reloading") {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (typeof req.query.path === 'string') {
    try {
      await res.revalidate(req.query.path)
      return res.json({ revalidated: true })
    } catch (err: unknown) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      console.log(err)
      return res.status(500).send('Error revalidating')
    }
  }

  return res.status(400).send('No path to revalidate')
}

export default revalidate