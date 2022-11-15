import React from 'react'
import { GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr';
import { BsEnvelope, BsCart2 } from 'react-icons/bs';
import { CiPill } from 'react-icons/ci';
import { GiBowlingPin, GiPalmTree } from 'react-icons/gi';
import { RiUser6Fill } from 'react-icons/ri';
import { FaStoreAlt, FaBars, FaStarHalfAlt, FaRegEye } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="font-['Montserrat, sans-seri'] text-white">
      <div className="">
        <div className="top-header flex justify-center lg:justify-between px-[1%] lg:px-[15%] py-[.45rem] bg-[#065eac]">
          <div className="font-[700] text-[.8em] leading-6 tracking-wider">
            <span className="uppercase">FREE 🚛 SHIPPING FOR ORDERS &gt; $350</span>
          </div>

          <ul className="hidden lg:flex items-center text-[.8em] text-white/80 gap-5">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-248 menu-item-design-default">
              <span className="cursor-pointer">About</span>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-249 menu-item-design-default">
              <span className="cursor-pointer">Blog</span>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262 menu-item-design-default">
              <span className="cursor-pointer">FAQ</span>
            </li>

            <li className="text-white">
              <div className="flex" style={{ gap: 10 }}>
                <span className='cursor-pointer' data-label="Facebook" title="Follow on Facebook" aria-label="Follow on Facebook">
                  <GrFacebookOption />
                </span>
                <span className='cursor-pointer' aria-label="Follow on Instagram" title="Follow on Instagram">
                  <GrInstagram />
                </span>
                <span className='cursor-pointer' data-label="Twitter" title="Follow on Twitter" aria-label="Follow on Twitter">
                  <GrTwitter />
                </span>
                <Link href="mailto:fnfpharmacist@gmail.com" data-label="E-mail" rel="nofollow" title="Send us an email">
                  <BsEnvelope />
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="header-main py-4 bg-white flex justify-between px-[5%] lg:px-[15%] items-center gap-10">
          <div className="logo">
            <Link href="/" rel="home">
              {// eslint-disable-next-line @next/next/no-img-element
                <img width="166" height="51" src="images/logo2.png" alt='' />
              }
            </Link>
          </div>

          <div className="flex items-center lg:hidden gap-4 ml-10">
            <div className="flex items-center justify-center gap-3 bg-[#1E73BE] text-white font-[600] text-[.8rem] w-9 h-9 rounded-full">
              <BsCart2 color='white' size={17} />
            </div>

            <div className="min-h-full border border-gray-200"></div>

            <FaBars color='#1E73BE' size={20} />
          </div>

          <form role="search" method="get" className="hidden lg:flex items-center gap-3 text-black" action="" onSubmit={(e) => {
            e.preventDefault()
          }}>
            <div className="">
              <select className="w-[60px] rounded-full outline-none bg-gray-200 py-[.5rem] px-3 text-sm" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>All</option>
                <option value="cocaine">COCAINE</option>
                <option value="dabs">DABS</option>
                <option value="dmtvapes">DMT VAPES</option>
                <option value="edibles">EDIBLES</option>
                <option value="gummies">GUMMIES</option>
                <option value="ketamine">KETAMINE</option>
                <option value="mushroom-chocolate-bars">MUSHROOM CHOCOLATE BARS</option>
                <option value="party-pack">PARTY PACK</option>
                <option value="drugstore">PILLS</option>
                <option value="psychedelics">PSYCHEDELICS</option>
                <option value="weed">QUALITY WEED</option>
                <option value="shrooms-vapes">SHROOM VAPES</option>
                <option value="steroids">STEROIDS</option>
              </select>
            </div>

            <div className="flex-col flex-grow">
              <input type="search" placeholder="Search" name="s" autoComplete="off"
                className="w-[500px] rounded-full outline-none bg-gray-200 py-[.5rem] px-4 text-sm"
              />
            </div>

            <div className="flex gap-4 ml-10">
              <div className="w-[35px] h-[35px] rounded-full border-[1.5px] border-[#1E73BE] grid place-items-center">
                <RiUser6Fill color='#1E73BE' />
              </div>

              <div className="min-h-full border border-gray-200"></div>

              <div className="flex items-center justify-center gap-3 bg-[#1E73BE] text-white font-[600] text-[.8rem] py-1 px-4 rounded-full">
                <span>Cart/$0.00</span>
                <BsCart2 color='white' />
              </div>
            </div>
          </form>
        </div>

        <form role="search" method="get" className="flex lg:hidden items-center gap-3 bg-black/90 py-4 px-[3%] text-white" action="" onSubmit={(e) => {
          e.preventDefault()
        }}>
          <div className="">
            <select className="w-[30px] rounded-full outline-none bg-white/20 text-black py-[.5rem] px-3 text-sm" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled></option>
              <option value="cocaine">COCAINE</option>
              <option value="dabs">DABS</option>
              <option value="dmtvapes">DMT VAPES</option>
              <option value="edibles">EDIBLES</option>
              <option value="gummies">GUMMIES</option>
              <option value="ketamine">KETAMINE</option>
              <option value="mushroom-chocolate-bars">MUSHROOM CHOCOLATE BARS</option>
              <option value="party-pack">PARTY PACK</option>
              <option value="drugstore">PILLS</option>
              <option value="psychedelics">PSYCHEDELICS</option>
              <option value="weed">QUALITY WEED</option>
              <option value="shrooms-vapes">SHROOM VAPES</option>
              <option value="steroids">STEROIDS</option>
            </select>
          </div>

          <div className="flex-col flex-grow">
            <input type="search" placeholder="Search" name="s" autoComplete="off"
              className="w-full rounded-full outline-none bg-white/20 py-[.5rem] px-4 text-sm"
            />
          </div>
        </form>

        <div className="top-header hidden lg:flex px-[15%] bg-black/90 py-4">
          <ul className="flex items-center gap-5 text-white/80">
            <li className="">
              <Link href="#store" className="cursor-pointer flex items-center gap-2">
                <FaStoreAlt size="20px" />
                <span className="">Store</span>
              </Link>
            </li>
            <li className="">
              <Link href="#psychedelics" className="cursor-pointer flex items-center gap-2">
                <FaRegEye size="20px" />
                <span className="">Psychedelics</span>
              </Link>
            </li>
            <li className="">
              <Link href="#weed" className="cursor-pointer flex items-center gap-2">
                <GiPalmTree size="20px" />
                <span className="">Weed (Kush)</span>
              </Link>
            </li>
            <li className="">
              <Link href="#pills" className="cursor-pointer flex items-center gap-2">
                <CiPill size="20px" />
                <span className="">Pills</span>
              </Link>
            </li>
            <li className="">
              <Link href="#about" className="cursor-pointer flex items-center gap-2">
                <GiBowlingPin size="20px" />
                <span className="">About</span>
              </Link>
            </li>
            <li className="">
              <span className="cursor-pointer flex items-center gap-2">
                <FaStarHalfAlt size="20px" />
                <span className="">Reviews</span>
              </span>
            </li>
          </ul>
        </div>
        
      </div>
    </header >
  )
}
