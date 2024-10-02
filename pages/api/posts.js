// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
export default async function handler(req, res) {
  /*
  const client = new PrismaClient()
  
  const posts = await client.posts.findMany({
    include: {
      Comments: true,
      author: true
    }
  })
  */
  /**
 *       <div>
        <Link href={`/posts/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <p>By {post.user.name}</p>
      </div>
 */
  /*
  await client.$disconnect()
  */
  let posts = [];
  for (let index = 0; index < 200; index++) {
    posts.push({
      id: index,
      title: `${faker.word.adjective()} ${faker.word.noun()} and ${faker.word.adjective()}  ${faker.word.noun()}`,
      user: {
        name: faker.name.findName(),
      },
    });
  }
  res.status(200).json({ posts });
}
