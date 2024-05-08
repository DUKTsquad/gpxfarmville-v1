import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset-1.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Stake DezNFTz
                </span>
                <br />
                Earn Daily Rewards!
              </h1>
              <p className={styles.heroSubtitle}>
                Buy NFTs with -
                <Link
                  className={styles.link}
                  href="https://app.uniswap.org/explore/tokens/base/0x79aac45c18a20a99a27dc4107e30d89331252d0c"
                >
                  DezNutZ
                </Link>{" "}
                to stake your NFTs & Earn.
                Stake DezNFTz, to put the PeaNutZ People to work for you. Earn <i>rewards</i> <b>daily</b>!
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/stake">
                  Stake | Unstake
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://app.uniswap.org/explore/tokens/base/0x79aac45c18a20a99a27dc4107e30d89331252d0c"
                >
                  Buy DezNutZ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
