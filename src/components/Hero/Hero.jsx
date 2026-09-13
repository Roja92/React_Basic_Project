import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.hero_content}>
<h1>YOUR FEET 
DESERVE
THE BEST</h1>
<p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
<div class={styles.hero_btn}>
    <button>Shop Now</button>
    <button className={styles.category}>Category</button>
</div>
<div>
    <p>Also Available On</p>
    <div className={styles.shop_img}>
        <img src="/images/amazon.png" alt="amazon" />
        <img src="/images/flipkart.png" alt="flipkart" />
    </div>
</div>
      </div>

      <div className={styles.hero_img}>
        <img src="images/shoe.png" alt="shoe" />
      </div>
      
    </section>
  )
}

export default Hero
