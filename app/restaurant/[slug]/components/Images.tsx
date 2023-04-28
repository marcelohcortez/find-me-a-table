"use client";

import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export default function Images({ images }: { images: string[] }) {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
          {images.length ? (
            <>
              { images.length } photo{ images.length > 1 ? "s" : ""}
            </>
          ) : (
            <>
              Restaurant has no photos
            </>
          )}
        </h1>

        <div className="flex flex-wrap">
          {images.map((src, index) => (
            <img
            key={ index }
            className="w-56 h-44 mr-1 mb-1"
            src={ src }
            alt=""
            onClick={() => openImageViewer(index)}
            />
          ))}
        </div>
        {isViewerOpen && (
          <ImageViewer
            src= { images }
            currentIndex= { currentImage }
            onClose= { closeImageViewer }
            disableScroll= { false }
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside= { true }
          />
        )}
    </div>
  )
}
