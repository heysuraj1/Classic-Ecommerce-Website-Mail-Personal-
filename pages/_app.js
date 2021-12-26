import Link from 'next/link'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Layout from "../Components/Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  
  return <>
  <Head>
  {/* <meta charset="utf-8" /> */}
  {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon"/>
  <title>Mark 3</title>
  <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
  <link href="../css/font-awesome.min.css" rel="stylesheet" />
  <link href="../css/style.css" rel="stylesheet" />
  <link href="../css/responsive.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
 

    
  </Head>



  <Layout>
  <ToastContainer />

  <Component {...pageProps} />
  </Layout>
  <Script src="js/jquery-3.4.1.min.js"/>
  <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"/>
  
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"/>
  {/* <Script src="js/bootstrap.js"/> */}

  
  {/* <Script src="js/custom.js"/> */}
  {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"/> */}

  
  </>
  
  
  
}

export default MyApp
