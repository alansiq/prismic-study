import Link from 'next/link';
import React, { useEffect, useState, FunctionComponent } from 'react';
import styles from './WorkSection.module.scss';
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

const workList = [
    {
        caseTitle: 'Case do Portfolio 1',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Projeto topzera numero 2',
        caseDescription: 'Dolor nisi duis elit est culpa occaecat pariatur duis. Dolor anim veniam voluptate ex sit. Proident proident voluptate enim ex quis consectetur ipsum anim elit mollit do. Adipisicing anim ipsum ea ipsum est. Fugiat incididunt dolor ipsum incididunt minim enim. Commodo magna cupidatat ullamco minim reprehenderit mollit ea aliquip quis culpa.',
        caseLink: '/redgarden.jpg',
    },
    {
        caseTitle: 'Esse é um terceiro projeto',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Case do Portfolio 4',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Case do Portfolio 5',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Projeto topzera numero 6',
        caseDescription: 'Dolor nisi duis elit est culpa occaecat pariatur duis. Dolor anim veniam voluptate ex sit. Proident proident voluptate enim ex quis consectetur ipsum anim elit mollit do. Adipisicing anim ipsum ea ipsum est. Fugiat incididunt dolor ipsum incididunt minim enim. Commodo magna cupidatat ullamco minim reprehenderit mollit ea aliquip quis culpa.',
        caseLink: '/redgarden.jpg',
    },
    {
        caseTitle: 'Projeto topzera numero 7',
        caseDescription: 'Dolor nisi duis elit est culpa occaecat pariatur duis. Dolor anim veniam voluptate ex sit. Proident proident voluptate enim ex quis consectetur ipsum anim elit mollit do. Adipisicing anim ipsum ea ipsum est. Fugiat incididunt dolor ipsum incididunt minim enim. Commodo magna cupidatat ullamco minim reprehenderit mollit ea aliquip quis culpa.',
        caseLink: '/redgarden.jpg',
    },

];


const RenderWorkCases: React.FC = () => {

    const windowSize = useWindowSize();

    function updateCards() {
        if (windowSize.width < 1366 && windowSize.width > 940) { 
            setItemsPerPage(2);
            setCurrentPage(1);


        } else;
        if (windowSize.width < 940) { 
            setItemsPerPage(1);
            setCurrentPage(1);


        } else 
        if (windowSize.width > 1366) {
            setItemsPerPage(3);
            setCurrentPage(1);
        }
    }

    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItemList, setCurrentItemList] = useState([]);
    const objectArray = workList;
    const lastPage = Math.ceil(objectArray.length / itemsPerPage);

     const lastItemIndex = currentPage * itemsPerPage;
     const firstItemIndex = lastItemIndex - itemsPerPage;

    
     


    function nextPage() {
        if (currentPage == lastPage || currentPage > lastPage) {
            setCurrentPage(1);
        } else {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
        }
    }

    function previousPage() {
        if (currentPage == 1 || currentPage < 1) {
            const previousPage = lastPage;
            setCurrentPage(previousPage);
        } else {
            const previousPage = currentPage - 1;
            setCurrentPage(previousPage);
        }
    }

    const RenderCasesPagination = () => {

        return (
            <div className={styles.CasesPagination}>
                <button onClick={() => previousPage()}><VscArrowLeft /></button><button onClick={() => nextPage()}><VscArrowRight /></button>
            </div>
        )
    }

    useEffect(() => {

        setCurrentItemList(objectArray.slice(firstItemIndex, lastItemIndex));

    }, [currentPage])

    useEffect(() => {
        if (windowSize.width < 940) {
            setItemsPerPage(1);
        }

        if (windowSize.width > 940) {
            setItemsPerPage(3);
        }
        if (windowSize.width < 940) {
            setItemsPerPage(1);
        }
        updateCards();
    }, [])

    useEffect(() => {
        updateCards();
        setCurrentItemList(objectArray.slice(firstItemIndex, lastItemIndex));

    }, [windowSize])

    return (
        <>
            
            <div className={styles.CardsContainer}>
                {
                    currentItemList.map(work =>
                    (
                        <div key={work.caseTitle} className={styles.WorkCard}>
                            <h1>{work.caseTitle}</h1>
                            <p>{work.caseTitle}</p>
                            <Link href={work.caseLink}>{work.caseTitle}</Link>
                            <img src={work.caseLink} />
                        </div>
                    ))
                }
                {currentItemList.length % itemsPerPage != 0 ? <div className={styles.WorkCardPlaceholder}>
                    <p>More to come soon...</p>
                </div> : <></>}

            </div>
            {lastPage > 1 ? <RenderCasesPagination /> : <></>}

            
        </>
    )

}

const WorkSection: FunctionComponent = () => {
    
    const [currentWorkNav, setCurrentWorkNav] = useState("work");


    return (
        <>
            <section className={styles.WorkSection}>

                <div className={styles.WorkSectionHeading}>
                    <h1>Work</h1>
                </div>

                <div className={styles.WorkContainer}>

                    <div className={styles.NavigationContainer}>
                        <nav>
                            <ul className={styles.WorkUl}>
                                <li className={styles.WorkLi}>
                                    <button onClick={() => setCurrentWorkNav("work")} className={currentWorkNav == "work" ? styles.workNavActive : ""}>Cases</button>
                                </li>
                                <li className={styles.WorkLi}>
                                    <button onClick={() => setCurrentWorkNav("articles")} className={currentWorkNav == "articles" ? styles.workNavActive : ""}>Articles</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.ContentContainer}>
                        
                        <div className={currentWorkNav == "work" ? styles.shown : styles.hidden}>
                           <RenderWorkCases />
                        </div>
                        <div className={currentWorkNav == "work" ? styles.hidden : styles.shown}>
                           <p>Articles here</p>
                        </div>
                        
                        {/* {
                            currentWorkNav == "work" ? <RenderWorkCases /> : <p>Articles in here</p>
                        } */}

                    </div>
                </div>

            </section>
        </>
    )
}

export default WorkSection;



// ** USE WINDOW SIZE ** // 

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }