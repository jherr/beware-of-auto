const SERVICES = process.env.SERVICES;

export const dynamic = "force-dynamic";

export default async function DynamicRoutePage() {
  const navReq = await fetch(`${SERVICES}/api/time`, {
    cache: "no-cache",
  });
  const { time } = await navReq.json();

  const server = new Date().toTimeString();

  return (
    <div>
      <h1>Dynamic Route</h1>
      <p>This is a dynamic route.</p>
      <div>Server Time: {server}</div>
      <div>API Time: {time}</div>
    </div>
  );
}
