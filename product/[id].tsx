import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return <h1>sucesso hgsdyatwytyhxbccyuw kkkk: {JSON.stringify(query)}</h1>;
}
