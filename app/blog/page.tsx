'use client';
import React, { useState, useEffect } from 'react';
import styles from './Blog.module.css';
import Title from '@/components/Title';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  annotation: string;
  content: [
    {
      label: string;
      text: string;
    }
  ];
}

interface TextItem {
  label: string;
  text: string;
}

const Blog = () => {
  const [isActiveId, setIsActiveId] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(
          //   'https://jmmazzoni-site-backend.onrender.com/api/photos/?populate=*'
          'http://localhost:1337/api/blog-posts/?populate=*'
        );
        const data = await res.json();
        console.log('data yo', data.data);
        data.data.map((postItem: any) => {
          const newPost: Post = {
            id: 0,
            title: '',
            date: '',
            author: '',
            image: '',
            annotation: '',
            content: [{ label: '', text: '' }],
          };

          const post_Id = postItem.attributes.post_id;
          const title = postItem.attributes.title;
          const author = postItem.attributes.author;
          const image = postItem.attributes.title_image.data[0].attributes.url;
          const currentDate = getCurrentDate();
          const annotation = postItem.attributes.annotation;
          //   const content = postItem.attributes.main_text;
          console.log('image', image);

          const content: any = [{ label: '', text: '' }];

          postItem.attributes.main_text.map((mainTextItem: any) => {
            const textItem: TextItem = { label: '', text: '' };
            console.log('mainTextItem', mainTextItem);
            if (mainTextItem.type === 'image') {
              textItem.label = 'image';
              textItem.text = mainTextItem.image.url;
              content.push(textItem);
            } else if (mainTextItem.type === 'paragraph') {
              if (mainTextItem.children[0].bold === true) {
                textItem.label = 'bold';
              } else {
                textItem.label = 'normal';
              }
              textItem.text = mainTextItem.children[0].text;
              content.push(textItem);
            }
          });
          console.log('content', content);

          newPost.id = post_Id;
          newPost.title = title;
          newPost.date = currentDate;
          newPost.author = author;
          newPost.image = image;
          newPost.annotation = annotation;
          newPost.content = content;
          setPosts([...posts, newPost]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  function getCurrentDate() {
    const date = new Date();
  
    // Get day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
    const year = String(date.getFullYear()).slice(2); // Get the last two digits of the year
  
    // Combine the parts into the desired format
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  }
  
  // Example usage


  const deployHandler = (id: number) => {
    setIsActiveId(id);
  };

  const collapseHandler = () => {
    setIsActiveId(0);
  };

  const posts1 = [
    {
      id: 1,
      title: 'How to make good photos of food',
      date: '2021-10-10',
      author: 'Jean-Mark Mazzoni',
      image: '/teriyaki_chicken_i.jpg',
      annotation:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 2,
      title: 'Do you really need food stylist?',
      date: '2021-10-11',
      author: 'Jane Doe',
      image: '/frisee_aux_lardons_1_i.jpg',
      annotation:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 3,
      title: 'Is food on the photo eatable?',
      date: '2021-10-12',
      author: 'Kevin Doe',
      image: '/L1000986_PS_edit last.jpg',
      annotation:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];

  if (posts.length > 0) {
    console.log('posts', posts);
  }
  return (
    <div className={styles.mainContainer}>
      <Title />

      <div className={styles.blogContainer}>
        <div className={styles.blogTitle}>Food photography blog</div>
        {posts.map(
          ({ id, title, author, date, image, annotation, content }) => (
            <div
              className={
                id !== isActiveId
                  ? styles.blogItemCollapsed
                  : styles.blogItemDeployed
              }
            >
              <div className={styles.postTitle}>{title}</div>
              <div className={styles.nameDateWrapper}>
                <div className={styles.blogAuthor}>{author}</div>
                <div className={styles.blogDate}>{date}</div>
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.blogImage}>
                  <img src={image} alt='postImage' />
                </div>
                <div
                  className={
                    id !== isActiveId
                      ? styles.blogTextCollapsed
                      : styles.blogTextDeployed
                  }
                >
                  {id !== isActiveId ? (
                    annotation
                  ) : (
                    <div className={styles.mainTextContainer}>
                      {annotation}
                      <br />
                      {content.map((item: any) => {
                        if (item.text === '') {
                          return <br />;
                        } else if (item.label === 'image') {
                          return (
                            <div className={styles.imageInPostContainer}>
                              <img src={item.text} alt='postImage' />
                            </div>
                          );
                        } else if (item.label === 'bold') {
                          return (
                            <>
                              <div className={styles.boldText}>{item.text}</div>
                            </>
                          );
                        } else {
                          return <div>{item.text}</div>;
                        }
                      })}
                    </div>
                  )}
                </div>
              </div>
              {id !== isActiveId ? (
                <div
                  className={styles.readMoreButton}
                  onClick={() => deployHandler(id)}
                >
                  Read more
                </div>
              ) : (
                <div
                  className={styles.readMoreButton}
                  onClick={collapseHandler}
                >
                  Collapse
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blog;
