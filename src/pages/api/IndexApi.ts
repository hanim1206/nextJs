// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  age: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) 
{
    res.status(200).json({ age: 100 })
}
