import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const Header = () => {
  // Query for the logo image
  const data = useStaticQuery(graphql`
    query {
      headerLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 100
          )
        }
      }
    }
  `)

  // Get the image data
  const headerLogo = getImage(data.headerLogo)

  return (
    <header className="relative">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Stalinist+One&display=swap" rel="stylesheet" />
      </Helmet>
      {/* Dark header background */}
      <div className="w-full bg-black px-6 py-4 flex items-center justify-between">
        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden md:flex md:items-center space-x-6">
          <Link to="/" className="text-white uppercase font-medium text-sm hover:text-gray-300" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Home
          </Link>
          <Link to="/shop" className="text-white uppercase font-medium text-sm hover:text-gray-300" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Shop
          </Link>
          <Link to="/about" className="text-white uppercase font-medium text-sm hover:text-gray-300" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            About
          </Link>
          <Link to="/contact" className="text-white uppercase font-medium text-sm hover:text-gray-300" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Contact
          </Link>
        </nav>
        {/* Logo in center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <GatsbyImage
              image={headerLogo}
              alt="TARRAJUWA Logo"
              className="h-10 md:h-14 w-auto"
              imgClassName="h-full"
            />
          </Link>
        </div>
        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Search icon */}
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          {/* Account icon */}
          <Link to="/account" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          {/* Cart icon */}
          <Link to="/cart" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </Link>
        </div>
      </div>
      {/* White accent line below header */}
      <div className="w-full h-1 bg-white"></div>
    </header>
  )
}

export default Header
