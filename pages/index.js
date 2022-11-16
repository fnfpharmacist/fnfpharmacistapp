import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Rating from '../components/Rating'
import Slider from "react-slick";
import { BsCart2, BsEnvelope, BsGift, BsStarFill } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import { RiUser6Fill, RiShoppingBasketFill } from 'react-icons/ri';
import { TfiAngleDown } from 'react-icons/tfi';

import bestSellingProduct from '../data/bestSellingProduct'
import bestSales from '../data/bestSales'
import latestProducts from '../data/latestProducts'
import topRatedProducts from '../data/topRatedProducts'
import psychedelics from '../data/psychedelics'
import kush from '../data/kush'
import pills from '../data/pills'
import shopByCategory from '../data/shopByCategory'
import productShop from '../data/productShop'
import productCategory from '../data/productCategory'
import Footer from '../components/footer';

export default function Home() {
  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    accessibility: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
  }
  const settings = {
    ...defaultSettings
  };
  const settingsb = {
    ...defaultSettings
  };

  return (
    <div className='font-montserrat'>
      <Head>
        <title>FNF PHARMACY</title>
      </Head>

      <Link href="#contact" className="fixed top-[50%] right-0 translate-x-[45px] translate-y-[-50%] z-50 -rotate-90 uppercase bg-[#00A560] py-1 px-4 text-white font-bold text-xs rounded-t">contact us</Link>

      <Header />

      <section className="hero relative min-h-[600px] flex flex-col justify-center items-start md:items-center text-white"
        style={{ backgroundColor: 'rgb(99, 191, 11)', backgroundImage: "linear-gradient(90deg, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url(images/hero-bg.jpeg)" }}>
        <h1 className='text-4xl lg:text-5xl md:text-center px-[5%] md:px-[15%] lg:px-0 font-semibold lg:font-bold font-montserratAlternates'>Welcome To FnF Pharmacy</h1>
        <p className="text-[1.25rem] px-[5%] md:px-[15%] py-5 md:text-center">Whether You Have To Buy Kush (Weed) Online For Medical Purposes Or For Recreation; You Will Get Genuine And Original Marijuana Products From Us, Best Kush Store!</p>

        <div className="pt-8 px-[5%] flex flex-col md:flex-row items-center justify-center gap-4 w-full">

          <div className="flex items-center gap-2 bg-[#06A710] hover:bg-[#037a0a] transition-all rounded-md cursor-pointer w-full md:w-[262px] lg:w-[296px] py-2 justify-center font-bold">
            <BsCart2 />
            <span>Browse Quality Meds</span>
          </div>

          <div className="flex items-center gap-2 bg-[#B20000] hover:bg-[#790101] transition-all rounded-md cursor-pointer w-full md:w-[262px] lg:w-[296px] py-2 justify-center font-bold">
            <RiUser6Fill />
            <span>About Us</span>
          </div>

        </div>

        <div className="absolute bottom-8 left-[50%] translate-x-[-50%]">
          <a href="#m">
            <TfiAngleDown size={30} />
          </a>
        </div>
      </section>

      <main id="m" className="pt-8">
        <section id="store" className="px-[1%] lg:px-[15%] gap-5 flex-wrap md:flex-nowrap flex justify-center md:justify-between font-montserratAlternates text-white">
          <div className="w-full mx-[1%] md:w-[330px] h-[200px] md:h-[160px] py-1 px-2 grid place-items-center bg-[length:100%_220px] hover:bg-[length:110%_250px] bg-center bg-no-repeat"
            style={{ backgroundColor: 'rgb(99, 191, 11)', backgroundImage: "linear-gradient(90deg, rgba(0,0,0, 0.2), rgba(0,0,0, 0.2)), url(images/img15b.jpg)", transition: 'all .7s' }}></div>

          <div className="w-full mx-[1%] md:w-[330px] h-[160px] py-1 px-2 grid place-items-center bg-[length:100%_220px] hover:bg-[length:110%_250px] bg-center bg-no-repeat"
            style={{ backgroundColor: 'rgb(99, 191, 11)', backgroundImage: "linear-gradient(90deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)), url(images/img17.jpeg)", transition: 'all .7s' }}>
            <h1 className='text-[25px] font-semibold'>Weed (Kush)</h1>
            <p className="text-center text-[18px]">Best QUALITY Weed Leaves Available. Delivery In Massive Quantity At Best Prices</p>
          </div>

          <div className="w-full mx-[1%] md:w-[330px] h-[160px] py-1 px-2 grid place-items-center bg-[length:100%_220px] hover:bg-[length:110%_250px] bg-center bg-no-repeat"
            style={{ backgroundColor: 'rgb(99, 191, 11)', backgroundImage: "linear-gradient(90deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)), url(images/img16.webp)", transition: 'all .7s' }}>
            <h1 className='text-[25px] font-semibold'>MEDS(DRUGS)</h1>
            <p className="text-center text-[18px]">Get The Best Pills From Us. We Guarantee Fast Supply And Delivery To Your Location.</p>
          </div>
        </section>

        <section className="px-[1%] lg:px-[15%]">
          <fieldset className="border-t border-6 border-[#272625]/30 text-[#0578A1] mt-16 mb-12 font-semibold text-sm md:text-xl">
            <legend className="mx-auto px-4 flex items-center gap-3 font-montserratAlternates">
              <BsGift /> BEST SELLING PRODUCTS</legend>
          </fieldset>

          <div className="overflow-hidden">
            <Slider {...settings}>
              {bestSellingProduct.map(product => {
                return (
                  <ProductCard key={product?.id} product={product} />
                )
              })}
            </Slider>
          </div>
        </section>

        <section className="px-[1%] lg:px-[15%]">
          <fieldset className="border-t border-6 border-[#272625]/30 text-[#0578A1] mt-16 mb-12 font-semibold text-sm md:text-xl">
            <legend className="mx-auto px-4 flex items-center gap-3 font-montserratAlternates">
              <GiShoppingBag /> SHOP BY CATOGORIES</legend>
          </fieldset>
          
          <div className="overflow-hidden">
            <Slider {...settingsb}>
              {shopByCategory.map(product => {
                return (
                  <CircleProductCard key={product?.id} product={product} />
                )
              })}
            </Slider>
          </div>
        </section>

        <section id="psychedelics" className="px-[6%] lg:px-[15%]">
          <fieldset className="border-t border-3 border-[#272625]/30 text-[#0578A1] mt-16 mb-12 font-semibold text-sm md:text-xl">
            <legend className="">
              <div className="py-2 px-4 flex items-center gap-3 font-montserratAlternates border border-[#0578A1]"><BsStarFill /> PSYCHEDELICS</div>
            </legend>
          </fieldset>

          <div className="flex lg:justify-between flex-wrap overflow-hidden md:gap-5">
            {psychedelics.map(product => {
              return (
                <ProductCardRep key={product?.id} product={product} />
              )
            })}
          </div>
        </section>

        <section id="weed" className="px-[6%] lg:px-[15%]">
          <fieldset className="border-t border-3 border-[#272625]/30 text-[#0578A1] mt-16 mb-12 font-semibold text-sm md:text-xl">
            <legend className="">
              <div className="py-2 px-4 flex items-center gap-3 font-montserratAlternates border border-[#0578A1]"><BsStarFill /> KUSH (WEED*)</div>
            </legend>
          </fieldset>

          <div className="flex justify-between flex-wrap overflow-hidden md:gap-5">
            {kush.map(product => {
              return (
                <ProductCardRep key={product?.id} product={product} />
              )
            })}
          </div>
        </section>

        <section id="pills" className="px-[6%] lg:px-[15%]">
          <fieldset className="border-t border-3 border-[#272625]/30 text-[#0578A1] mt-16 mb-12 font-semibold text-sm md:text-xl">
            <legend className="">
              <div className="py-2 px-4 flex items-center gap-3 font-montserratAlternates border border-[#0578A1]"><BsStarFill />{'PILLS & DRUGS'}</div>
            </legend>
          </fieldset>

          <div className="flex justify-between flex-wrap overflow-hidden md:gap-5">
            {pills.map(product => {
              return (
                <ProductCardRep key={product?.id} product={product} />
              )
            })}
          </div>
        </section>

        <section className="h-[500px] grid place-items-center my-20 bg-no-repeat bg-cover bg-center bg-[#065eac]" style={{ backgroundColor: 'rgb(99, 191, 11)', backgroundImage: "linear-gradient(90deg, rgba(0,0,0, 0.8), rgba(0,0,0, 0.8)), url(images/My-Favorite-Strains-Sour-Diesel-Weedist-640x420-1-320x320.webp)" }}>
          <div className="text-center px-[5%] md:px-[23%]">
            <h1 className="text-xl text-[#fff] font-montserratAlternates font-semibold mb-5">
              ARE YOUR PRODUCTS LICENCED?
            </h1>
            <p className="text-xl font-montserrat text-[#f1f1f1]">
              {'The Work Of This Online Psychedelics & Meds Store Is Licensed – The Store Has A License For Pharmaceutical Activities And Offers To Buy Medicines Only From Trusted Suppliers. All The Drugs Have The Relevant Documents, Deliveries Are Made Directly From The Manufacturers;'}
            </p>
          </div>
        </section>

        <section id="bestSales" className="px-[1%] md:px-[6%] lg:px-[15%]">
          <fieldset className="border-t border-6 border-[#272625]/30 text-[#0578A1] mt-16 mb-12 font-semibold text-sm md:text-xl">
            <legend className="mx-auto px-4 flex items-center gap-3 font-montserratAlternates">
              <RiShoppingBasketFill /> BEST SALES THIS WEEK</legend>
          </fieldset>

          <div className="overflow-hidden">
            <Slider {...settings}>
              {bestSales.map(product => {
                return (
                  <ProductCard key={product?.id} product={product} />
                )
              })}
            </Slider>
          </div>
        </section>

        <section id='about' className="px-[6%] lg:px-[15%] my-16">
          <div className="flex flex-col items-center mb-10">
            <h1 className="font-montserratAlternates text-[33.28px] font-semibold text-[#0970b0]">Order Weed From Cali Dispensary Store Online</h1>
            <div className="w-[70px] h-[3px] mt-3 bg-[#0970b0]"></div>
          </div>

          <div className="text-[16px] font-montserrat">
            <p className="mb-5">
              Our Online Dispensary Has One Of The Greatest Product Varieties On The Market. That Is What Makes Us Stand Out From Our Competitors. Whether You’re Looking For Some Potent Flowers To Get High And Enjoy Deep Relaxation Or You Need A Medical Solution To Beat Your Sleep Problems Or Ease Painful Sensations, Here At Best Kush Store, We Have Got You Covered With Everything.
            </p>
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="">
                <p className="mb-5">
                  Before Taking Your Pick, You Should Know That Marijuana Comes In Three Distinct Varieties:
                </p>
                <ul className='mb-5'>
                  <li className="font-semibold text-[#0970b0]">Indica And Sativa</li>
                </ul>
                <p className="mb-5">
                  Consumption Of Sativa Energises And Heightens The Senses Of Your Body, While The Indica Is Known For Providing Relaxation To The Mind And The Body And Reducing Anxiety Levels.
                </p>
                <ul className='mb-5'>
                  <li className="font-semibold text-[#0970b0]">Hybrid</li>
                </ul>
                <p className="mb-5">
                  The Hybrid Cannabis Is A Mixture Of Sativa And Indica Sorts. It Helps To Relax And, At The Same Time, Provides You With Euphoric Feelings.
                </p>
                <ul className='mb-5'>
                  <li className="font-semibold text-[#0970b0]">CBD</li>
                </ul>
              </div>
              <div className="ml-5">
                <Image src="/images/img10.jpeg" alt="" height={350} width={400} style={{ width: 900, height: '100%' }} />
              </div>
            </div>
            <p className="mb-5 mt-2">
              <strong className="">CBD</strong>, Or Commonly Known As Cannabidiol, Is Used To Soothe Pain And Treat Mental Disorders Like Anxiety, Depression, And PTSD. There Are Two Major Components Of Weed – THC And CBD. Tetrahydrocannabinol Affects The Brain, Providing Euphoria, While CBD Lowers The Pain Levels And Does Not Induce The Mind-Altering Effects.
            </p>
            <p className="mb-5">
              We Recommend You To Consult Your Doctor Before Buying Marijuana Online For Medical Purposes As The Right Dosage And Sort Of Cannabis Might Become Key For Treating A Specific Health Condition. You’re Also Welcome To Contact Our Specialists To Get A Detailed Consultation.
            </p>
          </div>
        </section>

        <section id="contact" className="px-[4%] lg:px-[15%] my-16 flex flex-col lg:flex-row font-montserrat">

          <div className="lg:w-1/2 border shadow-md rounded-md rounded-r-none py-8 px-10 flex gap-5">
            <div className=""><BsGift size={50} /></div>
            <div className="w-full">
              <h1 className="text-xl font-montserratAlternates text-[#272625] mb-[10px] font-bold">Have A Question?</h1>
              <p className="text-[#171616] text-base">We Are Always Here To Help You Out..</p>
              <Link href='mailto:fnfpharmacist@gmail.com' className="w-full py-2 font-bold flex justify-center items-center gap-3 mt-16 rounded-[30px] bg-[#065EAC] text-white text-[12.8px]">
                <BsEnvelope size={15} className="hidden md:block" />
                <div className="flex flex-col md:flex-row md:gap-2 items-center">
                  <div>Send an email</div>
                  <div className='text-[.5rem] md:text-[.8rem]'>(fnfpharmacist@gmail.com)</div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 border shadow-md rounded-md rounded-l-none py-8 px-10 flex gap-5">
            <div className=""><BsGift size={50} /></div>
            <div className="w-full">
              <h1 className="text-xl font-montserratAlternates text-[#272625] mb-[10px] font-bold">Have A Question?</h1>
              <p className="text-[#171616] text-base">We Are Always Here To Help You Out..</p>
              <Link href='tel:+1(507) 668-0846' className="w-full py-2 font-bold flex justify-center items-center gap-3 mt-16 rounded-[30px] bg-[#065EAC] text-white text-[12.8px]">
                Call +1(507) 668-0846
              </Link>
            </div>
          </div>

        </section>

        <section className="px-[6%] lg:px-[15%] py-9 font-montserrat bg-[#003CA5] text-[#f1f1f1] text-[16px] flex flex-col lg:flex-row lg:gap-10">
          <div className="w-full">
            <div className="mb-6">
              <div className="uppercase font-bold">SHOP PRODUCTS</div>
              <div className="h-1 w-[35px] mt-3 bg-white/30"></div>
            </div>

            <div className="flex flex-col gap-3">
              {productShop.map(product => {
                return (
                  <ProductShopCard key={product.id} product={product} />
                )
              })}
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6">
              <div className="uppercase font-bold">LATEST</div>
              <div className="h-1 w-[35px] mt-3 bg-white/30"></div>
            </div>

            <div className="flex flex-col gap-3">
              {latestProducts.map(product => {
                return (
                  <ProductShopCard key={product.id} product={product} />
                )
              })}
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6">
              <div className="uppercase font-bold">TOP RATED PRODUCTS</div>
              <div className="h-1 w-[35px] mt-3 bg-white/30"></div>
            </div>

            <div className="flex flex-col gap-3">
              {topRatedProducts.map(product => {
                return (
                  <ProductShopCard key={product.id} product={product} />
                )
              })}
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6">
              <div className="uppercase font-bold">PRODUCT CATEGORIES</div>
              <div className="h-1 w-[35px] mt-3 bg-white/30"></div>
            </div>

            {productCategory.map(category => {
              return (
                <ProductCategoryCard key={category.id} category={category} />
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const ProductCategoryCard = ({ category }) => {
  return (<>
    <Link href="/error" as={`/${category.title}`} className="">
      <div className="flex items-center justify-between gap-5 pb-2 border-b border-white/10">
        <p className="">{category.title}</p>
        <div className="text-white/50 text-xs">({category.count})</div>
      </div>
    </Link>
  </>)
}

const ProductShopCard = ({ product }) => {
  return (<>
    <Link href="/error" as={`/${product.title}`} className="flex gap-5 border-b border-white/5 pb-1">
      <Image src={product.imageUrl} width={60} height={60} alt="" style={{ height: 60 }} />
      <div className="">
        <p className="">{product.title}</p>
        <div className="star"></div>
        <div className="text-white font-bold">£{product.price}</div>
      </div>
    </Link>
  </>)
}

const ProductCard = ({ product }) => {

  return (<>
    <div className="lg:w-[250px] font-montserrat border hover:shadow-md">
      <div className="h-[250px] relative">
        <Image src={product.imageUrl} alt="" width={400} height={1} style={{ height: '100%' }} />
        {product.badge && <div className="absolute top-7 -left-2 w-[50px] h-[50px] rounded-full overflow-hidden bg-[#065EAC] text-white font-bold grid place-items-center text-[10px] uppercase">
          {product.badge}
        </div>}
      </div>
      <div className="flex flex-col h-[170px] justify-between text-center pt-2 pb-4 px-[1%]">
        <div className="">
          <p className="text-[#171616] text-[10.2px] md:text-[11px] ">{product?.category}</p>
          {/* <Link > */}
          <Link href="/error" as={`/${product.category}`} className="text-[#065EAC] text-[13.6px] md:text-[14px]">
            <p style={{ lineHeight: '1.3' }}>{product?.description}</p>
          </Link>
          {/* </Link> */}
        </div>
        <div className="">
          {product?.star >= 1 && <div className="">
            <Rating
              initialValue={product.star}
              precision={0.5}
            />
          </div>}
          <div className="text-[#111] text-[13.6px] md:text-[14px] font-bold ">£{product?.price}</div>
          <div className='my-1'>
            <Link href="/error" as={`/${product.category}`} className="uppercase border-2 font-bold py-1 px-[13.8px] md:px-5 border-[#446084] text-[#446084] hover:bg-[#065EAC] hover:text-white text-[10.88px] md:text-[.8rem]">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  </>)
}

const ProductCardRep = ({ product }) => {

  return (<>
    <div className="w-1/2 md:w-[31%] lg:w-[250px] font-montserrat border hover:shadow-md">
      <div className="h-[150px] md:h-[200px] lg:h-[250px] relative">
        <Image src={product.imageUrl} alt="" width={400} height={1} style={{ height: '100%' }} />
        {product.badge && <div className="absolute top-7 -left-2 w-[50px] h-[50px] rounded-full overflow-hidden bg-[#065EAC] text-white font-bold grid place-items-center text-[10px] uppercase">
          {product.badge}
        </div>}
      </div>
      <div className="flex flex-col h-[170px] justify-between text-center pt-2 pb-4 px-[1%]">
        <div className="">
          <p className="text-[#171616] text-[10.2px] md:text-[11px] ">{product?.category}</p>
          {/* <Link > */}
          <Link href="/error" as={`/${product.category}`} className="text-[#065EAC] text-[13.6px] md:text-[14px]">
            <p style={{ lineHeight: '1.3' }}>{product?.description}</p>
          </Link>
          {/* </Link> */}
        </div>
        <div className="">
          {product?.star >= 1 && <div className="">
            <Rating
              initialValue={product.star}
              precision={0.5}
            />
          </div>}
          <div className="text-[#111] text-[13.6px] md:text-[14px] font-bold ">£{product?.price}</div>
          <div className='my-1'>
            <Link href="/error" as={`/${product.category}`} className="uppercase border-2 font-bold py-1 px-[13.8px] md:px-5 border-[#446084] text-[#446084] hover:bg-[#065EAC] hover:text-white text-[10.88px] md:text-[.8rem]">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  </>)
}

const CircleProductCard = ({ product }) => {
  return (<>
    <div className="group">
      <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden relative">
        <Image src={product.imageUrl} alt="" width={400} height={1} style={{ height: '100%' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <Link href="/error" as={`/${product.category}`} className="absolute z-50 bottom-[50px] text-center w-full font-montserratAlternates uppercase">
          <div className="text-[.8rem] md:text-[1.3rem] text-white">{product.category}</div>
          <div className="text-[.8rem] h-1 group-hover:h-full overflow-hidden transition-all duration-700 text-white/75">{product.count} PRODUCTS</div>
        </Link>
      </div>
    </div>
  </>)
}