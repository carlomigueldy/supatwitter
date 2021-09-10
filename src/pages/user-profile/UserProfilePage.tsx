import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function UserProfilePage() {
  const params = useParams();

  useEffect(() => {
    console.log(`params: `, params);
  }, []);

  return (
    <>
      <h1>UserProfilePage</h1>
    </>
  );
}
