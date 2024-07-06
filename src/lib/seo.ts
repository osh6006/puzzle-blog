import { META } from "@/constants/blog";
import { Metadata } from "next";

type GetMetadataProps = {
  title?: string;
  description?: string;
  asPath?: string;
  ogImage?: string;
};

export const getMetadata = (metadataProps?: GetMetadataProps) => {
  const { title, description, asPath, ogImage } = metadataProps || {};

  const TITLE = title ? `${title} | 위픽` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? asPath : new URL(META.url);
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },

    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
