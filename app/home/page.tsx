'use client';
import React, { useState, useEffect, use } from 'react';
import styles from '../../styles/home.module.css';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import ImageModal from '@/components/ImageModal';
import photosToLoad from '../../dataToLoad/photos';

type photo = {
  id: string;
  renderNum: number;
  title1: string;
  title2?: string;
  src1: string;
  src2?: string;
};
type MyStateType = number | null;

const Home = () => {
  const [photos, setPhotos] = useState<photo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [selectedImageId, setSelectedImageId] = useState<MyStateType>(0);
  const [activeImageId, setActiveImageId] = useState<MyStateType>(0);

  useEffect(() => {
    setPhotos(photosToLoad);
  }, []);

  const openModal = (imageIndex: number) => {
    setSelectedImageId(imageIndex);
    setIsModalOpen(true);
    console.log(imageIndex, 'imageIndex');
  };
  useEffect(() => {
    setActiveImageId(selectedImageId);
  } , [selectedImageId]);


  const closeModal = () => {
    setSelectedImageId(0);
    setIsModalOpen(false);
  };

  console.log(photos, 'photos');

  return (
    <main className={styles.mainContainer}>
    
       <div className={styles.photoContainer}>
         <Title />

         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
             
               alt={''}
               src={'/photo/roasted-chicken-potatoes_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() =>
                 openModal(0)
               }
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/pizza-cutting_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(1)}
             />
           </div>
         </div>
         <div className={styles.fullscreenRow}>
           <img
             alt={''}
             src={'/photo/saucisson_1_i.jpg'}
             width={'100%'}
             height={'auto'}
             onClick={() => openModal(2)}
           />
         </div>

         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/heirloon_tomatoo_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(3)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/bell-pepper_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(4)}
             />
           </div>
         </div>

         <div className={styles.fullscreenRow}>
           <img
             alt={''}
             src={'/photo/mezze_1_1_i.jpg'}
             width={'100%'}
             height={'auto'}  onClick={() => openModal(5)}
           />
         </div>

         {/* main disches */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/lox-bagel_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(6)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/soup_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(7)}
             />
           </div>
         </div>

         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/cornichons_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(8)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/pate_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(9)}
             />
           </div>
         </div>
         <div className={styles.filler}></div>
         {/* deserts */}
         {/* <div className={styles.fullscreenRow}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/3-cupcakes_1_i.jpg'}
               width={'100%'}
               height={'100%'}
             />
           </div>
         </div> */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/cheesecake-strawberries_1_i.jpg'}
               width={'100%'}
               height={'100%'}
               onClick={() => openModal(10)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>

           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/parfait_1_i.jpg'}
               width={'100%'}
               height={'100%'}
               onClick={() => openModal(11)}

             />
           </div>
         </div>

         {/* coctails */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/orange-cocktail_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(12)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/strawberries_1_i.jpeg'}
               width={'100%'}
               height={'auto'}
             />
           </div>
         </div>

         <div className={styles.fullscreenRow}>
           <img
             alt={''}
             src={'/photo/watermelon-cantaloupe_1_i.jpeg'}
             width={'100%'}
             height={'auto'}
             onClick={() => openModal(13)}
           />
         </div>
         {/* fruits */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/fruits_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(14)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/peaches_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(15)}
             />
           </div>
         </div>
         {/* desets 2 */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/creme-brulee_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(16)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/mini-fruit-tart_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(17)}
             />
           </div>
         </div>

         {/* green shadow */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/bruxelles-sprouts_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(18)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/sardines_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(19)}
             />
           </div>
         </div>

         <div className={styles.fullscreenRow}>
           <img
             alt={''}
             src={'/photo/clams_1_i.jpg'}
             width={'100%'}
             height={'auto'}
              onClick={() => openModal(20)}
           />
         </div>

         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/clams_2_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(21)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/clams_with_linguini_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(22)}
             />
           </div>
         </div>

         <div className={styles.fullscreenRow}>
           <img
             alt={''}
             src={'/photo/hamburger_1_i.jpg'}
             width={'100%'}
             height={'auto'}
              onClick={() => openModal(23)}
           />
         </div>
         {/* junky food */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/macaroni-and-cheese_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(24)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/hotdog_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(25)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/pizza_2_v2_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(26)}
             />
           </div>
         </div>

         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/watermelon-juice_1_i.jpeg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(27)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/pepper-salad_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(28)}
             />
           </div>
         </div>
         <div className={styles.fullscreenRow}>
           <img
             alt={''}
             src={'/photo/hand-apple_1_i.jpg'}
             width={'100%'}
             height={'auto'}
              onClick={() => openModal(29)}
           />
         </div>
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/Figs_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(30)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/mojito_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(31)}
             />
           </div>
         </div>

         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'photo/garlic_1_i.jpg'}
               width={'100%'}
               height={'auto'}
               onClick={() => openModal(32)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'photo/israelu-couscous-salad_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(33)}
             />
           </div>
         </div>
         {/* pure green */}
         <div className={styles.row}>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/asparagus_1_i.jpg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(34)}
             />
           </div>
           <div className={styles.verticalSplitter}></div>
           <div className={styles.imageWrapper}>
             <img
               alt={''}
               src={'/photo/sushi-veggie_1_i.jpeg'}
               width={'100%'}
               height={'auto'}
                onClick={() => openModal(35)}
             />
           </div>
         </div>
       </div>
       <ImageModal
         isOpen={isModalOpen}
         onClose={closeModal}
         indexImage={activeImageId}
       />
       <Footer />
     </main>
  );
};

export default Home;
