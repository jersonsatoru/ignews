import { NextApiRequest, NextApiResponse } from "next";

const getUsers = (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query
  return response.status(200).json([
    {
      id,
      name: 'Jerson'
    }
  ])
}

export default getUsers;
