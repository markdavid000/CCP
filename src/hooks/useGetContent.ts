import { useEffect, useState } from "react";
import { getContentContract } from "../constants/contract";
import { readOnlyProvider } from "../constants/provider";

interface ContentItem {
  title: string;
  id: number;
  dateCreated: number;
  creatorProfile: string;
  ipfsHash: string;
  creator: string;
  isDeleted: boolean;
  isMonetized: boolean;
  views: number;
  likes: number;
  dislikes: number;
  shares: number;
  rating: number;
  contentType: string;
}

interface State {
  loading: boolean;
  data?: ContentItem;
  error?: string;
}

const useGetContent = (): State => {
  const [lastId, setLastId] = useState(0);
  const [content, setContent] = useState<State>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contract = getContentContract(readOnlyProvider);
        const [
          title,
          id,
          dateCreated,
          creatorProfile,
          ipfsHash,
          creator,
          isDeleted,
          isMonetized,
          views,
          likes,
          dislikes,
          shares,
          rating,
          contentType,
        ] = await contract.fetchContent(lastId);
        setContent({
          loading: false,
          data: {
            title: title,
            id: id,
            dateCreated: dateCreated,
            creatorProfile: creatorProfile,
            ipfsHash: ipfsHash,
            creator: creator,
            isDeleted: isDeleted,
            isMonetized: isMonetized,
            views: views,
            likes: likes,
            dislikes: dislikes,
            shares: shares,
            rating: rating,
            contentType: contentType,
          },
          error: undefined,
        });
        setLastId(id);
      } catch (err: any) {
        setContent({
          loading: false,
          data: undefined,
          error: err.message,
        });
      }
    };

    fetchContent();
  }, [lastId]);

  return content;
};

export default useGetContent;
