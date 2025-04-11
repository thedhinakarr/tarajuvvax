import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"

// Color palette based on provided colors (for reference)
const colors = {
  blue: "#296FC7",     // Blue
  purple: "#A04187",   // Purple
  orange: "#EE4C01",   // Orange
  brown: "#723C0C",    // Brown
  green: "#91DF5D",    // Green
  black: "#191919",    // Black
  pink: "#FFB7B9",     // Pink
  teal: "#08444F"      // Teal
}

// Custom CSS with neo-brutalist styling that can't be done with Tailwind alone
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Archivo+Black&display=swap');

  body {
    font-family: 'Space Mono', monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Archivo Black', sans-serif;
  }

  /* Zigzag pattern */
  .zigzag {
    height: 20px;
    background: linear-gradient(135deg, #191919 25%, transparent 25%) -20px 0,
                linear-gradient(225deg, #191919 25%, transparent 25%) -20px 0,
                linear-gradient(315deg, #191919 25%, transparent 25%),
                linear-gradient(45deg, #191919 25%, transparent 25%);
    background-size: 40px 40px;
  }
`

// Neo-brutalist Button component
const NeoButton = ({ children, bgColor = "bg-black", textColor = "text-white", className = "", ...props }) => {
  return (
    <button
      className={`${bgColor} ${textColor} border-4 border-black font-bold uppercase tracking-wider px-8 py-4 shadow-neo transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Product Card component
const ProductCard = ({ image, title, price, tag = "NEW", bgColor = "bg-pink-300" }) => {
  return (
    <div className="border-4 border-black shadow-neo bg-white transform -rotate-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-neo-lg">
      <div className="relative border-b-4 border-black overflow-hidden">
        <div className={`${bgColor} aspect-[4/5] flex items-center justify-center text-4xl font-bold text-white`}>
          TARRAJUWA
        </div>
        tag && (
        <div className="absolute top-3 right-3 bg-blue-600 text-white py-1 px-3 font-bold border-2 border-black transform rotate-3 z-10">
          {tag}
        </div>
        )
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold text-black mb-1">{title}</h3>
        <p className="text-xl font-bold text-orange-600 mb-4">{price}</p>
        <NeoButton className="text-sm py-2 px-4 shadow-sm">
          ADD TO CART
        </NeoButton>
      </div>
    </div>
  );
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
          )
        }
      }
      patternImage: file(relativePath: { eq: "pattern.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            aspectRatio: 0.8
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      patternbigImage: file(relativePath: { eq: "patternbig.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            aspectRatio: 0.8
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      pattern1: file(relativePath: { eq: "pattern1.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            aspectRatio: 0.8
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      pattern2: file(relativePath: { eq: "pattern2.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            aspectRatio: 0.8
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      pattern3: file(relativePath: { eq: "pattern3.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            aspectRatio: 0.8
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }

      ourstory: file(relativePath: { eq: "ourstory.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            aspectRatio: 0.8
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)


  const logoImage = getImage(data.logoImage) || null
  const patternImage = getImage(data.patternImage) || null
  const patternbigImage = getImage(data.patternbigImage) || null
  const ourstoryImage = getImage(data.ourstory) || null
  const pattern1 = getImage(data.pattern1) || null
  const pattern2 = getImage(data.pattern2) || null
  const pattern3 = getImage(data.pattern3) || null

  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>TARRAJUWA | Neo-Brutalist Clothing</title>
        <meta name="description" content="TARRAJUWA - Bold, functional neo-brutalist clothing designs" />
        <style>{customStyles}</style>
        <style>{`
          .shadow-neo {
            box-shadow: 8px 8px 0 #191919;
          }
          .shadow-neo-lg {
            box-shadow: 12px 12px 0 #191919;
          }
          .text-shadow {
            text-shadow: 4px 4px 0 #191919;
          }
          .text-shadow-sm {
            text-shadow: 2px 2px 0 #191919;
          }
        `}</style>
      </Helmet>

      {/* Navigation */}
      <Header logoImage={logoImage} />
      {/* Hero Section with Centered Image */}
      {/* Hero Section with Centered Text on Image */}
      <section className="min-h-screen relative bg-pink-700">

        {/* Hero Image Container */}
        <div className="container mx-auto px-4 py-8-28 pb-16 flex items-center justify-center h-screen">
          <div className="relative max-w-5xl w-full mx-auto">
            {/* Hero Image with Border */}
            <div className="border-4 border-black shadow-neo-lg bg-white overflow-hidden relative">
              <div className="relative">
                <GatsbyImage
                  image={patternbigImage}
                  alt="Tarrajuwa Hero"
                  className="w-full transition-transform duration-700 hover:scale-105"
                />

                {/* Centered Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-black bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-orange-500 uppercase tracking-wider"
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        textShadow: "4px 4px 0px #91DF5D",
                        letterSpacing: "0.05em",
                        lineHeight: "1.1"
                      }}>
                      Bold. Brutal. (Fun)ctional.
                    </h1>
                    <div className="mt-8">
                      <NeoButton bgColor="bg-green-600" className="text-xl py-4 px-8">
                        SHOP NOW
                      </NeoButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-blue-600 relative">
        <div className="zigzag absolute top-0 left-0 right-0"></div>

        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black mb-16 text-center text-white uppercase text-shadow"
          >
            Pattern Collection
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { image: pattern1, title: "UTILITY CARGO PANTS", price: "$129", color: "bg-pink-900" },
              { image: pattern2, title: "OVERSIZED JACKET", price: "$189", color: "bg-purple-900" },
              { image: pattern3, title: "GRAPHIC PRINT TEE", price: "$79", color: "bg-green-900" }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  bgColor={product.color}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              <NeoButton className="text-xl">
                VIEW ALL PRODUCTS
              </NeoButton>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-1/10 right-1/20 w-24 h-24 bg-orange-600 border-4 border-black transform rotate-12"></div>
        <div className="absolute top-1/5 left-1/20 w-16 h-16 rounded-full bg-teal-800 border-4 border-black"></div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-green-400 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-black mb-8 text-black uppercase" style={{ textShadow: '4px 4px 0 white' }}>
                Our Approach
              </h2>
              <p className="text-xl mb-4 font-bold text-black">
                TARAJUVVA creates functional clothing with a bold upcycle to upgrade ideology.
              </p>
              <p className="text-xl mb-8 font-bold text-black">
                Each piece is designed to stand out while providing maximum utility for everyday life.
              </p>
              <NeoButton bgColor="bg-black" textColor="text-white">
                LEARN MORE
              </NeoButton>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="border-4 border-black shadow-neo bg-purple-600 transform rotate-6 aspect-square flex items-center justify-center p-10">
                <GatsbyImage
                  image={ourstoryImage}
                  alt="Tarrajuwa Logo"
                  className="w-dull"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-300 border-4 border-black transform -rotate-12"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-pink-300 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black mb-6 text-black uppercase"
            style={{ textShadow: '4px 4px 0 white' }}
          >
            Join Our Community
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-10 max-w-2xl mx-auto font-bold text-black"
          >
            Subscribe to get exclusive access to new drops, discounts, and events.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-lg mx-auto relative"
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-1 px-4 py-4 text-lg font-bold border-4 border-black shadow-neo focus:outline-none focus:-translate-x-1 focus:-translate-y-1 transition-transform"
              />
              <NeoButton type="submit" bgColor="bg-black" textColor="text-white">
                SUBSCRIBE
              </NeoButton>
            </form>

            {/* Decorative Elements */}
            <div className="absolute -top-5 -right-5 w-10 h-10 bg-blue-600 border-3 border-black transform rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-orange-600 border-3 border-black"></div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-white border-t-4 border-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="w-32 mb-6">
                <GatsbyImage
                  image={logoImage}
                  alt="Tarrajuwa Logo"
                />
              </div>
              <p className="text-gray-400 mb-6">Bold, brutal, functional clothing.</p>
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter"].map((platform, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-white text-black border-2 border-black transition-transform duration-300 hover:rotate-6 hover:bg-green-400"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {platform === "facebook" && (
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      )}
                      {platform === "instagram" && (
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                      )}
                      {platform === "twitter" && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 uppercase">Shop</h4>
              <ul className="space-y-3">
                {["New Arrivals", "Tops", "Bottoms", "Outerwear", "Accessories"].map((item, index) => (
                  <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link to={`/collections/${item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 uppercase">Info</h4>
              <ul className="space-y-3">
                {["About Us", "Sustainability", "Sizing Guide", "Shipping & Returns", "Contact Us"].map((item, index) => (
                  <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link to={`/${item.toLowerCase().replace(/\s+&\s+|\s+/g, "-")}`} className="text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 uppercase">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest drops</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-3 flex-1 border-2 border-white bg-transparent text-white focus:outline-none font-mono"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 border-2 border-white border-l-0 font-bold hover:bg-blue-700 transition-colors"
                >
                  GO
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-gray-800 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} TARAJUVVA. Powered by siteitup.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>TARRAJUWA |(fun)ctional Clothing</title>
