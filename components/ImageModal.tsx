import React, { useState, useEffect, use } from 'react';
import Modal from 'react-modal';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  indexImage: number;
  photos: any;
}
type currentIndex = number;
type photosToLoad = {
  id: number;
  src: string;
  title: string;
  renderNum: number;
}[];

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '70%',
    height: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 3s ease',
    padding: '0px',
    border: 'none',
    backgroundColor: 'transparent',
  },
};

const buttonsContainer: any = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};
const button = {
  border: 'none',
  cursor: 'pointer',
  color: 'white',
  fontSize: '30px',
  padding: '20px',
};

const slideStyles: any = {
  transition: 'transform 3s ease-in-out',
  objectFit: 'contain',
  maxWidth: '100%',
  maxHeight: '100%',
};
// Modal.setAppElement('#root'); // Set the root element as the app element

const ImageModal = ({
  isOpen,
  onClose,
  indexImage,
  photos,
}: ImageModalProps) => {
  const [photosToLoad, setPhotosToLoad] = useState<photosToLoad>([]);
  const [currentIndex, setCurrentIndex] = useState<currentIndex>(indexImage);
  const [activeIndex, setActiveIndex] = useState<currentIndex>(0);

  //   Modal.setAppElement('#root')

  useEffect(() => {
    setPhotosToLoad(photos);
  }, []);

  useEffect(() => {
    setCurrentIndex(indexImage);
  }, [indexImage]);


  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : photos.length - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < photos.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 'ArrowRight') {
        nextImage();
      }
      if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };
    // Attach the event listener when the component mounts
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex]);

  console.log('currentIndex', currentIndex);
  console.log('photosToLoad', photos);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Image Modal'
    >
      <div style={buttonsContainer}>
        <div onClick={prevImage} style={button}>
          <AiOutlineLeft />
        </div>
        <div onClick={nextImage} style={button}>
          <AiOutlineRight />
        </div>
      </div>

      <img
        src={photos[currentIndex]?.src}
        alt={`Image ${currentIndex + 1}`}
        style={slideStyles}
      />
    </Modal>
  );
};

export default ImageModal;
