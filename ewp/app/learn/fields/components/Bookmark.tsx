"use client";
import React, { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface Props {
  onClick: () => void;
  color: string;
  size: number;
}

const Bookmark = ({ onClick, color, size }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return status ? (
    <FaBookmark className={color}size={size} onClick={toggle} />
  ) : (
    <FaRegBookmark className={color} size={size} onClick={toggle} />
  );
};

export default Bookmark;
