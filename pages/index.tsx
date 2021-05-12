import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Layout from "../components/Layout";

import Button from '../components/button';
import dynamic from 'next/dynamic';
import AboutMe from '../components/AboutMe';

import styles from '../styles/Home.module.scss';



const Page = (props) => {
  return (
    <Layout menu={props.menu}>
      {/* <SliceZone {...props} resolver={resolver} /> */}
      <section className={styles.HeroContainer}>
        <header className={styles.HeaderContainer}>
          <div>
            <small>My name is</small>
            <div className={styles.TitleContainer}>
              <h1>Alan Siqueira</h1>
              <h1 className={styles.secondTitle}>fullstack developer</h1>
            </div>
            <p>Suspendisse vitae fermentum semper amet, felis est ornare gravida dolor. Ipsum vulputate mattis sapien pellentesque amet at est. Vel sem id blandit dictum et, mauris facilisis facilisis auctor. Elit pharetra, in magna orci, in. Tortor.</p>
            <Button href="https://www.linkedin.com/in/alanpsiqueira/">
              Contact me on LinkedIn 
            </Button>
          </div>
        </header>
      </section>

      <AboutMe />
    </Layout>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => "home",
});

export default Page;