// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import SwiperCore from "swiper";
// import "swiper/css/bundle";
// import ListingItem from "../components/ListingItem";

// export default function Home() {
//   const [offerListings, setOfferListings] = useState([]);
//   const [saleListings, setSaleListings] = useState([]);
//   const [rentListings, setRentListings] = useState([]);
//   SwiperCore.use([Navigation]);
//   console.log(offerListings);
//   useEffect(() => {
//     const fetchOfferListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?offer=true&limit=4");
//         const data = await res.json();
//         setOfferListings(data);
//         fetchRentListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchRentListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?type=rent&limit=4");
//         const data = await res.json();
//         setRentListings(data);
//         fetchSaleListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchSaleListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?type=sale&limit=4");
//         const data = await res.json();
//         setSaleListings(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchOfferListings();
//   }, []);
//   return (
//     <div>
//       {/* top */}
//       <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
//         <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
//           Find your next <span className="text-slate-500">perfect</span>
//           <br />
//           place with ease
//         </h1>
//         <div className="text-gray-400 text-xs sm:text-sm">
//           Anonymous Estate is the best place to find your next perfect place to
//           live.
//           <br />
//           We have a wide range of properties for you to choose from.
//         </div>
//         <Link
//           to={"/search"}
//           className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
//         >
//           Let's get started...
//         </Link>
//       </div>
//       {/* swiper */}
//       <Swiper navigation>
//         {offerListings &&
//           offerListings.length > 0 &&
//           offerListings.map((listing) => (
//             <SwiperSlide key={listing._id}>
//               <div
//                 style={{
//                   background: `url(${listing.imageUrls[0]}) center no-repeat`,
//                   backgroundSize: "cover",
//                 }}
//                 className="h-[500px]"
//               ></div>
//             </SwiperSlide>
//           ))}
//       </Swiper>

//       {/* listing results for offer, sale and rent */}

//       <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
//         {offerListings && offerListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-slate-600">
//                 Recent offers
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?offer=true"}
//               >
//                 Show more offers
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {offerListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {rentListings && rentListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-slate-600">
//                 Recent places for rent
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?type=rent"}
//               >
//                 Show more places for rent
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {rentListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {saleListings && saleListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-slate-600">
//                 Recent places for sale
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?type=sale"}
//               >
//                 Show more places for sale
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {saleListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black">
        <div className="absolute inset-0 z-10 bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-4xl lg:text-7xl font-extrabold drop-shadow-lg">
            Find Your Next Perfect Place
          </h1>
          <p className="text-gray-300 text-lg lg:text-2xl mt-4 max-w-xl">
            Anonymous Estate offers a wide range of homes tailored to your needs.
          </p>
          <Link
            to="/search"
            className="mt-6 bg-gray-800 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out py-3 px-8 rounded-full shadow-md text-lg lg:text-xl"
          >
            Let's get started
          </Link>
        </div>
        <Swiper
          navigation
          className="absolute inset-0 z-0"
          style={{ zIndex: -1 }} // Prevent overlap
        >
          {offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="w-full h-screen"
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Feature Highlights */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid gap-12 grid-cols-1 md:grid-cols-3 text-center text-gray-300">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Top Offers</h3>
          <p>Discover exclusive deals on properties today!</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Rentals</h3>
          <p>Find your dream rental in the perfect location.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">For Sale</h3>
          <p>Browse homes available for purchase right now!</p>
        </div>
      </div>

      {/* Recent Listings */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        {offerListings.length > 0 && (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-100">Recent Offers</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              to="/search?offer=true"
              className="block text-gray-400 hover:text-gray-200 hover:underline mt-4 text-center"
            >
              Show more offers
            </Link>
          </div>
        )}

        {rentListings.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-100">Recent Rentals</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              to="/search?type=rent"
              className="block text-gray-400 hover:text-gray-200 hover:underline mt-4 text-center"
            >
              Show more rentals
            </Link>
          </div>
        )}

        {saleListings.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-100">Recent Sales</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              to="/search?type=sale"
              className="block text-gray-400 hover:text-gray-200 hover:underline mt-4 text-center"
            >
              Show more homes for sale
            </Link>
          </div>
        )}
      </div>

      {/* Testimonials */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto text-center text-gray-300">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <p className="text-lg max-w-2xl mx-auto">
            "Finding the perfect home was never easier. The team at Anonymous Estate was supportive every step of the way."
          </p>
          <p className="text-lg max-w-2xl mx-auto mt-6">"Seamless process and amazing customer service!"</p>
        </div>
      </div>
    </div>
  );
}
