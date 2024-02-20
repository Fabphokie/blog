import styles from "../styles/about.module.css"
import Image from 'next/image';
import About from "../components/about";
export default function AboutMe() {
    return (

        <div className={styles.aboutMe}>
            <div className={styles.image}>
            <Image
                src="/images/site/Mmaphokeng.jpg"
                alt="An image showing Mmaphokeng "
                width={300}
                height={300}
                priority={true}
            />
            </div>
            
           <About/>
            
        </div>
        

    )

}