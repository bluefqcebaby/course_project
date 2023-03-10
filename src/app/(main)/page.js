import Label from "@/app/label";

async function getData() {
  const data = await fetch(`http://localhost:3000/api/global-info`, {
    method: "GET",
  });
  return await data.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="container h-[60px] flex items-center">
      <div className="flex gap-1 items-center">
        <p>криптовалют</p>
        <Label title={data.totalCurrencies} />
      </div>
    </div>
  );
}
