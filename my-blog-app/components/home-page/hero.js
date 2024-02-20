import classes from './hero.module.css'
import Image from 'next/image';
import { MdExpandMore } from "react-icons/md";
import Link from 'next/link';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Mmaphokeng.jpg"
          alt="An image showing Mmaphokeng "
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hi, Welcome to my Blog</h1>
      <p>
        My name is Mmaphokeng Senne
        <br />
        <Link href="/aboutMe">
          <>
            <MdExpandMore />
          </>
        </Link>
      </p>


    </section>
  );
}

export default Hero;