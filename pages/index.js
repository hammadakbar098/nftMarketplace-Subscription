import React, { useEffect, useContext, useState } from "react";

import { NFTMarketplaceContext } from "./../Context/NFTMarketplaceContext";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex";

const Home = () => {
  const { checkIfWalletConnected, fetchNFTs } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items?.reverse());
      setNftsCopy(items);
    });
  }, []);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder NFTData={nfts} />
      {/* <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <FollowerTab /> */}
      <Slider />
      {/* <Collection /> */}
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      {/* <Filter /> */}
      <NFTCard NFTData={nfts} />
      {/* <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      /> */}
      {/* <Category /> */}
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
