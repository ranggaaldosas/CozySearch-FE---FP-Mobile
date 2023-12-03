FP Pemweb

- Onboard (welcoming)

  - Onboarding.jsx (isi nya buat load foto)
  - components/Onboard/Slides.jsx (components)

- Home.jsx

  - Section 1 (Places)

    - components/Home/Places.jsx (terdiri dari bbrp card)
      - components/Tiles/Country/Country.jsx (ngelempar ke CountryDetail(USA))
        - screens/details/CountryDetails.jsx (Appbar + USA + dll)
    - components/Country/PopularList.jsx (List dari tempat populer (Walt Disney & Statue of liberty) berbentuk vertical)
      - screens/details/PlaceDetails.jsx (Statue of Liberty Detail)

  - Section 2 (Recommendations)
    - components/Home/Recomendations.jsx (card)
  - components/tiles/HotelCard.jsx

    - screens/details/Recommended.jsx (list)

  - Section 3 (BestHotel)
    - components/Home/BestHotels.jsx (card nya)
    - screens/details/HotelList.jsx (buat list)

- Reusable Components
  - Appbar.jsx (navbar di dalem" nya gitu, ada logo left di kiri (onPress) dan search di kanan (OnPress1)
    - screens/search/HotelSearch.jsx
    - screens/search/Search.jsx (buat Places)
