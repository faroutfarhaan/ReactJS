
// Swiggy API to get Restaurant data using foodfire server
export const FOODFIRE_API_URL = `${process.env.REACT_FOODFIRE_APP_BASE_URL}restaurants?lat=22.719568&lng=75.857727&page_type=DESKTOP_WEB_LISTING`;

// Swiggy API to get Restaurant Menu data using foodfire server
export const FOODFIRE_MENU_API_URL = `${process.env.REACT_FOODFIRE_APP_BASE_URL}menu?page-type=REGULAR_MENU&complete-menu=true&lat=22.719568&lng=75.857727&&submitAction=ENTER&restaurantId=`;


// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";


  // Image CDN URL for Restaurant card
export const IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/`;
// export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// export const restaurantList=[
//     {
//         "info": {
//           "id": "881203",
//           "name": "Chinese Wok",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg",
//           "locality": "Tukoganj Main road",
//           "areaName": "Treasure Island Indore",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Chinese",
//             "Asian",
//             "Tibetan",
//             "Desserts"
//           ],
//           "avgRating": 4.5,
//           "parentId": "61955",
//           "avgRatingString": "4.5",
//           "totalRatingsString": "50+",
//           "sla": {
//             "deliveryTime": 45,
//             "lastMileTravel": 5.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "45-50 mins",
//             "lastMileTravelString": "5.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-16 23:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹149"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "isNewlyOnboarded": true,
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-2cac0464-da78-4c12-a661-3a477c140912"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/chinese-wok-tukoganj-main-road-treasure-island-indore-indore-881203",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//       },
//       {
//         "info": {
//           "id": "581971",
//           "name": "Pizza Hut",
//           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//           "locality": "Airport Road",
//           "areaName": "Kalani Nagar",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Pizzas"
//           ],
//           "avgRating": 4.2,
//           "parentId": "721",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 25,
//             "lastMileTravel": 1.5,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "1.5 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-17 02:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹90"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-2cac0464-da78-4c12-a661-3a477c140912"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/pizza-hut-airport-road-kalani-nagar-indore-581971",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//       },
//       {
//         "info": {
//           "id": "728301",
//           "name": "Burger King",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_728301.JPG",
//           "locality": "New Palasia",
//           "areaName": "Indore",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Burgers",
//             "American"
//           ],
//           "avgRating": 4.2,
//           "parentId": "166",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "5K+",
//           "sla": {
//             "deliveryTime": 35,
//             "lastMileTravel": 6.1,
//             "serviceability": "SERVICEABLE",
//             "slaString": "35-40 mins",
//             "lastMileTravelString": "6.1 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-17 02:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Burger.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Burger.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹159"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-2cac0464-da78-4c12-a661-3a477c140912"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/burger-king-new-palasia-indore-indore-728301",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//       },
//       {
//         "info": {
//           "id": "322540",
//           "name": "UBQ BY Barbeque Nation",
//           "cloudinaryImageId": "ousldxwz6z3cypd2pygf",
//           "locality": "Treasure Island Mall",
//           "areaName": "Mahatma Gandhi Road",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Barbecue",
//             "Biryani",
//             "Kebabs",
//             "Mughlai",
//             "Desserts"
//           ],
//           "avgRating": 4.1,
//           "parentId": "10804",
//           "avgRatingString": "4.1",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 46,
//             "lastMileTravel": 5.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "45-50 mins",
//             "lastMileTravelString": "5.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-16 23:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "60% OFF",
//             "subHeader": "UPTO ₹120"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-2cac0464-da78-4c12-a661-3a477c140912"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-treasure-island-mall-mahatma-gandhi-road-indore-322540",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//       },
//       {
//         "info": {
//           "id": "84070",
//           "name": "Gurukripa Restaurant - Sarwate",
//           "cloudinaryImageId": "g5txnz35wlrgbskk3r8y",
//           "locality": "Sarwate",
//           "areaName": "South Tukoganj",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "North Indian",
//             "Thalis",
//             "Indian",
//             "Fast Food",
//             "Chinese",
//             "Beverages",
//             "Desserts",
//             "Jain",
//             "Punjabi"
//           ],
//           "avgRating": 4.3,
//           "veg": true,
//           "parentId": "92204",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "10K+",
//           "sla": {
//             "deliveryTime": 33,
//             "lastMileTravel": 4.4,
//             "serviceability": "SERVICEABLE",
//             "slaString": "30-35 mins",
//             "lastMileTravelString": "4.4 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-16 23:59:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹100"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-2cac0464-da78-4c12-a661-3a477c140912"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/gurukripa-restaurant-sarwate-sarwate-south-tukoganj-indore-84070",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//       },
//       {
//         "info": {
//           "id": "148404",
//           "name": "Om Namkeen",
//           "cloudinaryImageId": "okkh43ib3xm733hebgus",
//           "locality": "Jawahar Marg",
//           "areaName": "Lodhipura",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "Snacks"
//           ],
//           "avgRating": 4.6,
//           "veg": true,
//           "parentId": "7861",
//           "avgRatingString": "4.6",
//           "totalRatingsString": "10K+",
//           "sla": {
//             "deliveryTime": 20,
//             "lastMileTravel": 1.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "15-20 mins",
//             "lastMileTravelString": "1.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-16 21:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "aggregatedDiscountInfoV2": {
            
//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-2cac0464-da78-4c12-a661-3a477c140912"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/om-namkeen-jawahar-marg-lodhipura-indore-148404",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//       },
//       {
//         "info": {
//           "id": "199639",
//           "name": "Apna Sweets",
//           "cloudinaryImageId": "kt09zylanc2qd5eg116a",
//           "locality": "Bhakt Prahlad Nagar",
//           "areaName": "Bhakt Prahlad Nagar",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Sweets",
//             "Beverages",
//             "Street Food",
//             "South Indian",
//             "Fast Food",
//             "Chinese",
//             "Desserts"
//           ],
//           "avgRating": 4.6,
//           "veg": true,
//           "parentId": "8960",
//           "avgRatingString": "4.6",
//           "totalRatingsString": "10K+",
//           "sla": {
//             "deliveryTime": 21,
//             "lastMileTravel": 1.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "1.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-07-16 22:30:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Mithai.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "Rxawards/_CATEGORY-Poa%20Kachori.png",
//                 "description": "Delivery!"
//               },
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Mithai.png"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Poa%20Kachori.png"
//                     }
//                   },
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "20% OFF",
//             "subHeader": "UPTO ₹100"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "4.1",
//               "ratingCount": "1K+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-2cac0464-da78-4c12-a661-3a477c140912"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/apna-sweets-bhakt-prahlad-nagar-indore-199639",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//       },
// ];
// RestaurantList is JSON Data for displaying cards
// export const restaurantList = [
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "74453",
//       name: "Domino's Pizza",
//       uuid: "87727dbd-7f2b-4857-9763-359624165845",
//       city: "21",
//       area: "Athwa",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//       cuisines: ["Pizzas"],
//       tags: [],
//       costForTwo: 40000,
//       costForTwoString: "₹400 FOR TWO",
//       deliveryTime: 45,
//       minDeliveryTime: 45,
//       maxDeliveryTime: 45,
//       slaString: "45 MINS",
//       lastMileTravel: 0,
//       slugs: {
//         restaurant: "dominos-pizza-majura-nondh-test_surat",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
//       locality: "Bhatar Road",
//       parentId: 2456,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "2.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "74453",
//         deliveryTime: 45,
//         minDeliveryTime: 45,
//         maxDeliveryTime: 45,
//         lastMileTravel: 0,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.0",
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "410476",
//       name: "The Brooklyn Creamery - Healthy Ice Cream",
//       uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
//       city: "21",
//       area: "althan bhatar",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "ldtibwymvzehvmdwl8la",
//       cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 6.300000190734863,
//       slugs: {
//         restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
//       locality: "Adajan FC",
//       parentId: 236673,
//       unserviceable: true,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.3 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "410476",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 6.300000190734863,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.4",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "81094",
//       name: "Richie Rich Juices & Shakes",
//       uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
//       city: "21",
//       area: "Athwa",
//       totalRatingsString: "500+ ratings",
//       cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
//       cuisines: ["Ice Cream"],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: "₹250 FOR TWO",
//       deliveryTime: 30,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 5.599999904632568,
//       slugs: {
//         restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
//       locality: "Parle Point",
//       parentId: 771,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "5.5 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "81094",
//         deliveryTime: 30,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 5.599999904632568,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "3.9",
//       totalRatings: 500,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "311443",
//       name: "Siddhi Icecream & Thick Shake",
//       uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
//       city: "21",
//       area: "Nanpura",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "spd3y5gok3vvwqulgmda",
//       cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 30,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 35,
//       slaString: "25-35 MINS",
//       lastMileTravel: 3,
//       slugs: {
//         restaurant: "siddhi-icecream-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
//       locality: "Athwa",
//       parentId: 387846,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "3 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "311443",
//         deliveryTime: 30,
//         minDeliveryTime: 25,
//         maxDeliveryTime: 35,
//         lastMileTravel: 3,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.5",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "307070",
//       name: "Pizza Pie",
//       uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
//       city: "21",
//       area: "Nanpura",
//       totalRatingsString: "50+ ratings",
//       cloudinaryImageId: "bvr70adr30ejyr5ua79k",
//       cuisines: ["Pizzas"],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 37,
//       minDeliveryTime: 35,
//       maxDeliveryTime: 45,
//       slaString: "35-45 MINS",
//       lastMileTravel: 4,
//       slugs: {
//         restaurant: "pizza-pie-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
//       locality: "Nanpura",
//       parentId: 158854,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "4 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "307070",
//         deliveryTime: 37,
//         minDeliveryTime: 35,
//         maxDeliveryTime: 45,
//         lastMileTravel: 4,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.2",
//       totalRatings: 50,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "76858",
//       name: "Feeling Hungry",
//       uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
//       city: "21",
//       area: "Athwa",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
//       cuisines: ["Chinese", "North Indian", "Biryani"],
//       tags: [],
//       costForTwo: 2000,
//       costForTwoString: "₹20 FOR TWO",
//       deliveryTime: 35,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 3.700000047683716,
//       slugs: {
//         restaurant: "feeling-hungry-adajan-gam-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
//       locality: "Royal Residency, Adajan Gam",
//       parentId: 79237,
//       unserviceable: true,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "3.7 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "76858",
//         deliveryTime: 35,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 3.700000047683716,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "3.2",
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "617279",
//       name: "Malaxmi Fast Food",
//       uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
//       city: "21",
//       area: "Adajan",
//       totalRatingsString: "20+ ratings",
//       cloudinaryImageId: "agkm7cflq72tkualhstb",
//       cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 44,
//       minDeliveryTime: 40,
//       maxDeliveryTime: 50,
//       slaString: "40-50 MINS",
//       lastMileTravel: 9.100000381469727,
//       slugs: {
//         restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
//         city: "surat",
//       },
//       cityState: "21",
//       address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
//       locality: "Palanpur Food Zone",
//       parentId: 373635,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "9.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "617279",
//         deliveryTime: 44,
//         minDeliveryTime: 40,
//         maxDeliveryTime: 50,
//         lastMileTravel: 9.100000381469727,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.0",
//       totalRatings: 20,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "469264",
//       name: "Dessert House",
//       uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "Too Few Ratings",
//       cloudinaryImageId: "jegpumsjcmomksbr2sxr",
//       cuisines: ["Desserts", "Ice Cream"],
//       tags: [],
//       costForTwo: 15000,
//       costForTwoString: "₹150 FOR TWO",
//       deliveryTime: 27,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 35,
//       slaString: "25-35 MINS",
//       lastMileTravel: 6.199999809265137,
//       slugs: {
//         restaurant: "dessert-house-piplod-piplod",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
//       locality: "Piplod",
//       parentId: 71430,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "469264",
//         deliveryTime: 27,
//         minDeliveryTime: 25,
//         maxDeliveryTime: 35,
//         lastMileTravel: 6.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.5",
//       totalRatings: 0,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "395204",
//       name: "McDonald's Gourmet Burger Collection",
//       uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: "₹500 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 8.199999809265137,
//       slugs: {
//         restaurant:
//           "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
//       locality: "Valentine Cinema",
//       parentId: 10761,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "8.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "395204",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 8.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.2",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "193541",
//       name: "Behrouz Biryani",
//       uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
//       city: "21",
//       area: "Adajan Patiya",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "craozjakzx7sll2uracb",
//       cuisines: [
//         "Biryani",
//         "Mughlai",
//         "Lucknowi",
//         "Hyderabadi",
//         "Kebabs",
//         "North Indian",
//         "Persian",
//         "Desserts",
//       ],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: "₹500 FOR TWO",
//       deliveryTime: 49,
//       minDeliveryTime: 45,
//       maxDeliveryTime: 55,
//       slaString: "45-55 MINS",
//       lastMileTravel: 6.400000095367432,
//       slugs: {
//         restaurant: "behrouz-biryani-adajan-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
//       locality: "Nr Navyug College, Rander Road",
//       parentId: 1803,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.4 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "193541",
//         deliveryTime: 49,
//         minDeliveryTime: 45,
//         maxDeliveryTime: 55,
//         lastMileTravel: 6.400000095367432,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.3",
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "475510",
//       name: "Momos House",
//       uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "Too Few Ratings",
//       cloudinaryImageId: "vmold2zualdrrypxcvue",
//       cuisines: ["Fast Food"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 6.199999809265137,
//       slugs: {
//         restaurant: "momo’s-house-piplod-piplod",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
//       locality: "Vesu",
//       parentId: 15884,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "475510",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 6.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.1",
//       totalRatings: 0,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "127596",
//       name: "Sabir Chicken",
//       uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
//       city: "21",
//       area: "Chowk Bazar",
//       totalRatingsString: "5000+ ratings",
//       cloudinaryImageId: "kilrdjqt8chduasii5ni",
//       cuisines: ["North Indian", "Biryani"],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 30,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 35,
//       slaString: "25-35 MINS",
//       lastMileTravel: 4.300000190734863,
//       slugs: {
//         restaurant: "sabir-chicken-athwa-athwa",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
//       locality: "Chowk Bazar",
//       parentId: 173978,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "4.3 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "127596",
//         deliveryTime: 30,
//         minDeliveryTime: 25,
//         maxDeliveryTime: 35,
//         lastMileTravel: 4.300000190734863,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.1",
//       totalRatings: 5000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "64656",
//       name: "Mahesh Pav Bhaji",
//       uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
//       city: "21",
//       area: "Adajan",
//       totalRatingsString: "10000+ ratings",
//       cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
//       cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: "₹250 FOR TWO",
//       deliveryTime: 36,
//       minDeliveryTime: 35,
//       maxDeliveryTime: 45,
//       slaString: "35-45 MINS",
//       lastMileTravel: 6.900000095367432,
//       slugs: {
//         restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
//       locality: "Adajan Gam",
//       parentId: 6553,
//       unserviceable: true,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "30% off",
//         shortDescriptionList: [
//           {
//             meta: "30% off | Use JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "30% OFF",
//         shortDescriptionList: [
//           {
//             meta: "Use JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.9 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "64656",
//         deliveryTime: 36,
//         minDeliveryTime: 35,
//         maxDeliveryTime: 45,
//         lastMileTravel: 6.900000095367432,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.1",
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "255204",
//       name: "The Dango Cake Shop",
//       uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
//       city: "21",
//       area: "Galaxy Circle",
//       totalRatingsString: "50+ ratings",
//       cloudinaryImageId: "mnvfpsoealkflze4e5qi",
//       cuisines: ["Bakery"],
//       tags: [],
//       costForTwo: 27000,
//       costForTwoString: "₹270 FOR TWO",
//       deliveryTime: 34,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//       slaString: "30-40 MINS",
//       lastMileTravel: 7.699999809265137,
//       slugs: {
//         restaurant: "twisted-cake-live-cake-adajan-adajan",
//         city: "surat",
//       },
//       cityState: "21",
//       address: "44 La Victoria, galaxy circle pal Surat",
//       locality: "Galaxy Circle",
//       parentId: 207513,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "7.6 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "255204",
//         deliveryTime: 34,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//         lastMileTravel: 7.699999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.2",
//       totalRatings: 50,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "664656",
//       name: "Cheezylicious Cafe",
//       uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
//       city: "21",
//       area: "Piplod",
//       totalRatingsString: "Too Few Ratings",
//       cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
//       cuisines: [
//         "Cafe",
//         "Fast Food",
//         "Chinese",
//         "Snacks",
//         "Italian",
//         "Mexican",
//       ],
//       tags: [],
//       costForTwo: 15000,
//       costForTwoString: "₹150 FOR TWO",
//       deliveryTime: 38,
//       minDeliveryTime: 35,
//       maxDeliveryTime: 45,
//       slaString: "35-45 MINS",
//       lastMileTravel: 7.599999904632568,
//       slugs: {
//         restaurant: "cheezylicious-cafe-piplod-piplod-2",
//         city: "surat",
//       },
//       cityState: "21",
//       address:
//         "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
//       locality: "Dream heritage",
//       parentId: 59292,
//       unserviceable: true,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "7.5 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "664656",
//         deliveryTime: 38,
//         minDeliveryTime: 35,
//         maxDeliveryTime: 45,
//         lastMileTravel: 7.599999904632568,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE_WITH_BANNER",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "3.9",
//       totalRatings: 0,
//       new: true,
//     },
//     subtype: "basic",
//   },
// ];
// export default restaurantList;