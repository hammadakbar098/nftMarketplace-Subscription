import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";
import { NFTMarketplaceContext } from "./../Context/NFTMarketplaceContext";

const collection = () => {
  const { fetchNFTs, setError } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs();
    try {
      fetchNFTs().then((items) => {
        setNfts(items?.reverse());
        setNftsCopy(items);
        // console.log(`working ${items}`);
      });
    } catch (error) {
      setError("Please reload the browser", error);
    }
  }, []);
  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      {nfts?.length === 0 ? (
        <p className={Style.noNFT}>No NFTS available yet</p>
      ) : nfts?.length === undefined ? (
        <p className={Style.noNFT}>No NFTS available yet</p>
      ) : (
        <NFTCardTwo NFTData={nfts} />
      )}

      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
