'use client';
import React, { useState, useEffect, use } from 'react';
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
            'https://jmmazzoni-site-backend.onrender.com/api/blog-posts/?populate=*'
        
        );
        const data = await res.json();
        const currentPosts = [...posts];
   

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


          // exract data from the response
          const post_Id = postItem.attributes.post_id;
          const title = postItem.attributes.title;
          const author = postItem.attributes.author;
          const image = postItem.attributes.title_image.data.attributes.url;
          const currentDate = postItem.attributes.date;
          const annotation = postItem.attributes.annotation;
          const content: any = [{ label: '', text: '' }];

       

          // sort information for the content
          postItem.attributes.main_text.map((mainTextItem: any) => {
            const textItem: TextItem = { label: '', text: '' };
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

          //write data to the newPost object
          newPost.id = post_Id;
          newPost.title = title;
          newPost.date = currentDate;
          newPost.author = author;
          newPost.image = image;
          newPost.annotation = annotation;
          newPost.content = content;

          currentPosts.push(newPost);
          setPosts(currentPosts);
        });
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  const deployHandler = (id: number) => {
    setIsActiveId(id);
  };

  const collapseHandler = () => {
    setIsActiveId(0);
  };

  useEffect(() => {
    console.log('posts', posts);
  }, [posts]);

  return (
    <div className={styles.mainContainer}>
      <Title />

      <div className={styles.blogContainer}>
        <div className={styles.blogTitle}>Food photography blog</div>
        {posts.map(
          ({ id, title, author, date, image, annotation, content }) => (
            <div
              key={id}
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
                      {content.map((item: any, index: any) => {
                        if (item.text === '') {
                          return <br key={index} />;
                        } else if (item.label === 'image') {
                          return (
                            <div
                              key={index}
                              className={styles.imageInPostContainer}
                            >
                              <img src={item.text} alt='postImage' />
                            </div>
                          );
                        } else if (item.label === 'bold') {
                          return (
                            <div key={index} className={styles.boldText}>
                              {item.text}
                            </div>
                          );
                        } else {
                          return <div key={index}>{item.text}</div>;
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
