import { Prisma } from "@prisma/client";

export default async function posts({params}:{params :Promise<{ id: string }>}) {
    const {id} = await params
    const post = await Prisma.Post.finUnique
}