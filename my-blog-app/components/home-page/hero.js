import classes from './hero.module.css'
import Image from 'next/image';

function Hero () {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
              src="/images/site/Phokie.jpg" 
              alt="An image showing Phokie " 
              width={300}
              height={300}
              priority={true}
            />
        </div>
        <h1>Hi, I'm Mmaphokeng</h1>
        <p>
            I blog about web development - especially frontend frameworks like 
            Angular or React.
        </p>
    </section>
  );
}

export default Hero;