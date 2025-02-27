import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

//INTERNAL IMPORT
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

const NFTDetails = () => {
  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);
  return (
    <div>
      <NFTDetailsPage nft={nft} />
      {/* <Category /> */}
      <Brand />
    </div>
  );
};

export default NFTDetails;
