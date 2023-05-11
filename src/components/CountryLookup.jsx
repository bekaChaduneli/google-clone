"use client";
import React, { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United State");
  useEffect(() => {
    fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country_name));
  });
  return <div>{country}</div>;
}
