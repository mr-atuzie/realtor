import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";

const ShareLinks = ({ url, title, hashtag }) => {
  return (
    <div className="flex gap-4 items-center justify-center">
      {/* Facebook Share */}
      <FacebookShareButton url={url} quote={title} hashtag={hashtag}>
        <FaFacebook className="text-blue-600 w-6 h-6" />
      </FacebookShareButton>

      {/* WhatsApp Share */}
      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp className="text-green-500 w-6 h-6" />
      </WhatsappShareButton>

      {/* X (Twitter) Share */}
      <TwitterShareButton url={url} title={title} hashtags={[hashtag]}>
        <FaTwitter className="text-blue-400 w-6 h-6" />
      </TwitterShareButton>

      {/* Instagram Share */}
      <InstapaperShareButton url={url} title={title}>
        <FaInstagram className="text-pink-500 w-6 h-6" />
      </InstapaperShareButton>
    </div>
  );
};

export default ShareLinks;
