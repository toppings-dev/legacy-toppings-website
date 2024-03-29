import React, { useEffect, useState } from 'react';
import {
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { useHistory, Link } from 'react-router-dom';

import BlueArrowRightIcon from 'images/icons/BlueArrowRight.png';

import PhoneImage from 'images/vectors/Phone.png';
import BackgroundBoxes from 'images/vectors/BackgroundBoxes.png';

import S1i1 from 'images/vectors/S1i1.png';
import S1i2 from 'images/vectors/S1i2.png';
import S1i3 from 'images/vectors/S1i3.png';
import S1i4 from 'images/vectors/S1i4.png';
import S2i1 from 'images/vectors/S2i1.png';
import S2i2 from 'images/vectors/S2i2.png';
import S2i3 from 'images/vectors/S2i3.png';

import fatass from 'images/fatass.png';
import colin from 'images/colin.png';
import shay from 'images/shay.png';
import austin from 'images/austin.png';
import quinn from 'images/quinn.png';
import peter from 'images/peter.png';
import seth from 'images/seth.png';

import InnovationLabsImage from 'images/awards/InnovationLabsImage.png';
import CapitalPartnersImage from 'images/awards/CapitalPartnersImage.png';
import ProdImage from 'images/awards/ProdImage.png';

import JefesCircle from 'images/restaurants/JefesCircle.png';
import HongKongCircle from 'images/restaurants/HongKongCircle.png';
import PlayaCircle from 'images/restaurants/PlayaCircle.png';

const toppingsBlue = '#0082FF';
const grayBlue = '#3B74B2';
const Careers = () => {
  let history = useHistory();

  // console.log(window.location.href);
  // isMobile detecting >
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  const openUrl = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 500,
      // delay: 100,
      smooth: true,
      // containerId: 'ContainerElementID',
      offset: -100, // Scrolls to element + 50 pixels down the page
    });
  };

  const pfpSize = isMobile ? {
    width: 80,
    height: 80,
  } : {
    width: 140,
    height: 140,
  };

  return (
    <div>
      <div style={styles.root}>
        <div style={{ ...styles.gradientBackground }}>
          <p style={{ 
            ...styles.title,
            marginTop: isMobile ? 30 : 160,
            marginBottom: isMobile ? 30 : 60,
            fontSize: isMobile ? 60 : 80,
            paddingLeft: isMobile ? 80 : 0,
          }}>
            Join Toppings
          </p>
        </div>
        {/* 1 */}
        <div style={{ marginTop: 40, display: 'flex', width: '100%', paddingLeft: 80, paddingRight: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {!isMobile && (<img src="https://toppingsapp.com/static/media/S1i3.c76bc738.png
" alt="Haha ur mom" role="presentation" aria-hidden="true" style={{ width: '45%' }} />)}
          <div style={{ width: 80 }} />
          <div style={{ flexDirection: 'column', width: isMobile ? '100%' : '40%' }}>
            <h2 style={styles.subtitle1}>
              Revolutionize Food<br />Delivery
            </h2>
            <div style={{ height: 30 }} />
            <p style={styles.p}>Food delivery is expensive, hurts local businesses, and is unsustainable.</p>

            <p style={{ ...styles.p, fontFamily: 'Karla-Bold' }}>The future of food delivery is social and free.</p>

            <p style={styles.p}>Toppings is making a zero-fee, restaurant-friendly, and sustainably profitable delivery system.</p>

            <p style={styles.p}>We have an all-star founding team from Harvard and MIT, recently raised at an 8-figure valuation, are backed by some of the top firms in our industry, and are looking for foundational members (that’s <span style={{ fontFamily: 'Karla-Bold' }}>you</span>) to join the founding team.</p>

            <p style={styles.p}>Be one of the first to build the future of delivery.</p>

            <p style={styles.p}>Apply to one of the roles below!</p>
          </div>
        </div>
        {/* 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 80, paddingRight: 80, width: '100%' }}>
          <h2 style={styles.subtitle1}>
            Come reimagine with us
          </h2>
          <div style={styles.line} />
          <div style={isMobile ? styles.jobRowMobile : styles.jobRow}>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Role
              </p>
              <a target='_blank' href={'https://toppings.notion.site/Toppings-Ambassadors-1c65df4d01d843738d6e93e486350261'} style={{ ...styles.jobLarge, ...styles.link }}>
                Ambassador
              </a>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Sub-Team
              </p>
              <p style={styles.jobLarge}>
                Marketing
              </p>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Location
              </p>
              <p style={styles.jobLarge}>
                Boston/Cambridge
              </p>
            </div>
          </div>
          <div style={styles.line} />
          <div style={isMobile ? styles.jobRowMobile : styles.jobRow}>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Role
              </p>
              <a target='_blank' href={'https://toppings.notion.site/Toppings-Lead-Ambassador-8aaaa72c3391468693f6853cae65bead'} style={{ ...styles.jobLarge, ...styles.link }}>
                Lead Ambassador
              </a>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Sub-Team
              </p>
              <p style={styles.jobLarge}>
                Marketing/Ops
              </p>
            </div>
            <div style={styles.jobColumn}>
              <p style={styles.jobSmall}>
                Location
              </p>
              <p style={styles.jobLarge}>
                Boston/Cambridge
              </p>
            </div>
          </div>
          <div style={styles.line} />
        </div>

        {/* 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 80, paddingRight: 80, width: '100%', marginTop: 60 }}>
          <h2 style={styles.subtitle1}>
            Got questions?
          </h2>

          <p style={{ ...styles.jobLarge, marginTop: 15 }}>Give our founder a call or text at +16787101220</p>
        </div>
        {/* bottom padding */}
        <div style={{ height: 200 }} />
      </div>
    </div>
  );
};

const styles = {
  h6: {
    fontFamily: 'Karla-Bold',
    // fontWeight: '700',
    fontSize: 20,
  },
  body: {
    fontFamily: 'Karla-Medium',
    fontWeight: '500',
    fontSize: 16,
  },
  subtitle1: {
    fontFamily: 'Rubik-SemiBold',
    // fontWeight: '600',
    fontSize: 36,
  },
  subtitle2: {
    fontFamily: 'Karla-Bold',
    // fontWeight: '700',
    fontSize: 24,
  },
  title: {
    fontFamily: 'Rubik-ExtraBold',
    // fontWeight: '800',
    color: '#0082FF',
    fontSize: 80,
  },
  gradientBackground: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #b7e7ff 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '776px',
    width: '100%',
    // paddingBottom: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  headerText: {
    fontFamily: 'Karla-Medium',
    fontWeight: '500',
    fontSize: 18,
    color: '#3B74B2',
    marginRight: '70px',
  },
  stickyHeader: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '68px',
    position: 'sticky',
    top: 0,
    boxShadow: '0px 8px 30px #CDEFFF',
    display: 'flex',
    paddingLeft: '53px',
    zIndex: 2,
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  p: {
    fontFamily: 'Karla-Regular',
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#777777',
    marginTop: 20,
    marginBottom: 20,
  },
  jobRow: {
    display: 'flex',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobRowMobile: {
    display: 'flex',
    height: 275,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  jobColumn: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  jobSmall: {
    fontFamily: 'Karla-Light',
    fontSize: 16,
  },
  jobLarge: {
    fontFamily: 'Karla-Medium',
    fontSize: 20,
  },
  link: {
    color: '#0082FF',
    
  }
};

export default Careers;
