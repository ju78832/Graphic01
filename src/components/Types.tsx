"use client"
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";



interface data {
    id: number,
    title: string,
    discription: string
    isFeatured: boolean
    slug: string
}

export const projects = [
    {
      title: "Graphics",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "/course",
    },
    {
      title: "Graphics",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "/course",
    },
    {
      title: "Graphics",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "/course",
    },
    {
      title: "Graphics",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "/course",
    },
    {
      title: "Graphics",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "/course",
    },
    {
      title: "Graphics",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "/course",
    },
  ];


export default function Types() {
    return (
        <div className="py-12">
            <div className="text-center">
                <div className="mt-4 text-teal-800 text-4xl font-semibold">Featured Types</div>
            </div>
            <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

        </div >
    )
}