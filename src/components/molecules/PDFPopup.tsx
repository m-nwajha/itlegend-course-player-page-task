"use client";
import Modal from "../atoms/Modal";
import { useEffect, useState } from "react";
import Spinner from "../atoms/Spinner";

const PDFPopup = ({
  file = "/assets/pdfs/Mohamed-ALNawjha.pdf",
  open,
  onClose,
}: {
  file?: string;
  open: boolean;
  onClose: () => void;
}) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    let objectUrl: string;

    fetch(file)
      .then((res) => res.blob())
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        setBlobUrl(objectUrl);
      });

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [file]);
  return (
    <Modal isOpen={open} onClose={onClose}>
      <div className="w-full h-[600px]">
        {blobUrl ? (
          <iframe src={blobUrl} className="w-full h-full" title="PDF Viewer" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Spinner size="lg" />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PDFPopup;
