import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css'

function Home() {
  
  return(
    <>
        <div className={styles.navigation_1}>
            <ul className={styles.list_left}>
                <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Trifuerza.svg/500px-Trifuerza.svg.png'></img></li>
                <li><b>Smart Buy</b></li>
                <li><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Home</Link></li>
                <li><Link to='https://0e9edoybj8g7kljdmx8j0cro56.hop.clickbank.net' style={{textDecoration: 'none', color: 'black'}}>More</Link></li>
                <li>
                    <div className={styles.dropdown}>
                        <div className={styles.dropdown_button}>Recommended</div>
                            <div className={styles.dropdown_content}>
                                <Link to='https://40232bvfl1iahmf079j3rm1mdd.hop.clickbank.net' target='_blank'>By L'Oreal</Link>
                                <Link to='https://b3bf3l4ai4smlejfzevqr3uyb4.hop.clickbank.net' target='_blank'>BY Victoria</Link>
                                <Link to='https://8d10an28n8qhfkofxgwd-b4v5s.hop.clickbank.net' target='_blank'>By Bath & Body</Link>
                                <Link to='https://0e9edoybj8g7kljdmx8j0cro56.hop.clickbank.net' target='_blank'>Food and Drug Administration</Link>
                            </div>
                        </div>
                </li>
            </ul>

            <ul className={styles.list_right}>
                <li><Link to='https://0e9edoybj8g7kljdmx8j0cro56.hop.clickbank.net' target='_blank' style={{textDecoration: 'none', color: 'black'}}>Special</Link></li>
                <li><Link to='https://0f75blvfpyjgflgfwel-wmuj0t.hop.clickbank.net' target='_blank' style={{textDecoration: 'none', color: 'black'}}>More</Link></li>
            </ul>

        </div>

        <div className={styles.navigation_2}>
            <div className={styles.left}>
                <h1>Preserve Your Health</h1>
                <p>Your Health is your Greatest Capital. Protect it with all you've got.</p>
            </div>

            <div className={styles.right}>
                <Link to='https://0e9edoybj8g7kljdmx8j0cro56.hop.clickbank.net' target='_blank'><img src='https://d2h8hiv6zzm73v.cloudfront.net/legacy/vendors/phytomem/ptm2_bg1775039626886.png'/></Link>
                <h2>Phytomem One: New Toxic Brain Shards Memory Offer</h2>
                <p>THIS IS NOT YOUR STANDARD VSL! Unique video format hitting every major brain pain point adults 55+ are desperate to solve: memory gaps, brain fog, lost words. Evergreen market with insane upside. Lock in your spot now!</p>
            </div>
        </div>

        <div className={styles.main}>
            <div className={styles.layer_1}>
                <div className={styles.layer_1_left}>
                    <Link to='https://0f75blvfpyjgflgfwel-wmuj0t.hop.clickbank.net' target='_blank'><img src='https://d2h8hiv6zzm73v.cloudfront.net/legacy/vendors/prodentim/prodentim_21702971708025.jpg'/></Link>
                </div>

                <div className={styles.layer_1_right}>
                    <h1>ProDentim - The Biggest Monster In The Dental Niche</h1>
                    <ol>
                        <li>
                            <h2>Doctor Endorsed & Unique Formula With This Probiotic Soft Candy.</h2>
                        </li>
                        <li>
                            <h2>The newly refreshed version is climbing full speed! Crushing it across all platforms: Native/Email/Fb.</h2>
                        </li>
                        <li>
                            <h2>Limited Slots Available. Get on board quickly!</h2>
                        </li>
                    </ol>
                </div>
            </div>

            <div className={styles.layer_2}>
                <h1>Look up Some of Our Top Offers fof This Month</h1>

                <div className={styles.layer_2_content}>
                    <div className={styles.layer_2_object}>
                        <Link to='https://40232bvfl1iahmf079j3rm1mdd.hop.clickbank.net' target='_blank'><img src='https://d2h8hiv6zzm73v.cloudfront.net/legacy/vendors/audifort/PRODx3-upsell-800x600px__1749116717625.png'/></Link>
                        <h2>Audifort - Top Brain and Hearing</h2>
                        <p>Claim your Discounted Audifort Below While Stock Lasts</p>
                    </div>

                    <div className={styles.layer_2_object}>
                        <Link to='https://b3bf3l4ai4smlejfzevqr3uyb4.hop.clickbank.net' target='_blank'><img src='https://d2h8hiv6zzm73v.cloudfront.net/legacy/vendors/jointgen/jg11724789337568.png'/></Link>
                        <h2>Joint Genesis</h2>
                        <p>Joint Genesis™ is a brand-new, doctor-formulated joint health supplement born out of Ivy League research, and backed by real-world results.</p>
                    </div>

                    <div className={styles.layer_2_object}>
                        <Link to='https://8d10an28n8qhfkofxgwd-b4v5s.hop.clickbank.net' target='_blank'><img src='https://d2h8hiv6zzm73v.cloudfront.net/legacy/vendors/provive/6vive-3001747944566183.png'/></Link>
                        <h2>ProstaVive - Powerhouse Prostate Offer</h2>
                        <p>The Most Potent,Fast-Acting Formula for Prostate Health & Strong Flow</p>
                    </div>
                </div>
            </div>

        </div>

        <div className={styles.foot}>
            <h1>Thank you very much for liking Our Products.</h1>
            <h1>Looking forward to work with you on a Professional Scale and Improve Both of Our Prospects Together.</h1>
            <h1>Check Our About Page for More Products</h1>
        </div>

        
      
    </>
    
  );

}

export default Home