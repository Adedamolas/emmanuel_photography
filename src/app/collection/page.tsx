"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { generalSansLight } from "../../../styles/fonts";

interface Collection {
  title: string;
  slug: string;
  coverImage: string;
}

const collections: Collection[] = [
  { title: "BRANDING", slug: "branding", coverImage: "DSC_0655_lccgdj" },
  { title: "CHILDREN", slug: "children", coverImage: "DSC_2340a_tbpnry" },
  { title: "DOCUMENTARY", slug: "documentary", coverImage: "DSC_1739b_l5mqbw" },
  { title: "FAMILY", slug: "family", coverImage: "DSC_0071j_geheha" },
  { title: "FINEART", slug: "fine-art", coverImage: "DSC_0793aa_cn0nxb" },
  { title: "GRADUATION", slug: "graduation", coverImage: "DSC_0040ay2_zo51ha" },
  {
    title: "HEAD-SHOTS",
    slug: "head-shot",
    coverImage: "DSC_0225.jpgd_acbeqi",
  },
  { title: "MATERNITY", slug: "maternity", coverImage: "DSC_1061bb_e6vbmf" },
  { title: "OUTDOOR", slug: "outdoor", coverImage: "DSC_2460_1_hxsvck" },
  { title: "WEDDINGS", slug: "weddings", coverImage: "DSC_1000a_xksvos" },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1
        className={`text-4xl font-semibold mb-12 ${generalSansLight.className}`}
      >
        COLLECTIONS.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link key={collection.slug} href={`/collections/${collection.slug}`}>
            <div className="group cursor-pointer relative">
              {" "}
              <div className="aspect-square relative overflow-hidden">
                <CldImage
                  width="600"
                  height="600"
                  src={collection.coverImage}
                  alt={`${collection.title} Photography`}
                  className=" relative object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
                <span className="absolute bottom-2 right-2 text-black -rotate-45 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex flex-row justify-center items-center transition-transform duration-300 group-hover:translate-x--2 group-hover:-translate-y-2">
                  <ArrowRight className="size-4 sm:size-10 transform" />
                </span>
              </div>
              <div className=" flex flex-row justify-between align-middle h-min p-2">
                <h2 className="text-3xl mt-4 border-b-2 hover:boder-b-black tracking-wide">
                  {collection.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
