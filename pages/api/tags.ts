import type { NextApiRequest, NextApiResponse } from 'next'

type Item = {
    name: string;
    url: string;
}
type Data = {
    data: Item[]
}



export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    let items: Item[] = [
        { name: 'category1', url: '/category1' },
        { name: 'category2464', url: '/category2' },
        { name: 'category364684', url: '/category3' },
        { name: 'category46464', url: '/category4' },
    ]

        ;
    res.status(200).json({ data: items })
}