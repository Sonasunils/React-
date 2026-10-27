
function Imagecard({ src }) {
  return (
    <div className="image-card">
      <img
        src={src}
        alt="Dog"
        width="200"
      />
    </div>
  );
}

export default Imagecard;
