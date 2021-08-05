import { NextApiRequest, NextApiResponse } from "next";

const getUsers = (request: NextApiRequest, response: NextApiResponse) => {
  return response.status(200).json([
    {
      id: 1,
      name: 'Jerson'
    }
  ])
}

export default getUsers;
