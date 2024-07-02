import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const SinglePage = () => {
//   const { slug } = params;

//   const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />

            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John doe</span> 
              <span  className={styles.date}>01.01.2024</span> 
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit sapiente quos et nisi repellat voluptatum nihil. Voluptate pariatur provident expedita nobis quam vitae molestias voluptatum consequuntur dolores ullam hic dignissimos minima totam optio, nam quos officia nihil. Veniam, perspiciatis?
              </p>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit sapiente quos et nisi repellat voluptatum nihil. Voluptate pariatur provident expedita nobis quam vitae molestias voluptatum consequuntur dolores ullam hic dignissimos minima totam optio, nam quos officia nihil. Veniam, perspiciatis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit sapiente quos et nisi repellat voluptatum nihil. Voluptate pariatur provident expedita nobis quam vitae molestias voluptatum consequuntur dolores ullam hic dignissimos minima totam optio, nam quos officia nihil. Veniam, perspiciatis?
              </p>

            </div>
            <div className={styles.Comment}>
              <Comments />
            </div>
          </div>
            <Menu />
      </div>  
    </div>
  );
};

export default SinglePage;