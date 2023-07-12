import { styles } from "../style"
import Newsletter from "./Newsletter"


const NewsletterSection = () => {
  return (
      <section className="pt-0">
          <div className={`${styles.boxWidth} mx-auto`}>
              <Newsletter/>
          </div>
   </section>
  )
}

export default NewsletterSection