import classes from './hero.module.css'
import Image from 'next/image';

function Hero () {
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
        <h1>Hi, I'm Mmaphokeng Senne</h1>
        <p>
            Welcome to My Blog - I blog about web development - especially frontend frameworks like 
            Angular or React.
        </p>
    </section>
  );
}

export default Hero;