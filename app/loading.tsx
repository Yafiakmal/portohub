import "./animation.css";

export default function Loading() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center ">
      <h1>Loading...</h1>
      <div className="realative h-2 w-52 overflow-hidden rounded-full bg-muted-foreground">
        <div className="loading-linear"></div>
      </div>
    </div>
  );
}
