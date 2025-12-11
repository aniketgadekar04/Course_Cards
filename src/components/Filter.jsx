function Filter({ fiterData }) {
  return (
    <div>
      {fiterData.map((e) => {
        return <button>{e.title}</button>;
      })}
    </div>
  );
}

export default Filter;
